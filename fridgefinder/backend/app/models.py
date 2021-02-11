from flask import flask
from flask_sqlalchemy import SQLAlchemy
# from werkzeug.security import generate_password_hash, check_password_hash FOR TOMORROW

# create the SQLAlchemy object and save it as db
db = SQLAlchemy()

def Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    # password to come tomorrow when I go over werkzeug security and password hashing
