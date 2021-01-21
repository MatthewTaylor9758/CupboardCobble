from flask import Flask
from config import Config

app = Flask(__name__)

app.config.from_object(Config)

print('the secret key is: ', app.config['SECRET_KEY'])

@app.route('/')
@app.route('/home')
def home():
    return '<h1>Home</h1>'

@app.route('/about')
def about():
    return '<h1>About</h1>'

@app.route('/item/<int:id>')
def item(id):
    return f'<h1>Item {id}</h1>'

@app.before_first_request
def before_first_request_function():
    print('before_first_request happens once.')

@app.before_request
def before_request_function():
    print('before_request is running properly.')

# @app.after_request
# def after_request_function():
#     print('after_request is functioning correctly.')

# @app.after_request
# def after_request_function(response):
#     print("after_request is running")




# @app.route('/')
# def hello():
#     return f'<h1>{app.config["GREETING"]}</h1>'
