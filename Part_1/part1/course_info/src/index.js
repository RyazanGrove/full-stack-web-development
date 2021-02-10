import React from 'react'
import ReactDOM from 'react-dom'

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

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return <div><h1>Web development curriculum</h1>
        {courses.map(course => <Course key={course.id} course={course}></Course>)}</div>
}

ReactDOM.render(<App />, document.getElementById('root'))