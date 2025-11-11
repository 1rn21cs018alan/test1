from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/hi')
def hi():
    return jsonify({"message": "hi"})

@app.route('/hello')
def hello():
    return jsonify({"message": "hello"})

@app.route('/bye')
def bye():
    return jsonify({"message": "bye"})
