import { useEffect, useState } from "react";
import { StudentForm } from "./components/StudentForm";
import { StudentList } from "./components/StudentList";
import { StudentBanner } from "./components/StudentBanner";
import axios from "axios";

export const App = () => {
  const [students, setStudents] = useState();
  const [selectedStudent, setSelectedStudent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:4000/api/students/");

      setStudents(data.students);
    };

    fetchData();
  }, []);

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  const handleAddStudent = (student) => {
    setStudents([...students, student]);
  };

  const handleDeleteStudent = (selectedStudent) => {
    const filteredStudents = students.filter((student) => {
      return student.id !== selectedStudent.id;
    });

    setStudents(filteredStudents);
    setSelectedStudent();
  };

  return (
    <div>
      <StudentForm handleAddStudent={handleAddStudent} />
      {selectedStudent && (
        <StudentBanner
          selectedStudent={selectedStudent}
          handleDeleteStudent={handleDeleteStudent}
        />
      )}
      {students && (
        <StudentList
          students={students}
          handleStudentClick={handleStudentClick}
        />
      )}
    </div>
  );
};
