# server.py
from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app)  # Enable CORS for the Flask app

@app.route('/api/diemthi', methods=['GET'])
def get_diemthi():
    sbd = request.args.get('sbd')  # Get the sbd from query parameters
    print(sbd)  # Print to the terminal for debugging

    url = f'https://diemthi.vnexpress.net/index/detail/sbd/{sbd}/year/2023'
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        table = soup.find('table', class_='e-table')
        rows = table.find_all('tr')

        subjects = []
        grades = []
        for i, row in enumerate(rows):
            cells = row.find_all('td')
            if len(cells) >= 2:
                subject = cells[0].get_text(strip=True)
                grade = cells[1].get_text(strip=True)
                subjects.append(subject)
                grades.append(grade)

        # Format data as JSON
        data = [{'subject': subject, 'grade': grade} for subject, grade in zip(subjects, grades)]
        return jsonify(data)

    return jsonify({'error': 'Failed to fetch data'})

if __name__ == '__main__':
    app.run(debug=True)
