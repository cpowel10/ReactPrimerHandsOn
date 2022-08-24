import React from "react";

//Stateful Component/ class-based component
class Chris extends React.Component{
    render(){
        return(
            <div className="App">
                <div>
                    <h2>This is Class-based component</h2>
                </div>
                <div>
                    <h3>It has two div inside main div</h3>
                </div>
            </div>
        );
    }
}

export default Chris;