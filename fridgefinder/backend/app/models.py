from flask import flask
from flask_sqlalchemy import SQLAlchemy
# from werkzeug.security import generate_password_hash, check_password_hash FOR TOMORROW

# create the SQLAlchemy object and save it as db
db = SQLAlchemy()

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    # password to come tomorrow when I go over werkzeug security and password hashing

class Foods(db.Model):
    # possibly use a merge sort to find the correct foods faster?
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False, unique=True)
    amount = db.Column(db.String, nullable=False)
    pantry_id = db.Column(db.Integer, db.ForeignKey('pantries.id'), nullable=False)

class Pantry(db.Model):
    __tablename__ = 'Pantries'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, unique=True)
