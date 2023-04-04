import "../styles/FormStyle.css"
import {useState} from 'react';


const StudentForm = (props) => {
    const {add}=props;
    const [StudData,setStudData] = useState({name:"",age:"",email:""});
    const handleChange=(e)=>{ 
        const {value,name}=e.target;
        setStudData((Listt)=>({...Listt,[name]:value }))
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        add(StudData);
        setStudData({name:"",age:"",email:""}); 
    }

    return (
        <div className="formm">
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name"   value={StudData.name}  onChange={handleChange}></input>
                <label>Age</label>
                <input type="text" name="age"    value={StudData.age}   onChange={handleChange}></input>
                <label>Email</label>
                <input type="text" name="email"  value={StudData.email} onChange={handleChange}></input>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StudentForm;