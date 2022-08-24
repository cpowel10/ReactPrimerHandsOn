import React from "react";

class MyClass extends React.Component{
    multiply(a,b,c){
        return a*b*c;
    }

    printMessage(){
        return "Way to go!!!";
    }

    render(){
        return(
            <div className='App'>
                <header className="App-header">
                    <div>
                        5*2*3={this.multiply(5,2,3)}<br/>
                        {this.printMessage()}
                    </div>
                </header>
            </div>
        );
    }
}

export default MyClass;