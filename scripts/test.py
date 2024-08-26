import requests

# Your test endpoint
url = "http://127.0.0.1:5000/fetch-odds"

# Example payload
payload = {"prompt": "Get me the basketball odds."}

# Make the request to the Flask server
response = requests.post(url, json=payload)

# Print the response text directly
print("Response from server:")
print(response.text)
