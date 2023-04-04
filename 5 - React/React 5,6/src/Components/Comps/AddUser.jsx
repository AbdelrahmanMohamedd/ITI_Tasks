import axios from "axios";
import { useState  , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom"; 



const AddUser = () => {

    const[id]=useState("");
    const[name,nameState]=useState("");
    const[email,emailState]=useState("");
    const[phone,phoneState]=useState("");
    const[job,jobchange]=useState("");
    const[active,activeState]=useState(true);
    const[validation,valState]=useState(false);
    const navigate=useNavigate();
    const handlesubmit=(e)=>{
    e.preventDefault();
    const empdata={name,email,phone,active,job};
    axios.post("http://localhost:3000/employee",empdata).then((res)=>{
        alert('DOne, Saved')
        navigate('/');
        }).catch((err)=>{ console.log(err.message)})
    }
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}> 
                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2 className="text-center text-bg-secondary p-3">Create New Employee</h2>
                            </div>
                            <div className="card-body"> 
                                <div className="row"> 
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div> 
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e=>valState(true)} onChange={e=>nameState(e.target.value)} className="form-control"></input>
                                            {name.length === 0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div> 
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input required value={email} type='email' onChange={e=>emailState(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div> 
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input required value={phone} onChange={e=>phoneState(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div> 
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Job</label>
                                            <input required value={job} onChange={e=>jobchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div> 
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                        <input checked={active} onChange={e=>activeState(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label  className="form-check-label">Is Active</label> 
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div> 
                                </div> 
                            </div> 
                        </div> 
                    </form> 
                </div>
            </div>
        </div>
    );
}

export default AddUser;