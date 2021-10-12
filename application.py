from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/',methods=['GET','POST'])
def index():
    if request.method == "GET":
        return render_template('index.html')
    if request.method == "POST":
        return render_template('greet.html', name=request.form.get("name","world"))

@app.route('/image')
def google_image():
    return render_template('google_image.html')

@app.route('/google_advanced')
def google_advanced():
    return render_template('google_advanced.html')