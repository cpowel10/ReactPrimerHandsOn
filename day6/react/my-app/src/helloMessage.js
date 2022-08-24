import React from 'react';

//Stateful component
class HelloMessage extends React.Component {
    render() {
        const message = this.props.message ? this.props.message : 'Hi,Hello!!!';
        return (
            <div className='App'>
                <header className='App-header'>
                    <div>
                        Message from {this.props.name} : {message}
                    </div>
                </header>
            </div>
        )
    }
}

export default HelloMessage;