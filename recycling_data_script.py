# python script for grabbing JSON from open NYC dataset and putting it into mongodb database 

from pymongo import MongoClient
import requests
import json

# mongo variables
client = MongoClient("mongodb://{username:password}@trash-app-shard-00-00-u3kb5.mongodb.net:27017,trash-app-shard-00-01-u3kb5.mongodb.net:27017,trash-app-shard-00-02-u3kb5.mongodb.net:27017/test?ssl=true&replicaSet=trash-app-shard-0&authSource=admin&retryWrites=true")

db = client.recycling
collection = db.pins

# data variables
electronic_dropoff = json.loads(requests.get('https://data.cityofnewyork.us/resource/x9rb-8qrt.json').content)
public_recycling = json.loads(requests.get('https://data.cityofnewyork.us/resource/ggvk-gyea.json').content)
compost_dropoff = json.loads(requests.get('https://data.cityofnewyork.us/resource/5ucd-jctg.json').content)

for dropoff in electronic_dropoff:
	dropoff.update({'item_type': 'electronics'})
	collection.insert_one(dropoff)

for bin in public_recycling:
	bin.update({'item_type': 'recycling'})
	collection.insert_one(bin)

for dropoff in compost_dropoff:
	dropoff.update({'item_type':'compost'})
	collection.insert_one(dropoff)