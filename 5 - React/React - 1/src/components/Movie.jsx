import  Types  from'prop-types' ;


const Styling={backgroundColor:"#3C0061", padding:"50px",color:"#DDB100",fontWeight:"bolder",fontSize:"21px"}
const Movie=(props)=>{
    const {MovieID,MovieName,MovieProduceYear,children}=props;
    console.log(props);
    return (
        <div style={Styling}> 
            <div>MovieID: {MovieID}</div>
                {MovieName&&<div>MovieName: {MovieName}</div>}
                {MovieProduceYear&& <div>MovieProduceYear: {MovieProduceYear}</div>}
            <div>{children}</div>
        </div>
)}

Movie.protoTypes={
    MovieID:Types.string.isRequired,
    MovieName:Types.string
}

export default Movie;