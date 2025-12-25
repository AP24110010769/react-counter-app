import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Count: 0
        }
    }
    Increment(){
        this.setState({
            Count: this.state.Count + 1
        })
        console.log(this.state.Count)
    }
    Decrement(){
        this.setState({
            Count: this.state.Count - 1
        })
        console.log(this.state.Count)
    }


    render() {
        return (
            <div className='body'>
                <header>
                    <h1 className='heading'>COUNTER APP</h1>
                </header>
                <div className='num'>
                    {this.state.Count}
                </div>
                <div className='click'>
                    <button className='btn1' onClick={()=>this.Decrement()}>Decrement</button>
                    <button className='btn2' onClick={()=>this.Increment()}>Increment</button>
                </div>
            </div>
        )
    }
}

export default Counter
