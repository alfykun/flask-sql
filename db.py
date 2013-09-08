from flask import Flask
from flask import g
import sqlite3

DB = 'test.db'

def connect_db():
	return sqlite3.connect(DB)

@app.before_request
def before_request():
	g.db = connect_db()

@app.after_request
def after_request():
	g.db.close()
	return response