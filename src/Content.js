import React from "react";
import CourseList from "./CourseList";
import AddCourse from "./AddCourse";
import SearchCourses from "./SearchCourses";
import apiRequest from "./apiRequest";
import { useState, useEffect } from "react";

const Content = () => {
  // const API_URL = "http://localhost:3500/courses"; //npm json-server
  // const [courses, setCourses] = useState([]); //npm json-server
  // const [fetchError, setFetchError] = useState(null); //npm json-server

  const [courses, setCourses] = useState(
    JSON.parse(localStorage.getItem("courselist")) || []
  ); //localStorage

  const [newCourse, setNewCourse] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("courselist", JSON.stringify(courses));
  }, [courses]); //localStorage

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const response = await fetch(API_URL);
  //       if (!response.ok) throw Error("No data fetched");
  //       const listCourses = await response.json();
  //       setCourses(listCourses);
  //       setFetchError(null);
  //     } catch (err) {
  //       setFetchError(err.message);
  //     }
  //   };
  //   (async () => await fetchCourses())();
  // }, []); //npm json-server

  const handleDrop = (id) => {
    const newCourses = courses.filter((course) => {
      return course.id !== id;
    });
    setCourses(newCourses); //localStorage
  };

  const handleCheck = (id) => {
    const newCourses = courses.map((course) =>
      course.id === id ? { ...course, checked: !course.checked } : course
    );
    setCourses(newCourses);
  }; //localStorage

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newCourse) return;
    addCourse(newCourse);
    setNewCourse("");
  };

  const addCourse = (course) => {
    const id = courses.length ? courses[courses.length - 1].id + 1 : 1;
    const newCourse = { id, course, checked: false };
    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
  }; //localStorage

  // const handleDrop = async (id) => {
  //   const newCourses = courses.filter((course) => {
  //     return course.id !== id;
  //   });
  //   setCourses(newCourses);

  //   const deleteOptions = {
  //     method: "DELETE",
  //   };

  //   const reqURL = `${API_URL}/${id}`;
  //   const result = await apiRequest(reqURL, deleteOptions);
  //   if (result) setFetchError(result);
  // };//npm json-server

  // const handleCheck = async (id) => {
  //   const newCourses = courses.map((course) =>
  //     course.id === id ? { ...course, checked: !course.checked } : course
  //   );
  //   setCourses(newCourses);

  //   const updatedCourse = newCourses.filter((course) => course.id === id);

  //   const updateOptions = {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ checked: updatedCourse[0].checked }),
  //   };

  //   const reqURL = `${API_URL}/${id}`;
  //   const result = await apiRequest(reqURL, updateOptions);
  //   if (result) setFetchError(result);
  // }; //npm json-server

  // const addCourse = async (course) => {
  //   const id = courses[courses.length - 1].id + 1;
  //   const newCourse = { id, course, checked: false };
  //   const updatedCourses = [...courses, newCourse];
  //   setCourses(updatedCourses);

  //   const postOptions = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newCourse),
  //   };

  //   const result = await apiRequest(API_URL, postOptions);
  //   if (result) setFetchError(result);
  // }; //npm json-server

  return (
    <main>
      <div>Content</div>
      <AddCourse
        newCourse={newCourse}
        setNewCourse={setNewCourse}
        handleAdd={handleAdd}
      />
      <SearchCourses search={search} setSearch={setSearch} />
      {!courses.length ? (
        <p style={{ color: "red", textAlign: "center" }}>No data</p>
      ) : (
        courses.length && (
          <CourseList
            courses={courses.filter((course) =>
              course.course.toLowerCase().includes(search.toLowerCase())
            )}
            setCourses={setCourses}
            handleDrop={handleDrop}
            handleCheck={handleCheck}
          />
        )
      )}
      {/* {fetchError && (
        <p
          style={{ color: "red", textAlign: "center" }}
        >{`Error: ${fetchError}`}</p>
      )}
      {!fetchError && (
        <CourseList
          courses={courses.filter((course) =>
            course.course.toLowerCase().includes(search.toLowerCase())
          )}
          setCourses={setCourses}
          handleDrop={handleDrop}
          handleCheck={handleCheck}
        />
      )}npm json-server*/}
    </main>
  );
};

export default Content;
