import React from 'react'

const Header = (props) => (
    <h2>{props.course.name}</h2>
)

const Part = (props) => (
    <p>
        {props.part} {props.exercises}
    </p>
)

const Content = (props) => {
    return (
        <div>
            {props.course.parts.map(course => <Part key={course.id} part={course.name} exercises={course.exercises}></Part>)}
        </div>
    )
}

const Total = (props) => {
    const total = props.course.parts.reduce((s, p) => s + p.exercises, 0)
    return (
        <b>Number of exercises {total}</b>
    )
}

const Course = (props) => (
    <div>
        <Header course={props.course}></Header>
        <Content course={props.course}></Content>
        <Total course={props.course}></Total>
    </div>
)

export default Course