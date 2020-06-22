import React, {Component} from 'react'
import {connect} from 'react-redux'
import {registerUser} from '../store/actions'
import SignUp from '../components/Signup'

class UserRegistration extends Component{
    render(){
        console.log(this.props,"in container")
        return(
            <div>
                <SignUp registerUser={this.props.registerUser}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        ...state
    }
}

function mapDispatchToProps(dispatch ,ownProps){
    return{
        registerUser: (payload) => dispatch(registerUser(payload)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserRegistration)