export const StudentList = ({ students }) => {
  return (
    <div>
      <ul>
        {students.map((student) => {
          return (
            <li key={student.id}>
              {student.firstName} {student.lastName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
