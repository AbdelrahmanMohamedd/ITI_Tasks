import { Component } from "react"


class Form extends Component {
    constructor(props) {
        super()
        this.state = {name: "",age: "",email: ""}
        this.submitForm = () => {
            this.props.getStudentNameId(this.state)
        }
    }
    render() {
        return (
            <div style={{ color: 'azure', textAlign: 'center' ,backgroundColor: '#462103' , padding: 50 }} >
                <table>
                    <tr>
                        <h3>Welcome Back</h3>
                    </tr>
                    <tr>
                        <th>
                            <label htmlFor="name">Name:</label>
                        </th>
                        <th>
                            <input type="text" name="name" id="name" onChange={(e) => {this.setState({ name: e.target.value })}} />
                        </th> 
                    </tr> 
                    <tr>
                        <th>
                            <label htmlFor="age">Age:</label>
                        </th>
                        <th>
                            <input type="text" name="age" id="age" onChange={(e) => {this.setState({ age: e.target.value })}} />
                        </th> 
                    </tr> 
                        <th>
                            <label htmlFor="email">Email:</label>
                        </th>
                        <th>
                            <input type="text" name="email" id="email" onChange={(e) => { this.setState({ email: e.target.value })}} />
                        </th> 
                    <tr>
                    <input  style={{backgroundColor: '#CD5C5C' , fontSize:20}} type="button" value="Submit" id="submitForm" onClick={this.submitForm} ></input>
                    </tr>
                </table>
            </div>
        )
    } 
}

export default Form;