class Person:
	def __init__(self, lat, long, dest_lat, dest_long, name, email):
		self.lat = lat
		self.long = long
		self.dest_lat = dest_lat
		self.dest_long = dest_long
		self.coords = (lat, long)
		self.dest = (dest_lat, dest_long)
		self.name = name
		self.email = email

	def __str__(self):
		return ("lat: %i, long: %i, dest_lat: %i, dest_long: %i, name: %s, email: %s" % (self.lat,self.long,self.dest_lat,self.dest_long,self.name,self.email))

	def update(self, lat, long, dest_lat, dest_long):
		self.lat = lat
		self.long = long
		self.dest_lat = dest_lat
		self.dest_long = dest_long
		self.coords = (lat, long)
		self.dest = (dest_lat, dest_long)	