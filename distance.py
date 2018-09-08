import math
from person import Person

def closest(coord, arr):
    # lat_lon is (latitude, longitude)
    distances = []
    for i in arr:
        distances.append(distance(coord.coords, i.coords) + distance(coord.dest, i.dest))
    distances = sorted(distances)
    print(distances)
    return distances[0]

def distance(lat_lon1, lat_lon2):
    # using Haversine formula
    radius = 3958.756  # earth radius in miles
    d_lat = deg2rad(lat_lon2[0]-lat_lon1[0])
    d_lon = deg2rad(lat_lon2[1]-lat_lon1[1])
    a = math.sin(d_lat/2) * math.sin(d_lat/2) + \
        math.cos(deg2rad(lat_lon1[0])) * math.cos(deg2rad(lat_lon2[0])) * \
        math.sin(d_lon/2) * math.sin(d_lon/2)
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    distance = radius * c
    return distance

def deg2rad(deg):
    pi = 3.141
    return deg * (pi/180)


person1 = Person(38.932094, -76.971309, 39.071899, -76.969937)
person2 = Person(38.892536, -76.782341, 39.100659, -76.962164)
person3 = Person(38.988669, -77.162576, 38.827305, -76.815286)
person4 = Person(27.336435, -82.530655, 27.336435, -82.530655)
print(closest(person1,
              [person2, person3, person4]))
