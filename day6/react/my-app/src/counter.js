import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        }
    }
    tick() {
        this.setState({
            seconds: this.state.seconds + 1
        });
    }

    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    }

    render() {
        this.tick();
        return (
            <div className='App'>
                <div>
                    Time Elapsed : {this.props.seconds}
                </div>
            </div>
        );
    }
}

export default Counter;