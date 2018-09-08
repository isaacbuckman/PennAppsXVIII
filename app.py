from flask import Flask, request
from person import Person

app = Flask(__name__)

people = [Person(100,100,150,150), Person(25,62,60,12)]

@app.route('/')
def index():
	return "Hello, World!"

#curl --data "lat=10&long=10&dest_lat=25&dest_long=25" localhost:5000/upload-status/
@app.route('/upload-status/', methods=['POST'])
def upload_status():
	lat = int(request.form['lat'])
	long = int(request.form['long'])
	dest_lat = int(request.form['dest_lat'])
	dest_long = int(request.form['dest_long'])

	new_person = Person(lat, long, dest_lat, dest_long)
	people.append(new_person)

	return '''Data successfully added!'''

# http://localhost:5000/get-friend/
@app.route('/get-friend/', methods=['GET'])
def get_friend():
	penn_id = request.args.get('penn_id')

	for person in people:
		print()
		print(str(person))
		print()

	string = ""
	for person in people:
		string += ("    " + str(person)+ "    <br/>")

	return string

if __name__ == '__main__':
	app.run(debug=True)