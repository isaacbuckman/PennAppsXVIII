from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def index():
	return "Hello, World!"

#http://localhost:5000/get-friend?lat=100&long=100&dest_lat=150&dest_long=50
@app.route('/get-friend/', methods=['POST'])
def query():
	lat = request.args.get('lat')
	long = request.args.get('long')

	dest_lat = request.args.get('dest_lat')
	dest_long = request.args.get('dest_long')

	# print("latitude: %" % lat)
	# print("longitude: %" % long)
	return '''<h1>latitude: {}<br/>longitude: {}</h1>'''.format(lat,long)

if __name__ == '__main__':
	app.run(debug=True)