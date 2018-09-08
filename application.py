from flask import Flask, request, jsonify
from person import Person
import distance

application = Flask(__name__)

people = [Person(100,100,150,150,"steve", 0000), Person(25,62,60,12,"pete",9999)]

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
		people.remove(myself) #if paired, remove myself from database
		return jsonify(partner_email=closest_person.email,partner_name=closest_person.name,meetup_location=meetup_location)
	else:
		return jsonify(success=False)

# @application.route('/complete-cancel/', methods=['POST'])
# def complete_cancel():
# 	email = request.form['email']

# 	for person in people:
# 		print(str(person))

# 	for person in people:
# 		if person.email == email:
# 			people.remove(person)
# 			print()
# 			for person in people:
# 				print(str(person))
# 			return jsonify(success=True)

# 	return '''<h1>Your email was not found in our database</h1>'''

if __name__ == '__main__':
	application.run(debug=True)
