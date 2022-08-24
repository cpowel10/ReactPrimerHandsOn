import React from "react";

class Replace extends React.Component{
    replaceText(){
        const text = document.getElementById("textHere").innerHTML;
        if(text == ""){
            document.getElementById("textHere").innerHTML = "Thank you for releasing me!";
            return;
        }
        else if(text == "Thank you for releasing me!"){
            document.getElementById("textHere").innerHTML = "Thanks again I guess";
            return;
        }
        else if(text == "Thanks again I guess"){
            document.getElementById("textHere").innerHTML = "Alright, goodbye!";
            return;
        }
        document.getElementById("textHere").innerHTML = "";
    }

    render(){
        return(
            <div>
                <button onClick={this.replaceText}>Replace</button>
                <h3 id="textHere"></h3>
            </div>
        );
    }
}

export default Replace;