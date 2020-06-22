import React, {Component} from 'react'
import {connect} from 'react-redux'
import {validateUser} from '../store/actions'
import Login from '../components/Login'

class UserLogin extends Component{
    render(){
        console.log(validateUser)
        return(
            <Login validateUser={this.props.validateUser}/>
        )
    }
}

function mapStateToProps(state){
    return{
        ...state
    }
}

function mapDispatchToProps(dispatch){
    return{
        validateUser: (payload) => dispatch(validateUser(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserLogin);