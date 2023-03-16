
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { withRouter } from 'react-router-dom'
import Table from 'react-bootstrap/Table';


class Admin extends Component{
    componentDidMount(){
        this.props.getAllUsers().then(resp => {console.log(resp)}).catch(err => console.log(err))
        this.props.getAllGroups({status:'ALL'}).then(resp => {console.log(resp)}).catch(err => console.log(err))
    }
    render(){
        const {allUsers,changeStatus,allGroups,changeGroupStatus,deleteGroup,deleteUser} = this.props
        console.log(allGroups,"++++++")
        return(
            <div>     
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Approve User</th>
                        <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers && allUsers.length ? ( allUsers.map(e =>(
                            <tr key={e._id}>
                            <td>{e._id}</td>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.approved ? ' APPROVED' : 'NOT APPROVED' }</td>
                            <td> <ButtonGroup aria-label="Basic example">
                                    <Button variant="secondary" onClick={()=>changeStatus({id:e._id,approved:true})}>Approve</Button>
                                    </ButtonGroup></td>
                            <td><ButtonGroup aria-label="Basic example">
                                    <Button variant="secondary" onClick={()=>changeStatus({id:e._id,approved:false})}>Delete User</Button>
                                    </ButtonGroup></td>
                        </tr>
                        ))
                            
                        ): ""}
                    </tbody>
                </Table>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Group Name</th>
                        <th>Group Category</th>
                        <th>Group Description</th>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Delete Group</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allGroups && allGroups.length ? ( allGroups.map(e =>(
                            <tr key={e._id}>
                            <td>{e.groupName}</td>
                            <td>{e.groupCategory}</td>
                            <td>{e.groupDescription}</td>
                            <td>{e._id}</td>
                             <td>{e.groupStatus ? 'APPROVED' : 'NOT APPROVED'} <ButtonGroup aria-label="Basic example">
                                    <Button variant="secondary" onClick={()=>changeGroupStatus({id:e._id,groupStatus:true})}>Approve</Button>
                                    </ButtonGroup></td> 

                            <td><ButtonGroup aria-label="Basic example">
                                    <Button variant="secondary" onClick={()=>changeGroupStatus({id:e._id,groupStatus:false})}>Delete Group</Button>
                                    </ButtonGroup></td>
                        </tr>
                        ))
                            
                        ): ""}
                    </tbody>
                </Table>
                
            </div>
        )
    }
}

export default withRouter(Admin)