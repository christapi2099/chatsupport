from flask import Flask, request, jsonify
from flask_cors import CORS
from themeextraction import extract_theme
import requests
from dotenv import load_dotenv
import os

load_dotenv()
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

ODDS_API_KEY = os.getenv('ODDS_API_KEY')

@app.route('/extract-theme', methods=['POST'])
def get_theme():
    data = request.json
    conversation_text = data.get('text', '')
    theme = extract_theme(conversation_text)
    return jsonify({"theme": theme})

@app.route('/fetch-odds', methods=['POST'])
def fetch_odds():
    data = request.json
    prompt = data.get('prompt', '')

    # Extract the relevant sport or event from the prompt
    sport = extract_sport_from_prompt(prompt)

    # Query the Odds API
    odds_api_url = f'https://api.the-odds-api.com/v4/sports/{sport}/odds'
    params = {
        'apiKey': ODDS_API_KEY,
        'regions': 'us',  # Specify the region
        'markets': 'h2h',  # Head-to-head markets
    }
    
    try:
        response = requests.get(odds_api_url, params=params)
        response.raise_for_status()  # Raise an error for bad responses
        odds_data = response.json()

        # Format the odds data into a single string
        formatted_odds_string = format_odds_data_as_string(odds_data)
        
        # Return the formatted string to the React frontend
        return formatted_odds_string
    
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e), "message": "Error fetching odds data"}), 500
    
def format_odds_data_as_string(odds_data):
    formatted_strings = []
    for event in odds_data:
        event_string = f"Match between {event.get('away_team')} and {event.get('home_team')} on {event.get('commence_time')}. "
        for bookmaker in event.get('bookmakers', []):
            odds_string = f"{bookmaker.get('title')} offers odds as follows: "
            odds_details = ", ".join([f"{outcome['name']}: {outcome['price']}" for outcome in bookmaker.get('markets', [])[0].get('outcomes', [])])
            event_string += f"{odds_string}{odds_details}. "
        formatted_strings.append(event_string.strip())
    return " ".join(formatted_strings)

def extract_sport_from_prompt(prompt):
    # Expanded list of sports and synonyms
    keywords = {
        'basketball': ['basketball', 'bball'],
        'football': ['football', 'soccer', 'footy'],
        'soccer': ['soccer', 'football'],
        'tennis': ['tennis'],
        'baseball': ['baseball'],
        # Add more sports and their variations here
    }
    
    prompt_words = prompt.lower().split()
    for sport, synonyms in keywords.items():
        for synonym in synonyms:
            if synonym in prompt_words:
                return sport
    return None  # Return None if no sport is found


if __name__ == '__main__':
    app.run(port=5000)
