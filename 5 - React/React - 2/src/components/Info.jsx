import { Component } from "react"
import axios from "axios";

class Info  extends Component{
    constructor(props){
        super(props)
        console.log("Constr")
        this.state={
            task:null
    }
}

componentDidMount(){
    axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7').then(res=>this.setState({task:res.data.results}));

}



componentDidUpdate(){
    console.log(this.state.task);
    console.log("componentDidUpdate")
}

    render() {
    console.log("render")
    
    
    if(!this.state.task) return <div>Loading </div>
        return this.state.task.map((m)=> <div>Task {m.id}</div>)
    //return;
    };
}

export default Info;





//     render(){
        
//     console.log("render")
//     const imgSrc="Images/1.jpg";
//     const handleClick=(e)=>{
//     console.log(e);
//       // this.setState((oldState)=>({task:{...oldState.task,completed:true}}))
//     };
//     if(!this.state.task) return <div> </div>
//     return <div>
//                 <img  style={{width:"40%",height:"40%"}} src={imgSrc} alt="Ay haga"/>
//                 Task {this.state.task.title}{this.state.task.completed?" Done":" inprogress"}
//                 <button onClick={handleClick} >click me</button>
//                 {/* onclick="alert()" */}
//                 {/* onClick={()=>{this.setState({task:{...this.state.task,isDone:true}})}} */}
//             </div>;
//     }
// }
// export default Info;