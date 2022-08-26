import axios from "axios";
import React from "react";

class About extends React.Component{
    componentDidMount(){
        axios.get(`https://reqres.in/api/users?page=2`)
        .then(res => console.log(res.data[0]))
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
                <h2>About Component</h2>
            </div>
        );
    }
}

export default About;