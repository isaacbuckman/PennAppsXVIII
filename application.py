from flask import Flask, request, jsonify
from person import Person
import distance

application = Flask(__name__)

people = [Person(100,100,150,150,"steve", 0000), Person(25,62,60,12,"pete",9999)]

@application.route('/')
def index():
	return "Hello, World"

#curl --data "lat=10&long=10&dest_lat=25&dest_long=25&penn_id=1234" localhost:5000/upload-status/
@application.route('/upload-status/', methods=['POST'])
def upload_status():
	lat = float(request.form['lat'])
	long = float(request.form['long'])
	dest_lat = float(request.form['dest_lat'])
	dest_long = float(request.form['dest_long'])
	name = request.form['name']
	penn_id = int(request.form['penn_id'])

	for person in people:
		if person.penn_id == penn_id:
			person.update(lat, long, dest_lat, dest_long)
			break
	else:
		new_person = Person(lat, long, dest_lat, dest_long, name, penn_id)
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
		people.remove(myself) #if paired, remove myself from database
		return jsonify(partner_id=closest_person.penn_id,partner_name=closest_person.name,meetup_location=meetup_location)
	else:
		return jsonify(success=False)

@application.route('/complete-cancel/', methods=['POST'])
def complete_cancel():
	penn_id = int(request.form['penn_id'])

	for person in people:
		print(str(person))

	for person in people:
		if person.penn_id == penn_id:
			people.remove(person)
			print()
			for person in people:
				print(str(person))
			return jsonify(success=True)

	return '''<h1>Your penn_id was not found in our database</h1>'''

if __name__ == '__main__':
	application.run(debug=True)
