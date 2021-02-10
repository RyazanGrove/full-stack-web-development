import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <h1>{props.course.name}</h1>
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

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    }

    return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))