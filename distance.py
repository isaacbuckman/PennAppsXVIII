import math
from person import Person

def closest(coord, arr):
    # lat_lon is (latitude, longitude)
    if len(arr) == 0:
        return None
    distances = []
    for i in arr:
        point_to_dest = distance(i.coords, i.dest)
        point_to_coord = distance(i.coords, coord.coords)
        if point_to_dest < point_to_coord:
            # user destination is closer than other user
            # no use walking together
            continue
        elif point_to_coord > 1:
            # both users are more than a mile away, don't connect them
            continue
        dest_to_dest = distance(i.dest, coord.dest)
        distances.append((point_to_coord + dest_to_dest, i))

    distances = sorted(distances)
    distances.sort(key=lambda x: x[0])
    return distances[0][1] if len(distances) > 0 else None

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

def middle(person1, person2):
    return ((person1.lat + person2.lat)/2, (person1.long, person2.long)/2)

person1 = Person(38.900345, -77.050989, 38.909496, -77.043353, 16)
person2 = Person(39.897607, -77.051332, 38.909496, -77.043353, 17)
person3 = Person(39.909162, -77.062571, 38.906758, -77.062057, 18)
person4 = Person(39.900078, -77.048243, 38.912768, -77.042753, 19)
print(closest(person1,
              [person2, person3, person4]))
