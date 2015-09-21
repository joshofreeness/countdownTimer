from flask import Flask, request

# MongoDB
import pymongo
from pymongo import MongoClient

# set the project root directory as the static folder, you can set others.
app = Flask(__name__)

client = MongoClient('localhost', 27017)
db = client.countdown_database

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
	return db.universities
	#return "Universities" 

#TODO: Make this dependent on universities
@app.route('/api/courses')	    
def courses():
	return "courses" 	


 

if __name__ == '__main__':
    app.debug = True
    app.run()