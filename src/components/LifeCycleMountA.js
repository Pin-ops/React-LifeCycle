import React, { Component } from 'react'
import LifeCycleMountB from './LifeCycleMountB'
import LifeCycleMountC from './LifeCycleMountC'


class LifeCycleMountA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name:'Ayse'
        }
        console.log('LifeCycleMountA constructor')
    }

    static getDerivedStateFromProps ( props , state) {
        console.log('LifeCycleMountA getDerivedStateFromProps')
        return null

    }

    componentDidMount () {
        console.log('LifeCycleMountA componentDidMount')
    }

    render() {
        console.log('LifeCycleMountA render')
        return (
            <div>
                Hello from LifeCycleMountA
                <LifeCycleMountC/>
                <LifeCycleMountB/>
            </div>
        )
    }
}

export default LifeCycleMountA
