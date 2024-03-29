from flask import Flask, request, jsonify
from person import Person
import distance
import requests

application = Flask(__name__)

# people = [Person(38.889447, -77.035877, 38.905422, -77.041039, "jo", "jo@upenn.edu"),  # washington monument
# 			Person(38.909489, -77.043248, 38.905422, -77.041039, "abe", "abe@upenn.edu"),  # dupont circle
# 			Person(38.890058, -77.049360, 38.905422, -77.041039, "me", "me@upenn.edu"),  # lincoln memorial
# 			Person(38.885384, -77.059784, 38.911817, -77.039953, "ti", "ti@upenn.edu"),  # arlington cemetary
# 			Person(38.890058, -77.049360, 38.911817, -77.039953, "ya", "ya@upenn.edu"),  # lincoln memorial
# 			]

people = []

@application.route('/')
def index():
	return '''<h1>WolfPackk</h1>'''

#Wolfpackk2-env.pyhextcpvt.us-east-2.elasticbeanstalk.com
#curl --data "lat=10&long=10&dest_lat=25&dest_long=25&email=buckman@upenn.edu" localhost:5000/upload-status/
@application.route('/upload-status/', methods=['POST'])
def upload_status():
	lat = float(request.form['lat'])
	long = float(request.form['long'])
	dest_lat = float(request.form['dest_lat'])
	dest_long = float(request.form['dest_long'])
	name = request.form['name']
	email = request.form['email']

	for person in people:
		if person.email == email:
			person.update(lat, long, dest_lat, dest_long)
			break
	else:
		new_person = Person(lat, long, dest_lat, dest_long, name, email)
		people.append(new_person)

	return jsonify(success=True)

# http://localhost:5000/get-friend/?email=hansen@upenn.edu
@application.route('/get-friend/', methods=['GET'])
def get_friend():
	email = request.args.get('email')

	if email == None:
		return '''<h1>Please include an email in the query</h1>'''

	myself = None
	others = []
	for person in people:
		if person.email == email:
			myself = person
		else:
			others.append(person)

	if myself == None:
		return '''<h1>Your email was not found in our database</h1>'''

	closest_person = distance.closest(myself, others)
	if closest_person != None:
		meetup_location = distance.middle(myself, closest_person)

		myself_request = requests.get("https://maps.googleapis.com/maps/api/distancematrix/json?origins={},{}&destinations={},{}&mode=walking&departure_time=now&key=AIzaSyCIXYRaiIsZgQRapVNgy1VNK8qduZAcKpM".format(myself.lat,myself.long,myself.dest_lat,myself.dest_long)).json()['rows'][0]['elements'][0]
		them_request = requests.get("https://maps.googleapis.com/maps/api/distancematrix/json?origins={},{}&destinations={},{}&mode=walking&departure_time=now&key=AIzaSyCIXYRaiIsZgQRapVNgy1VNK8qduZAcKpM".format(closest_person.lat,closest_person.long,closest_person.dest_lat,closest_person.dest_long)).json()['rows'][0]['elements'][0]

		if myself_request['status'] == 'OK' and them_request['status'] == 'OK':
			myself_time = myself_request['duration']['value']
			them_time = them_request['duration']['value']
		else:
			return jsonify(partner_email=closest_person.email,partner_name=closest_person.name,meetup_location=meetup_location,seconds_until_meetup=False)

		# myself_time = requests.get("https://maps.googleapis.com/maps/api/distancematrix/json?origins={},{}&destinations={},{}&mode=walking&departure_time=now&key=AIzaSyCIXYRaiIsZgQRapVNgy1VNK8qduZAcKpM".format(myself.lat,myself.long,myself.dest_lat,myself.dest_long)).json()['rows'][0]['elements'][0]['duration']['value']
		# them_time = requests.get("https://maps.googleapis.com/maps/api/distancematrix/json?origins={},{}&destinations={},{}&mode=walking&departure_time=now&key=AIzaSyCIXYRaiIsZgQRapVNgy1VNK8qduZAcKpM".format(closest_person.lat,closest_person.long,closest_person.dest_lat,closest_person.dest_long)).json()['rows'][0]['elements'][0]['duration']['value']
		wait = max(myself_time,them_time)

		return jsonify(partner_email=closest_person.email,partner_name=closest_person.name,meetup_location=meetup_location,seconds_until_meetup=wait)
	else:
		return jsonify(success=False)

@application.route('/complete-cancel/', methods=['POST'])
def complete_cancel():
	email = request.form['email']

	for person in people:
		if person.email == email:
			people.remove(person)
			return jsonify(success=True)

	return '''<h1>Your email was not found in our database</h1>'''

@application.route('/delete-all/', methods=['POST'])
def delete_all():
	del people[:]
	return jsonify(success=True)

@application.route('/data/', methods=['GET'])
def get_dataset():
	return jsonify(data=[str(person) for person in people])

if __name__ == '__main__':
	application.run(debug=True)
