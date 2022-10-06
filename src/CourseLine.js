const CourseLine = ({ course, setCourses, handleCheck, handleDrop }) => {
  return (
    <li className="course" key={course.id}>
      <input
        type="checkbox"
        checked={course.checked}
        onChange={() => handleCheck(course.id)}
      />
      <label>{course.course}</label>
      <button onClick={() => handleDrop(course.id)}>Drop</button>
    </li>
  );
};

export default CourseLine;
