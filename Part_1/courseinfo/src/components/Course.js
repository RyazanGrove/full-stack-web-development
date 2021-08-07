import React from "react";

const Header = (props) => (
    <div>
        <h1>{props.courseName}</h1>
    </div>
)

const Part = (props) => (
    <p>
        {props.name} {props.exercises}
    </p>
)

const Content = (props) => {
    return (
        <div>
            {props.parts.map(course => <Part key={course.id} name={course.name} exercises={course.exercises}></Part>)}
        </div>
    )
}

const Total = (props) => {
    const totalNumber = props.course.parts.reduce((s, p) => s + p.exercises, 0)
    return (
        <div>
            <b>total of {totalNumber} exercises</b>
        </div>
    )
}

const Course = (props) => (
    <div>
        <Header courseName={props.course.name}></Header>
        <Content parts={props.course.parts}></Content>
        <Total course={props.course}></Total>
    </div>
)

export default Course