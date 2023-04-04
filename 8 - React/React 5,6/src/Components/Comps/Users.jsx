import "./Users.css";
import axios from 'axios';
import React, { useEffect } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from '../redux/actionCreators';
const Users = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
      axios.get('http://localhost:3000/users').then((res)=>{
      console.log(res.data)
        dispatch(getAllUsers(res.data))
      }
      );
    },[]);
    const usersArr = useSelector((state)=>state.users);
    const deleteUser = (id)=>{
      axios.delete(`http://localhost:3000/users/${id}`)
      .then(window.location.reload(false))
    }
    const LoadDetail = (id) => {
      navigate("/user/" + id);
    }
    return (
          <> 
            <table id="users">
              <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Do</th>
              </tr>
                {usersArr?.map((u)=><tr key={u.id}>
                {u.name&&<td>{u.name}</td>}
                {u.age&&<td>{u.age}</td>}
                {u.email&&<td>{u.email}</td>}
                <td>
                    <a onClick={() => { deleteUser(u.id) }} className="btn btn-danger mx-2">Remove</a>
                    <a onClick={() => { LoadDetail(u.id) }} className="btn btn-primary">Details</a>
                </td> 
              </tr>
              )}
            </table>
          </>
    );
};

export default Users;