import logo from './logo.svg';
import './App.css';
// import State from './State'
// import Props from './Props'
// import Inputbox from './Inputbox'
// import Toggle from './Toggle';
// import Formhandle from './Formhandle'
import Condition from './Conditional/Condition';
function App() {
  let data = "Harsh Jha"
  function apple(){

    data = "priti"
    alert(data)
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={()=>apple()}>Click me</button>
      {/* <button onClick={()=>alert("harsh ruhi")}>Click me</button> */}
      {/* <State />
      <Props/> */}
      {/* <Inputbox/> */}
      {/* <Toggle/> */}
      {/* <Formhandle/> */}
      <Condition/>
    </div>
  );
}

export default App;
