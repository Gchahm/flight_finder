import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import * as courseActions from "../../redux/actions/courseActions";
import {getCourses} from "../../redux/selectors";
const { useState } = React;


const CoursesPageFunction = () => {
    const courses = useSelector(getCourses);
    const dispatch = useDispatch();
    const [course, setCourse] = useState({title: ''});
    const handleChange = (e) => setCourse({...course, title: e.target.value});
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(courseActions.createCourse(course));
        setCourse({...course, title: ''});
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Courses As Function</h2>
            <h3>Add Course</h3>
            <input type="text" onChange={handleChange} value={course.title}/>
            <input type="submit" value="Save"/>
            {courses.map(course => (
                <div key={course.title}>{course.title}</div>
            ))}
        </form>
    )
}


export default CoursesPageFunction;
