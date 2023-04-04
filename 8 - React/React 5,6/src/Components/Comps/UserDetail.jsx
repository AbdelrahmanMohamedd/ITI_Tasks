import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const UserDetail = () => {

    const { id } = useParams();
    const [empdata, empdataState] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`).then((res)=>{
            let {data} = res;
            console.log(data);
            empdataState(data)
        }).catch((err) => {
            console.log(err.message);
        })
    },[]);
    return (
        <div>
            <div className="container">    
                <div className="card row text-center    bg-info ">
                    {empdata &&
                        <div className="my-2">
                            <h1>User name...  <b>{empdata.name}</b></h1>
                            <h2>User Details</h2>
                            <h5>Email: {empdata.email}</h5>
                            <h5>Phone: {empdata.phone}</h5>
                            <h5>Job : {empdata.job}</h5>
                            <Link className="btn btn-primary " to="/users">Back </Link>
                        </div>
                    }
                </div>
            </div>
        </div >
    );
}

export default UserDetail;