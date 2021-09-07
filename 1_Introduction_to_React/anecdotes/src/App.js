import React from 'react'

const App = () => {
  // Variable declarations
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  // Returned JSX for the overall app
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

// Components
const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part name={props.part1.name} number={props.part1.exercises} />
      <Part name={props.part2.name} number={props.part2.exercises} />
      <Part name={props.part3.name} number={props.part3.exercises} />
    </div>
  )
}

const Part = (props) => {
  console.log(props);
  return (
    <p>
      {props.name} {props.number}
    </p>
  )
}

const Total = (props) => {
  console.log(props);
  return (
    <p>
      Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}
    </p>
  )
}

export default App
