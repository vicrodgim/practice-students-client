import { useEffect, useState } from "react";
import { StudentForm } from "./components/StudentForm";
import { StudentList } from "./components/StudentList";
import { StudentBanner } from "./components/StudentBanner";
import axios from "axios";

export const App = () => {
  const [students, setStudents] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:4000/api/students/");

      setStudents(data.students);
    };

    fetchData();
  }, []);

  console.log(students);

  return (
    <div>
      <StudentForm />
      <StudentBanner />
      {students && <StudentList students={students} />}
    </div>
  );
};
