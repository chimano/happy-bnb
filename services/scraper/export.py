from sys import argv
from ast import literal_eval
import pymongo

URL_FORMAT = 'mongodb://{}/'


def categorize(entry):
    return 'high' if float(entry[0]) > 4 else 'low'


if __name__ == '__main__':
    if not argv or not len(argv) == 5:
        print('Usage: python export.py HOST:PORT DATABASE COLLECTION IMPORT_FILE')
    url, db, coll, import_file = argv[1:]
    client = pymongo.MongoClient(URL_FORMAT.format(url))[db][coll]
    with open(import_file, 'r') as file:
        data = literal_eval(file.readlines()[0])
    processed_data = [
        {'rating': float(entry[0]),
         'latitude': float(entry[1]),
         'longitude': float(entry[1]),
         'category': categorize(entry)}
        for entry in data.values()
    ]
    client.insert_many(processed_data)
