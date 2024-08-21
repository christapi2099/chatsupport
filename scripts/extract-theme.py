from flask import Flask, request, jsonify
from flask_cors import CORS
from themeextraction import extract_theme

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/extract-theme', methods=['POST'])
def get_theme():
    data = request.json
    conversation_text = data.get('text', '')
    theme = extract_theme(conversation_text)
    return jsonify({"theme": theme})

if __name__ == '__main__':
    app.run(port=5000)
