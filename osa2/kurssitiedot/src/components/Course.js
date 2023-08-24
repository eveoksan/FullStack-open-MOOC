const Courses = ({courses}) => {
    return (
      <div>
        {courses.map(({name, id, parts}) => (
         <Content key={id} parts={parts} name={name}/>
        ))}
      </div>
    )
  }
 
 
  const Header = ({name}) => <h2> {name} </h2>
 
  const Content = ({parts, name}) => {
  return(
    <div>
      <Header name={name}/>
      <Parts parts={parts}/>  
      <Total parts={parts}/>
    </div>
  )
  }
 
  const Parts = ({parts}) => {
    return(
      <div>
        {parts.map(({name, id, exercises}) => (
           <p key={id}>
          {name} {exercises}
          </p>
        ))}
      </div>
    )
  }
 
  const Total = ({parts}) => {
    const total = parts.reduce((eka, toka) =>
     eka + toka.exercises, 0)
 
    return (
      <b>Total of {total} exercises</b>
    )
  }
export default Courses;  