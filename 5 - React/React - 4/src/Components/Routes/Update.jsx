import {Component} from "react"
import withRouter from './withRouter'
import axios from 'axios';

class Update extends Component{
        constructor(props){
          super()
        this.state={student:{},id:props.params.id,} 

this.UpdateData= (async ()=>{
  this.setState({student:this.NewStudent})
  console.log(this.state.student)
await axios.put(`http://localhost:3002/jsonarray/${this.state.id}`, this.state.student, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
})
  
}

render(){
if(Object.keys(this.state.student).length==0){
  return(
  <h1>Loading...</h1>
  )
}
else{
return(
<div className="mt-5">
  <div className="alert alert-warning">
    <h2>Update User:</h2>
    <form className="my-3">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={this.state.student.name}
          onChange={(e)=>{this.setState({...this.state,student:{...this.state.student,name:e.target.value}})} }
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          className="form-control"
          id="age"
          name="age"
          value={this.state.student.age}
          onChange={(e)=>{this.setState({...this.state,student:{...this.state.student,age:e.target.value}})} }
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={this.state.student.email}
          onChange={(e)=>{this.setState({...this.state,student:{...this.state.student,email:e.target.value}})} }
          required
        />
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-sucess text-center" onClick={this.UpdateData}>Update</button>
      </div>
    </form>
  </div>
</div>

)
}
}
NewStudent={
}
componentDidMount(){
console.log(this.id)
  fetch(`http://localhost:3002/jsonarray/${this.state.id}`)
        .then((response)=>{return response.json()})
        .then((data)=>{
          console.log(data)
            this.setState({student:data})
        })
        .catch((err)=>{console.log(err)})
        
}
}


export default withRouter(Update);