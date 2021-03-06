import React, { useContext,Fragment } from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar= (props) =>{
 const authContext=useContext(AuthContext);
 const {isAuthenticated, logout, user} = authContext;
 const onLogout = () =>{
  logout();
  props.history.push('/');
}
const authLinks = (
  <Fragment>
      <li><a href='./profile'>{ user && user.username}</a></li>
      <li>
          <a onClick={onLogout} href=''>
             Logout
          </a>
      </li>
  </Fragment>
) 
const guestLinks = (
  <Fragment>
      <li>
              <Link to='/register'>Register</Link>
          </li>
          <li>
              <Link to='/login'>Login</Link>
          </li>
  </Fragment>
) 

return(
    <div className='navbar-fixed'>
    <nav>
    <div>
  <ul id="sort" className="dropdown-content">
        <li><a href="#!">Today</a></li>
        <li><a href="#!">Yesterday</a></li>
        <li><a href="#!">Previous Week</a></li>
        <li><a href="#!">Input</a></li>
      </ul>
      <ul id="filter" className="dropdown-content">
        <li><Link to='/academics'>Academics</Link></li>
        <li><Link to='/infrastructure'>Infra</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/others'>Others</Link></li>
      </ul>
      <ul id="profile" className="dropdown-content">
      {isAuthenticated ? authLinks : guestLinks}
      </ul>
      </div>
  <div className="nav-wrapper #000000 black">
    <Link to="/" className="brand-logo left">
      Student Grievance Portal
    </Link>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <a href="#" className="dropdown-button" data-position="bottom" data-tooltip="Profile" data-activates="profile">
          <i className="material-icons">account_circle</i>
        </a>
      </li>
      <li style={{ marginRight: 15 }}>
        <a href className="dropdown-button" data-activates="sort">
          Sort By<i className="material-icons right">sort</i>
        </a>
      </li>
      <li style={{ marginRight: 15 }}>
        <a href className="dropdown-button" data-activates="filter">
          Filter<i className="material-icons right">more_vert</i>
        </a>
      </li>
    </ul>
  </div>
</nav>
</div>
)
}
export default withRouter(Navbar);