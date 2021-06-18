from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import UUID
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os

# Init app
app = Flask(__name__)
CORS(app)  # Temporary fix, not best practice
base_directory = os.path.abspath(os.path.dirname(__file__))
# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(base_directory, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Init db
db = SQLAlchemy(app)

# Init marshmallow
ma = Marshmallow(app)

# to prevent "(sqlite3.OperationalError) no such table:" Errors
# Run @app.before_first_request


@app.before_first_request
def create_tables():
    db.create_all()


class User(db.Model):
    username = db.Column(db.String(100), primary_key=True)
    user_pw = db.Column(db.String(100))
    tasks = db.relationship('Task', backref='user', lazy=True)

    def __init__(self, username, user_pw):
        self.username = username
        self.user_pw = user_pw


class UserSchema(ma.Schema):
    class Meta:
        fields = ('username', 'user_pw')


user_schema = UserSchema()
users_schema = UserSchema(many=True)

# Task Class/Model


class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Integer, db.ForeignKey(
        'user.username'), nullable=False, primary_key=True)
    task = db.Column(db.String(100))
    completed = db.Column(db.Boolean, default=False)

    def __init__(self, id, username, task, completed):
        self.id = id
        self.username = username
        self.task = task
        self.completed = completed


class TaskSchema(ma.Schema):
    class Meta:
        fields = ('username', 'id', 'task', 'completed')


# Init schema
task_schema = TaskSchema()
tasks_schema = TaskSchema(many=True)


@app.route('/task', methods=['GET'])
# get all tasks
def get_all_tasks():
    all_tasks = Task.query.all()
    # Serialize an object to native Python data types
    # according to this Schemas fields.
    result = tasks_schema.dump(all_tasks)

    return jsonify(result)


# Create a Product
@app.route('/task', methods=['POST'])
def add_task():
    task_id = request.json['task_id']
    username = request.json['username']
    task_name = request.json['task']
    is_completed = request.json['completed']
    new_task = Task(task_id, username, task_name, is_completed)
    db.session.add(new_task)
    db.session.commit()  # saves it to db
    return task_schema.jsonify(new_task)

# Delete Product


@app.route('/<uname>/task/<task_id>', methods=['DELETE'])
def delete_product(uname,task_id):
    task = Task.query.get((task_id, uname))
    db.session.delete(task)
    db.session.commit()
    return task_schema.jsonify(task)


# Run server
if __name__ == '__main__':
    app.run(debug=True)
