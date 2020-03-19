import React, { Component } from 'react'
import LifeCycleUpdateB from './LifeCyleUpdateB'



class LifeCycleUpdateA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            city:'Istanbul'
        }
        console.log('LifeCycleUpdateA constructor')
    }

    static getDerivedStateFromProps ( props , state) {
        console.log('LifeCycleUpdateA getDerivedStateFromProps')
        return null

    }

    shouldComponentUpdate(){
        console.log('LifeCycleUpdateA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleUpdateA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('LifeCycleUpdateA componentDidUpdate')
    }


    componentDidMount() {
        console.log('LifeCycleUpdateA componentDidMount')
        // this.setState({
        //     city:'Hamburg - A'
        // })
    }

    changeState = () => {
        this.setState({
            city:'Düsseldorf - A'
        })
    }
    render() {
        console.log('LifeCycleUpdateA render')
        return (
            <div>
                Hello from LifeCycleUpdateA - {this.state.city}
            <div>
                <button style={{padding:'5px 15px',margin:'15px'}} onClick={this.changeState}>Change State - City A</button>
            </div>
            <LifeCycleUpdateB/>
     </div>
        )
    }
}

export default LifeCycleUpdateA
