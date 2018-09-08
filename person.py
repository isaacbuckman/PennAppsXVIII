class Person:
	def __init__(self, lat, long, dest_lat, dest_long, penn_id=0000):
		self.lat = lat
		self.long = long
		self.dest_lat = dest_lat
		self.dest_long = dest_long
		self.coords = (lat, long)
		self.dest = (dest_lat, dest_long)
		self.penn_id = penn_id

	def __str__(self):
		return ("lat: %i, long: %i, dest_lat: %i, dest_long: %i, penn_id: %i" % (self.lat,self.long,self.dest_lat,self.dest_long,self.penn_id))