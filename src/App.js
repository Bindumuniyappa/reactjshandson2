import './App.css';
import './index.css';
import React,{Component} from 'react'

class App extends Component {
   state={
    Name:"",
    Department:"",
    Rating:"",
    employees:[]
  }

 ChangeHandler=(e)=>{
  this.setState({[e.target.name] : e.target.value})

  }
  submitHandler=(e)=>{
    e.preventDefault();
    const empObj={
      Name:this.state.Name,
      Department:this.state.Department,
      Rating:this.state.Rating
    }
   const temp= this.state.employees;
   temp.push(empObj);
   this.setState({employees:temp})
  }
  render(){
  return (
    <div id="bodyBackground">
      <div id="headerText">EMPLOYEE FEEDBACK FORM</div>
      <form>
  <label id="nameText" className="labelText">
    Name:
    <input type="text" name="Name" value={this.state.Name} onChange={this.ChangeHandler} style={{fontSize:'30px',borderRadius:'20px',marginTop:'20px'}} />
  </label>
  <br></br>
  <br></br>
  <label id="nameText" className="labelText">
    Department:
    <input type="text" name="Department" value={this.state.Department} onChange={this.ChangeHandler} style={{fontSize:'30px',borderRadius:'20px',marginTop:'20px'}}/>
  </label>
  <br></br>
  <br></br>
  <label id="nameText" className="labelText">
    Rating:
    <input type="number" name="Rating" value={this.state.Rating} onChange={this.ChangeHandler} style={{fontSize:'30px',borderRadius:'20px',marginTop:'20px'}}/>
  </label>
  <br></br>
  <br></br>
  <button onClick={this.submitHandler} className="labelText" style={{borderRadius:'15px',marginLeft:'700px',fontSize:'30px',marginTop:'20px'}}>Submit</button>
</form>

<div id="divContainer">
  {
    this.state.employees.map((value,index)=>{
      return(
        <div key={index} id="childContainer">Name:{value.Name}| Department:{value.Department}| Rating:{value.Rating}</div>
      )
    }
    )
  }
</div>
    </div>
  );
}
}

export default App;
