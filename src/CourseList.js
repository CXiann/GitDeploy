import CourseLine from "./CourseLine";

const CourseList = ({ courses, setCourses, handleCheck, handleDrop }) => {
  return courses.map((course) => (
    <ul>
      <CourseLine
        course={course}
        setCourses={setCourses}
        handleDrop={handleDrop}
        handleCheck={handleCheck}
      />
    </ul>
  ));
};

export default CourseList;
