from flask import Flask, request
# set the project root directory as the static folder, you can set others.
app = Flask(__name__)

@app.route('/')
def root():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.debug = True
    app.run()