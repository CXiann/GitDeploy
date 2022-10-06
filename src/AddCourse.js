import { useRef } from "react";
const AddCourse = ({ newCourse, setNewCourse, handleAdd }) => {
  const inputRef = useRef();
  return (
    <form className="addcourse" onSubmit={handleAdd}>
      <input
        autoFocus
        type="text"
        value={newCourse}
        placeholder="Enter course name"
        onChange={(e) => setNewCourse(e.target.value)}
        ref={inputRef}
        required
      />
      <button
        type="submit"
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        +
      </button>
    </form>
  );
};

export default AddCourse;
