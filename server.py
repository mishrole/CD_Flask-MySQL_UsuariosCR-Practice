from flask import Flask, render_template, request, redirect
from user import User

app = Flask(__name__)

@app.errorhandler(404)
def page_not_found(error):
    app.logger.error(error)
    return render_template('404.html'), 404

@app.route('/', methods=['GET'])
def index():
    return redirect('/users')

@app.route('/users', methods=['GET'])
def list():
    users = User.get_all()
    return render_template('list.html', users = users)

@app.route('/users/new', methods=['GET'])
def form():
    return render_template('index.html')

@app.route('/create_user', methods=['POST'])
def create_user():
    data = {
        "firstname": request.form["firstname"],
        "lastname": request.form["lastname"],
        "email": request.form["email"]
    }

    User.save(data)
    return redirect('/users')

if __name__ == '__main__':
    app.run( debug = True )