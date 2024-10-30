from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

# Optional route to handle answer validation if needed
@app.route('/check_answer', methods=['POST'])
def check_answer():
    answer = request.form.get('answer', '').strip().lower()
    # Placeholder for correct answers; replace with logic if you need
    correct_answers = ["darkness", "fear", "the mind"]
    if answer in correct_answers:
        # Redirect to the next part of the game or reload the page
        return redirect(url_for('index'))
    # If incorrect, reload the page (no feedback for incorrect answers)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
