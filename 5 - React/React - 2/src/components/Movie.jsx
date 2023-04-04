import  Types  from'prop-types' ;


const Styling={backgroundColor:"#3C0061", padding:"50px",color:"#DDB100",fontWeight:"bolder",fontSize:"21px"}
const Movie=(props)=>{
    const {MovieID,MovieName,MovieProduceYear,Inc}=props;
    console.log(props);
    const handleClick=()=>{
        Inc(MovieID);
    }
    return (
        <div style={Styling}> 
            <div>MovieID: {MovieID}</div>
                {MovieName&&<div>MovieName: {MovieName}</div>}
                {MovieProduceYear&& <div>MovieProduceYear: {MovieProduceYear}</div>}
                <button onClick={handleClick}>Click</button>
        </div>
)}

Movie.protoTypes={
    MovieID:Types.string.isRequired,
    MovieName:Types.string
}

export default Movie;