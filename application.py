from flask import Flask, request, jsonify
from person import Person
import distance

application = Flask(__name__)

people = [Person(100,100,150,150), Person(25,62,60,12)]

@application.route('/')
def index():
	return "Hello, World!"

#curl --data "lat=10&long=10&dest_lat=25&dest_long=25&penn_id=1234" localhost:5000/upload-status/
@application.route('/upload-status/', methods=['POST'])
def upload_status():
	lat = float(request.form['lat'])
	long = float(request.form['long'])
	dest_lat = float(request.form['dest_lat'])
	dest_long = float(request.form['dest_long'])
	penn_id = int(request.form['penn_id'])

	for person in people:
		if person.penn_id == penn_id:
			person.lat = lat
			person.long = long
			person.dest_lat = dest_lat
			person.dest_long = dest_long
			break
	else:
		new_person = Person(lat, long, dest_lat, dest_long, penn_id)
		people.append(new_person)

	return jsonify(success=True)

# http://localhost:5000/get-friend/?penn_id=1234
@application.route('/get-friend/', methods=['GET'])
def get_friend():
	penn_id = request.args.get('penn_id')

	if penn_id != None:
		penn_id = int(penn_id)
	else:
		return '''<h1>Please include a penn_id in the query</h1>'''

	myself = None
	others = []
	for person in people:
		if person.penn_id == penn_id:
			myself = person
		else:
			others.append(person)

	if myself == None:
		return '''<h1>Your penn_id was not found in our database</h1>'''

	closest_person = distance.closest(myself, others)
	if closest_person != None:
		meetup_location = distance.middle(myself, closest_person)
		return jsonify(penn_id_of_partner=closest_person.penn_id, meetup_location=meetup_location)
	else:
		return jsonify(penn_id_of_partner=False)
		
	

if __name__ == '__main__':
	application.run(debug=True)
