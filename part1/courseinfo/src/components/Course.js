const Header = (props) => {
    return (
     <h3>{props.course}</h3>
    )
}

const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    )
}

const Content = ({parts}) => {
    return (
      <>
      {parts.map((part) => <Part key={part.id} part={part}/>)}
      </>
    )
}

const Total = ({parts}) => {

    const total = parts.reduce((s, p) => {
        return s + p.exercises
    }, 0)

    return (
      <b>Number of exercises {total}</b>
    ) 
}

const Course = ({course}) => {
    return (
        <div>
        <Header course={course.name} />
        <Content parts={course.parts}/>
        <Total parts={course.parts} />
      </div>
    )
}

export default Course