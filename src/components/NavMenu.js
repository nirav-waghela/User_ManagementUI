import React, {Component} from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Route, Link , NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom'


class NavMenu extends Component {
    render(){

        return (
            <div>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Nav className="mr-auto">
                    {checkLogin() ? '': <NavLink style={{'paddingRight':'10px'}} to='/'>Sign Up</NavLink> }
                    {checkLogin() ? <NavLink style={{'paddingRight':'10px'}} onClick={logout} to='/login' >Logout</NavLink> : <NavLink style={{'paddingRight':'10px'}} onClick={logout} to='/login' >Login</NavLink>}
                    <NavLink style={{'paddingRight':'10px'}} to = '/dashboard' >Home</NavLink>
                </Nav>

            </Navbar>
        </div>
    )
}
}
function logout(){
    localStorage.clear()
}
function checkLogin(){
    return localStorage.hasOwnProperty('token')
}

export default withRouter(NavMenu);