import math
from person import Person

radius = 3958.756  # earth radius in miles
pi = 3.141

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

    # if len(distances) > :
    #     # do another compatability check
    #     pass
    # elif len(distances) == 0:
    #     return None
    distances = sorted(distances)
    distances.sort(key=lambda x: x[0])
    return distances[0][1] if len(distances) > 0 else None

def distance(lat_lon1, lat_lon2):
    # using Haversine formula
    d_lat = deg2rad(lat_lon2[0]-lat_lon1[0])
    d_lon = deg2rad(lat_lon2[1]-lat_lon1[1])
    a = math.sin(d_lat/2) * math.sin(d_lat/2) + \
        math.cos(deg2rad(lat_lon1[0])) * math.cos(deg2rad(lat_lon2[0])) * \
        math.sin(d_lon/2) * math.sin(d_lon/2)
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    distance = radius * c
    return distance

def deg2rad(deg):
    return deg * (pi/180)

def cartesian_coord(lat1, long1):
    lat = deg2rad(lat1)
    long = deg2rad(long1)
    x1 = radius * math.cos(lat) * math.cos(long)
    y1 = radius * math.cos(lat) * math.sin(long)
    z1 = radius * math.sin(lat)
    return x1, y1, z1

def slope(x1, x2, y1, y2):
    return (float)(y2-y1)/(x2-x1)

def intercept(x1, y1, slope):
    return (float)(y1 - x1*slope)

def neg_recipricol(num):
    return (float)(-1 * (1.0 / num))

def lat_long_coord(x, y, z):
    long = math.atan(y/x)
    lat = math.acos(x/(radius * math.cos(long)))
    lat = lat * (180 / pi)
    long = long * (180 / pi)
    return (lat, long)
    # lat = math.asin(z / radius) * (180/pi)
    # if x > 0:
    #     long = math.atan(y / x) * (180/pi)
    # elif y > 0:
    #     long = math.atan(y / x) * (180/pi) + 180
    # else:
    #     long = math.atan(y / x) * (180/pi) - 180
    # return (lat, long)

def middle(person1, person2):
    # using Equirectangular projection
    dist1 = distance(person1.coords, person1.dest)
    dist2 = distance(person2.coords, person2.dest)
    farthest_person = person1 if dist1 > dist2 else person2 # find person farthest away from destination
    if dist1 > dist2:
        farthest_person = person1
        closer_person = person2
    else:
        farthest_person = person2
        closer_person = person1
    x1, y1, z1 = cartesian_coord(farthest_person.lat, farthest_person.long)
    x2, y2, z2 = cartesian_coord(farthest_person.dest_lat, farthest_person.dest_long)
    x3, y3, z3 = cartesian_coord(closer_person.lat, farthest_person.long)
    slope1 = slope(x1, x2, y1, y2)
    intercept1 = intercept(x1, y1, slope1)
    slope2 = neg_recipricol(slope1)
    intercept2 = intercept(x3, y3, slope2)
    x4 = (float) ((intercept2 - intercept1) / (slope1 - slope2))
    # m1*x + b1 = m2*x + b2
    y4 = slope2 * x4 + intercept2
    # y = m*x + b
    return lat_long_coord(x4, y4, z3)


# person1 = Person(38.895517, -77.091920, 38.938963, -77.065470, 16)
# person2 = Person(38.914887, -77.037184, 38.938963, -77.065470, 17)
# person3 = Person(39.909162, -77.062571, 38.906758, -77.062057, 18)
# person4 = Person(39.900078, -77.048243, 38.912768, -77.042753, 19)
# print(closest(person1,
#               [person2, person3, person4]))
# print(middle(person1, person2))
