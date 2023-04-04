import Form from "./Components/Routes/Form"
import Error from "./Components/Routes/Error"
import StudTable from "./Components/Routes/StudTable"
import Nav from "./Components/Routes/Nav.jsx"
import Update from "./Components/Routes/Update"
import axios from 'axios';
import Students from "./students.json"
import {Component} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends Component{
    constructor(){
            super();
            this.state = {students:Students,  server_url: 'http://localhost:3002/jsonarray'}
        this.getNameid= async (state)=>{ 
        if(state.name.length!==0 && state.age.length!==0){
            await axios.post(this.state.server_url, state, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }
    }        
} 
    render(){
        return(
            <div style={{backgroundColor:'#E9967A'}}>
                <BrowserRouter>
                    <Nav></Nav>
                        <Routes>
                            <Route path="/add" element={<Form getStudentNameId={this.getNameid}></Form>}/>
                            <Route path="/" element={<Form getStudentNameId={this.getNameid}></Form>}/>
                            <Route path="/students" element={<StudTable students={this.state.students}/>}/>
                            <Route path="/update/:id" element={<Update/>}/>
                            <Route path="*" element={<Error/>}/>
                        </Routes>
                </BrowserRouter> 
            </div> 
        )
    }
}
export default App;