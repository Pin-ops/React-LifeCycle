import React, { Component } from 'react'

class LifeCycleMountC extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name:'Ayse'
        }
        console.log('LifeCycleMountC constructor')
    }

    static getDerivedStateFromProps ( props , state) {
        console.log('LifeCycleMountC getDerivedStateFromProps')
        return null

    }

    componentDidMount () {
        console.log('LifeCycleMountC componentDidMount')
    }

    render() {
        console.log('LifeCycleMountC render')
        return (
            <div>
                Hello from LifeCycleMountC
            </div>
        )
    }
}

export default LifeCycleMountC;
