import { NavLink } from "react-router-dom";
import axios from 'axios';




const StudTable = (props) => {
  console.log(props);
  const fire = (student) => {
    console.log(student);
    let flag = window.confirm(`Confirm to delete user?`);
    if (flag) {
      axios.delete(`http://localhost:3002/jsonarray/${student.id}`)
      window.location.reload();
    }
  }
  if (props.students.jsonarray.length) {
    let RenderStudents = props.students.jsonarray.map((student) => {
      return (
        <tr key={student.id}>
          <td className="text-center">{student.name}</td>
          <td className="text-center">{student.age}</td>
          <td className="text-center" >{student.email}</td>
          <td className="text-center"> <NavLink className="btn btn-outline-dark text-center" to={`/update/${student.id}`}>Update</NavLink></td>
          <td className="text-center">  <input  type="button"  value="delete" className="btn btn-outline-dark " onClick={() => { fire(student) }}/></td>
        </tr>
      )
    })

    return (
      <table className="table text-center table-striped mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {RenderStudents}
        </tbody>
      </table>
    )
  }
  else {
    return (
      <div>
        Loading!!
      </div>
    )
  }
}

export default StudTable