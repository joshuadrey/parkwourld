import React from 'react'
import { connect } from "react-redux";
import { logoutUser } from "../redux/userReducer";
import { Link } from "react-router-dom";

const Header = ({logoutUser}) => {
    return (
        <div className = 'header-component'>
            <Link className='header-link' to = '/home'>Home </Link>
            <Link className='header-link'>Sign-Up</Link>
            <Link className='header-link' to = '/' onClick = {() => {logoutUser()}}>Logout</Link>
        </div>
    )
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, {logoutUser})(Header)