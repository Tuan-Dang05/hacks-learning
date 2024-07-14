# server.py
from flask import Flask, jsonify, request

app = Flask(__name__)

# Danh sách các tasks mẫu để làm ví dụ
tasks = [
    {"id": 1, "title": "Task 1", "completed": False},
    {"id": 2, "title": "Task 2", "completed": True},
]

# Route để lấy danh sách tasks
@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    return jsonify({'tasks': tasks})

# Route để thêm một task mới
@app.route('/api/tasks', methods=['POST'])
def add_task():
    new_task = request.json
    tasks.append(new_task)
    return jsonify({'tasks': tasks}), 201

if __name__ == '__main__':
    app.run(debug=True)
