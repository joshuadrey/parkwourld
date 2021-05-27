import { connect } from "react-redux";
import { logoutUser } from "../redux/userReducer";
import { Link } from "react-router-dom";

const Header = ({logoutUser}) => {
    return (
        <div className = 'header-component'>
            <Link to = '/home'>Home </Link>
            <Link to = '/' onClick = {() => {logoutUser()}}>Logout</Link>
        </div>
    )
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, {logoutUser})(Header)