from csv_to_osm import *
import csv
f = open('/tmp/export.csv', 'r')
reader = csv.reader(f)
reader.next()
for r in reader:
    toilet = parse_row(*r)
    print toilet
    print post_toilet(toilet)

