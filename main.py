from flask import Flask, request, redirect

# MongoDB
import pymongo
from pymongo import MongoClient

# set the project root directory as the static folder, you can set others.
app = Flask(__name__)

client = MongoClient('localhost', 27017)
db = client.countdown_database

# Delete all data and repopulate with hardcoded values:
# result = db.universities.delete_many({})
# university = {"name" : "University of Auckland"}
# db.universities.insert_one(university)

# result = db.courses.delete_many({})
# courses = [{"number" : "700"}, {"number" : "715"}, {"number" : "403"}, {"number" : "726"}]
# db.courses.insert_many(courses)

@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route('/add')
def add():
    return app.send_static_file('index.html')    

@app.route('/api')
def api():
	return "API SON!"  

@app.route('/api/universities')	    
def universities():
	cursor = db.universities.find()
	result = ""
	for document in cursor:
		result = result + " - " + str(document)
	return result
	#return "Universities" 

#TODO: Make this dependent on universities
@app.route('/api/courses', methods=['GET'])	    
def courses():
	cursor = db.courses.find()
	result = ""
	for document in cursor:
		result = result + " - " + str(document)
	return result
	#return "courses" 	


@app.route('/api/courses', methods=['POST'])
def courses_post():
	
	return redirect('/add')
 

if __name__ == '__main__':
    app.debug = True
    app.run()