import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import  Answer from './components/Answer';

function App() {
  // let u1 ="ashu",
  // u2="pooja",
  // u3="Ritesh";
  //passing variables
  let info =[
    {
      name:"ashu", 
      place:"India",
      infox:{
        a:1,
        b:2,
      },
    },
    {name:"pooja",  place:"USA"},
    {name:"siya",  place:"UAE"},
    {name:"pari",  place:"UK"},
    {name:"kiyara",  place:"Japan"},
    {name:"aaru",  place:"Maharashtra,India"}
  ];

  return (
    <div className="App">
    <Hello> </Hello>
    {/* <Answer name="Siya" place="India"></Answer> */}
    <h1>New:1</h1>

    {info.map((user)=>(
      <div key= {user.name}>
        <div key={user.name}>
        <Answer {...user}/>
        </div>
      </div>
    ))}






   {/* *************************************OR */}

     {/* <Answer {...info[0]}/>
    <Answer {...info[1]}/>
    <Answer {...info[2]}/>
    <Answer  {...info[3]}/>
    <Answer {...info[4]}/>
    <Answer  {...info[5]}/>  */}

    </div>
  );
}

export default App;
