import csv
from ast import literal_eval
from sys import argv
import pymongo

URL_FORMAT = 'mongodb://{}/'


if __name__ == '__main__':
    if not argv or not len(argv) == 5:
        print('Usage: python export.py HOST:PORT DATABASE COLLECTION IMPORT_FILE')
    url, db, coll, import_file = argv[1:]
    client = pymongo.MongoClient(URL_FORMAT.format(url))[db][coll]
    positions = []
    with open(import_file, 'r') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',')
        positions = [list(map(float, row)) for row in spamreader]

    data = [{
        'longitude': float(position[0]),
        'latitude': float(position[1])
    } for position in positions]

    client.insert_many(data)
