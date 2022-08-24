import React from "react";

class Alert extends React.Component{
    showAlert(){
        // <h3>React is a great ui library</h3>
        alert("React is a great ui library");
    }


    render(){
        return(
            <div>
                {/* onClick == React event
                onclick == HTML event */}
                <button onClick={this.showAlert}>Press Me</button>
            </div>
        );
    }
}

export default Alert;