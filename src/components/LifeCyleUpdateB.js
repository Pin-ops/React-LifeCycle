import React, { Component } from 'react'



class LifeCycleUpdateB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            city:'Izmir'
        }
        console.log('LifeCycleUpdateB constructor')
    }

    static getDerivedStateFromProps ( props , state) {
        console.log('LifeCycleUpdateB getDerivedStateFromProps')
        return null

    }

    shouldComponentUpdate(){
        console.log('LifeCycleUpdateB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleUpdateB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('LifeCycleUpdateB componentDidUpdate')
    }


    componentDidMount() {
        console.log('LifeCycleUpdateB componentDidMount')
        // this.setState({
        //     city:'Hamburg - B'
        // })
    }

    changeState = () => {
        this.setState({
            city:'Bonn - B'
        })
    }
    render() {
        console.log('LifeCycleUpdateB render')
        return (
            <div>
                Hello from LifeCycleUpdateB - {this.state.city}
            <div>
                <button style={{padding:'5px 15px',margin:'15px'}} onClick={this.changeState}>Change State - City B</button>
            </div>
     </div>
        )
    }
}

export default LifeCycleUpdateB
