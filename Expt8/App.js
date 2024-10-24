import logo from './logo.svg';
import './App.css';
import React from "react";  
function RenderingArrayOfObjects() {   
    const studentlist =[
      {id:"501",
      name:"Rajesh",
      course:"Btech"},
      {id:"502",
      name:"Venkatesh",
      course:"Btech"},
      {id:"503",
      name:"Ramesh",
      course:"Btech"},
      {id:"504",
      name:"Suresh",
      course:"Btech"},
      {id:"505",
      name:"Kumar",
      course:"Btech"}
    ];
    const list = studentlist.map((element) => { 
        return ( 
             <tr className="students" align="center"> 
                <td>{element.id}</td> 
                <td>{element.name}</td> 
                <td>{element.course}</td> 
            </tr> 
        ); 
    }); 
  return ( 
  <div> 
      <table align="center" border="1"> 
          <thead> 
              <tr> 
                  <th> Id</th> 
                  <th>Name</th> 
                  <th>Course</th> 
              </tr> 
          </thead> 
          <tbody>{list}</tbody> 
      </table> 
  </div> 
); 
} 
function App() {     return ( 
        <div className="App"> 
            <div> 
                <h1 className="Students">Student List</h1> 
                <br></br> 
                <RenderingArrayOfObjects /> 
            </div> 
        </div> 
    ); 
} 
export default App; 
