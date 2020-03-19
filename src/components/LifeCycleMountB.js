import React, { Component } from 'react'
class LifeCycleMountB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name:'Ayse'
        }
        console.log('LifeCycleMountB constructor')
    }

    static getDerivedStateFromProps ( props , state) {
        console.log('LifeCycleMountB getDerivedStateFromProps')
        return null

    }

    componentDidMount () {
        console.log('LifeCycleMountB componentDidMount')
    }

    render() {
        console.log('LifeCycleMountB render')
        return (
            <div>
                Hello from LifeCycleMountB

            </div>
        )
    }
}

export default LifeCycleMountB;
