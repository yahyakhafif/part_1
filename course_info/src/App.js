const App = () => {;
  const course = {
    name: 'Half Stack application development',
    part: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <>
      <Header name={course.name} />
      <Content part={course.part}/>
      <Total part={course.part} />
    </>
  )
}
export default App

function Header(props) {
  return (
    <>
    <h1>{props.name}</h1>
    </>
  )
}
const Content = (props) =>{
  return(
    <>
     <Part part={props.part[0].name} exercises={props.part[0].exercises}/>
     <Part part={props.part[1].name} exercises={props.part[1].exercises}/>
     <Part part={props.part[2].name} exercises={props.part[2].exercises}/>
    </>
  )
}
const Total = (props) =>{
  return(
   <>
   <p>Number of exercises {props.part[0].exercises+props.part[1].exercises+props.part[2].exercises}</p>
   </>
  )
}
const Part = (props) =>{
  return(
    <>
     <p>{props.part} {props.exercises}</p>
    </>
  )
}
