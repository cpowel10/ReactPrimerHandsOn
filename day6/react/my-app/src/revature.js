import React from 'react';

class Revature extends React.Component {
    render() {
        const prop1 = this.props.name ? this.props.name : 'Default Name';
        const prop2 = this.props.value ? this.props.value : 'Default Value';
        return (
            <div className='App'>
                <header className='App-header'>
                    <div>
                        <h5>Revature prop.name : {prop1}</h5>
                        <h5>Revature prop.value : {prop2}</h5>
                    </div>
                </header>
            </div>
        );
    }
}

export default Revature;