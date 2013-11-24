import json
import urllib2
import osmapi

api = osmapi.OsmApi(api="api06.dev.openstreetmap.org", username = "glassresistor@gmail.com", password = "people should use api keys for stuff")

def parse_address(address):
    data = json.load(urllib2.urlopen(
        'http://nominatim.openstreetmap.org/search/%s?format=json&polygon=1&addressdetails=1'\
        % urllib2.quote(address)))
    return data

def bool_to_yn(b):
    b = bool(b)
    if b:
        return 'yes'
    return 'no'

def parse_row(_id,name,known_safe,street,city,state,country,postal,lat,lon,access,directions,comment,created,modifed,avail,slug):
    data = parse_address('%s %s %s %s' % (street, city, state, country))[0]
    lat = data['lat']
    lon = data['lon']
    addr = data['address']
    print addr.keys()
    print data.keys()
    return {
        "lat": lat, "lon": lon,
        "tag": {
            "name": name,
            "addr:housenumber": addr['house_number'],
            "addr:street": addr['road'],
            "addr:postalcode": addr['postcode'],
            "addr:city": addr['city'],
            "addr:country": addr['country'],
            "amenity": "toilets",
            "fee" : bool_to_yn((not bool(avail))),
            "unisex": "yes",
            "wheelchair": bool_to_yn(access),
        }
    }

def post_toilet(toilet):
    api.ChangesetCreate()
    print api.NodeCreate(toilet)
    api.ChangesetClose()
