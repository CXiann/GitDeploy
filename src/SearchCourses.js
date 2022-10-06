const SearchCourses = ({ search, setSearch }) => {
  return (
    <form className="searchcourse" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        role="searchbox"
        value={search}
        placeholder="Search course name"
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchCourses;
