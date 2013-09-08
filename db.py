from flask import Flask
from flask import g
import sqlite3

app = Flask(__name__)
DB = 'test.db'

def connect_db():
	return sqlite3.connect(DB)

@app.before_request
def before_request():
	g.db = connect_db()

@app.after_request
def after_request(response):
	g.db.close()
	return response

def query(query,args=(),one=False):
    cur = g.db.execute(query,args)
    rv = [dict((cur.description[index][0],value) for index, value in enumerate(row)) for row in cur.fetchall()]
    return (rv[0] if rv else None) if one else rv

@app.route("/")
def hello():
	return "Hello world"

@app.route("/query")
def makeSomeQuery():
    print query('select * from counts')
    for counts in query('select * from counts'):
        print str(counts['key']) + " ... " + str(counts['value'])
    return "Check cmdline"
	
if __name__ == "__main__":
    app.debug = True
    app.run()
