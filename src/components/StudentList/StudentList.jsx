import React from 'react';
import './StudentList.scss';

const StudentList = ({ students, onEdit, onDelete }) => {
  return (
    <div className="card">
      <h2>Danh Sách Học Sinh</h2>
      <table>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Lớp</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.className}</td>
              <td>
                <button onClick={() => onEdit(student)} className="button">Sửa</button>
                <button onClick={() => onDelete(student)} className="button">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
