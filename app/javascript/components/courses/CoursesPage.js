import React from 'react';
import {connect} from 'react-redux'
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from 'prop-types'
import {bindActionCreators} from "redux";
import {getCourses} from '../../redux/selectors/index'

class CoursesPage extends React.Component {
    state = {
        course: {
            title: ''
        }
    };

    updateCourseTitle = title => {
        const course = {...this.state.course, title};
        this.setState({course})
    }

    handleChange = event => {
        this.updateCourseTitle(event.target.value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.actions.createCourse(this.state.course);
        this.updateCourseTitle('');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses As Class</h2>
                <h3>Add Course</h3>
                <input type="text" onChange={this.handleChange} value={this.state.course.title}/>
                <input type="submit" value="Save"/>
                {this.props.courses.map(course => (
                    <div key={course.title}>{course.title}</div>
                ))}
            </form>
        )
    }
}

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
}


const mapStateToProps = state => ({
    courses: getCourses(state)
});

export default connect(mapStateToProps, (dispatch) => ({actions: bindActionCreators(courseActions, dispatch)}))(CoursesPage);
