import React from "react";


class Photos extends React.Component{
    images = ['Mosalah.jfif','CR7.jpg','Messi.jfif','Benzema.jpg','Neymar.jpg'];
    i = 0;
    constructor(){
        super();
        this.state = {
            imgSrc :this.images[this.i],
        };
    }
    NextImg=()=> { 
            this.imgSrc= this.images[this.i++];
            if (this.i>4) this.i=4; 
            let img = this.images[this.i];
            this.setState({imgSrc:img});
        }
    PrevImg=() =>{
            this.imgSrc=this.images[--this.i];
            if (this.i<1) this.i=0;
            let img = this.images[this.i];
            this.setState({imgSrc:img});
        }
    render(){
        const Styling={
            theDiv:{
                backgroundColor:"#3C0061",
                padding:"50px",
                color:"#DDB100",
                fontWeight:"bolder",
                fontSize:"21px"
            }
        }
        return( 
            <div style={Styling.theDiv}>
                <img  src={this.state.imgSrc} height="500px" alt="pic"/> 
                <div>
                    <button style={Styling.btns}  onClick={this.NextImg}>Next</button>
                    <button style={Styling.btns}  onClick={this.PrevImg}>Previuos</button>
                </div>
            </div>
            )
    }


}


export default Photos;



// .button {
//   background-color: #226124; 
//   border: none;
//   color: white;
//   padding: 10px 20px;
//   text-align: center;
//   display: inline-block;
//   font-size: 15px;
// }


// .button:hover {
//   background-color: #61c664;
//   color: white;
// }


// .viewer{
//   size: 35px;
// }