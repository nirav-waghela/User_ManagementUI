import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Route, Link , NavLink} from 'react-router-dom';


function NavMenu() {
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <NavLink style={{'paddingRight':'10px'}} to='/'>Sign Up</NavLink>
                    <NavLink style={{'paddingRight':'10px'}} onClick={logout} to='/login' >{checkLogin()? 'Logout' : 'Login'}</NavLink>
                    <NavLink style={{'paddingRight':'10px'}} to = '/dashboard' >Home</NavLink>
                </Nav>

            </Navbar>
        </div>
    )
}
function logout(){
    localStorage.clear()
}
function checkLogin(){
    return localStorage.hasOwnProperty('token')
}

export default NavMenu;