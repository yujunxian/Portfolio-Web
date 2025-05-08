from flask import Flask, render_template, request, redirect, url_for, session
import os
from functools import wraps

app = Flask(__name__)
app.secret_key = os.urandom(24)


def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'logged_in' not in session:
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function

@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if request.form['username'] == 'admin' and request.form['password'] == 'admin':
            session['logged_in'] = True
            return redirect(url_for('home'))
        else:
            error = 'Incorrect username or password, please try again'
    return render_template('login.html', error=error)

@app.route('/logout')
def logout():
    session.pop('logged_in', None)
    return redirect(url_for('login'))

@app.route('/')
@login_required
def home():
    return render_template('index.html')

@app.route('/education')
@login_required
def education():
    return render_template('education.html')

@app.route('/experience')
@login_required
def experience():
    return render_template('experience.html')

@app.route('/achievements')
@login_required
def achievements():
    return render_template('achievements.html')

@app.route('/skills')
@login_required
def skills():
    return render_template('skills.html')

@app.route('/personal')
@login_required
def personal():
    return render_template('personal.html')

@app.route('/contact')
@login_required
def contact():
    return render_template('contact.html')

@app.route('/about')
@login_required
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True) 