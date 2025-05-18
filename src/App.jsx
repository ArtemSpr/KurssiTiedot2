import course from "./Course";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course[0]?.name} </h1>
    </div>
  );
};

const HeaderNode = (props) => {
  return (
    <div>
      <h1>{props.course[1]?.name} </h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.course[0]?.parts[0]?.name}: {props.course[0]?.parts[0]?.exercises}{" "}
      <br />
      {props.course[0]?.parts[1]?.name}: {props.course[0]?.parts[1]?.exercises}{" "}
      <br />
      {props.course[0]?.parts[2]?.name}: {props.course[0]?.parts[2]?.exercises}{" "}
      <br />
      {props.course[0]?.parts[3]?.name}: {props.course[0]?.parts[3]?.exercises}{" "}
      <br />
    </div>
  );
};

const ContentNode = (props) => {
  return (
    <div>
      {props.course[1]?.parts[0]?.name}: {props.course[1]?.parts[0]?.exercises}{" "}
      <br />
      {props.course[1]?.parts[1]?.name}: {props.course[1]?.parts[1]?.exercises}{" "}
      <br />
    </div>
  );
};

const Total = (props) => {
  const totalExercises =
    props.course[0]?.parts.reduce((sum, part) => sum + part.exercises, 0) +
    props.course[1]?.parts.reduce((sum, part) => sum + part.exercises, 0);

  return <div>Total number of exercises: {totalExercises}</div>;
};

const App = () => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <HeaderNode course={course} />
      <ContentNode course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
