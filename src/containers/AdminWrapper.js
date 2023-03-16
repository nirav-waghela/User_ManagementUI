import React, {Component} from 'react'
import {connect} from 'react-redux'
import Admin from '../components/admin'
import { getAllUsers, changeStatus, getAllGroups, changeGroupStatus, deleteGroup,deleteUser} from '../store/actions'

class AdminWrapper extends Component{
    render(){
        console.log(this.props)
        return(
            <Admin 
                allUsers = {this.props.allUsers}
                getAllUsers={this.props.getAllUsers}
                changeStatus={this.props.changeStatus}
                allGroups = {this.props.allGroups}
                getAllGroups = {this.props.getAllGroups}
                changeGroupStatus = {this.props.changeGroupStatus}
                deleteGroup = {this.props.deleteGroup}
                deleteUser = {this.props.deleteUser}
            />
        )
    }
}
function mapStateToProps(state) {
    console.log(state.Root,"!!!!!!!!!!!!!!!")
    return {allUsers : state.Root.allUsers, allGroups: state.Root.allGroups}
}

function mapDispatchToProps(dispatch) {
    return {
        getAllUsers: () => dispatch(getAllUsers()),
        changeStatus: (id) => dispatch(changeStatus(id)),
        getAllGroups:(data) => dispatch(getAllGroups(data)),
        changeGroupStatus:(data) => dispatch(changeGroupStatus(data)),
        deleteGroup:(data) => dispatch(deleteGroup(data)),
        deleteUser:(data) => dispatch(deleteUser(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminWrapper);