from flask import Flask, request
from person import Person

app = Flask(__name__)

people = [Person(100,100,150,150), Person(25,62,60,12)]

@app.route('/')
def index():
	return "Hello, World!"

#http://localhost:5000/get-friend?lat=100&long=100&dest_lat=150&dest_long=50
@app.route('/get-friend/', methods=['GET','POST'])
def query():
	lat = request.args.get('lat')
	long = request.args.get('long')

	dest_lat = request.args.get('dest_lat')
	dest_long = request.args.get('dest_long')

	for person in people:
		print("AHHHHH")
		print(str(person))

	# print("latitude: %" % lat)
	# print("longitude: %" % long)
	return '''<h1>latitude: {}<br/>longitude: {}</h1>'''.format(lat,long)

if __name__ == '__main__':
	app.run(debug=True)