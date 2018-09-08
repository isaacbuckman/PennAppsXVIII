from flask import Flask, request
from person import Person
import distance

app = Flask(__name__)

people = [Person(100,100,150,150), Person(25,62,60,12)]

@app.route('/')
def index():
	return "Hello, World!"

#curl --data "lat=10&long=10&dest_lat=25&dest_long=25&penn_id=1234" localhost:5000/upload-status/
@app.route('/upload-status/', methods=['POST'])
def upload_status():
	lat = int(request.form['lat'])
	long = int(request.form['long'])
	dest_lat = int(request.form['dest_lat'])
	dest_long = int(request.form['dest_long'])
	penn_id = int(request.form['penn_id'])

	new_person = Person(lat, long, dest_lat, dest_long, penn_id)
	people.append(new_person)

	return '''Data successfully added!'''

# http://localhost:5000/get-friend/?penn_id=1234
@app.route('/get-friend/', methods=['GET'])
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

	return '''<h1>Your walking partner is {} <--- we need kevin to fix that number but bro is sleeping</h1>'''.format(closest_person)

if __name__ == '__main__':
	app.run(debug=True)