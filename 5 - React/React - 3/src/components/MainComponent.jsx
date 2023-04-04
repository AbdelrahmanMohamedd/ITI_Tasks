import "../styles/MainComStyle.css"
import React from 'react';
import StudentForm from './StudentForm';
import StudentsList from './StudentsList';
import {useState} from "react"; 


const MainComponent = () => { 
    const [students,setStudents]= useState([]);
    const addStud= (student)=>{ 
        setStudents((StudData)=>[...StudData,{...student}]);
    }
    
    return (
        <>
            <StudentForm add={addStud} ></StudentForm>
            <StudentsList data={students}></StudentsList>
        </>
    );
};

export default MainComponent;