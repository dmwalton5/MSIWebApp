from flask import Flask, render_template, request, jsonify, session, redirect, url_for

from msi import MSI

app = Flask(__name__)

# Set the session lifetime to max 30 min (1800 seconds)
app.config['PERMANENT_SESSION_LIFETIME'] = 1800

@app.route('/')
def home():
        # Check if survey data exists in session
    data = session.get('survey_data')
    if data:
        # Clear the survey data from the session
        session.pop('survey_data')
    return render_template("index.html")

# Change the application secret key for your usage
app.secret_key = 'changeMe!'

@app.route('/save-data', methods=['POST'])
def save_data():
    data = request.get_json()
    msi = MSI()
    output = msi.analyze(data)

    # Print survey output (debugging purposes only)
    # app.logger.info('Output: %s', output)

    # Store the survey data in the session
    session['survey_data'] = output
    return jsonify({'message': 'Data saved in the session'})

@app.route('/results', methods=['GET', 'POST'])
def results():
    # Update the userRole prior to displaying the results page
    if request.method == 'POST':
        session['userRole'] = request.form.get('userRole')
        return jsonify(success=True)

    # Display the session data on the results page
    data = session.get('survey_data')
    if data:
        return render_template('results.html', output=data)
    else:
        # Data doesn't exist in session, handle the case
        return redirect(url_for('home', alert_message='Session expired; please refill the survey form to view the results.'))

if __name__ == '__main__':
    app.run()
