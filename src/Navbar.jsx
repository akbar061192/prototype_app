import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <nav className='navbar navbar-expand-lg navbar-light '>
              <NavLink to='/' className='navbar-brand'>
                Project{' '}
              </NavLink>
              <button
                type='button'
                className='navbar-toggler'
                data-toggle='collapse'
                data-target='#navbarCollapse1'
              >
                <span className='navbar-toggler-icon'></span>
              </button>

              <div className='collapse navbar-collapse' id='navbarCollapse1'>
                <div className='navbar-nav ml-auto'>
                  <NavLink
                    activeClassName='menu_active'
                    exact
                    to='/'
                    className='nav-item nav-link '
                  >
                    Home
                  </NavLink>

                  <NavLink
                    activeClassName='menu_active'
                    exact
                    to='list'
                    className='nav-item nav-link '
                  >
                    List
                  </NavLink>
                  <NavLink
                    activeClassName='menu_active'
                    exact
                    to='reset'
                    className='nav-item nav-link '
                  >
                    Reset
                  </NavLink>
                  <NavLink
                    activeClassName='menu_active'
                    exact
                    to='card'
                    className='nav-item nav-link '
                  >
                    Card
                  </NavLink>
                  <NavLink
                    activeClassName='menu_active'
                    exact
                    to='meeting'
                    className='nav-item nav-link '
                  >
                    Meeting
                  </NavLink>
                  <NavLink
                    activeClassName='menu_active'
                    exact
                    to='join'
                    className='nav-item nav-link '
                  >
                    Join
                  </NavLink>
                  <NavLink
                    activeClassName='menu_active'
                    to='login'
                    className='nav-item nav-link'
                  >
                    Login
                  </NavLink>
                  <NavLink
                    activeClassName='menu_active'
                    to='schedule'
                    className='nav-item nav-link'
                  >
                    Schedule
                  </NavLink>
                  <NavLink
                    activeClassName='menu_active'
                    to='forgetpass'
                    className='nav-item nav-link'
                  >
                    ForgetPassword
                  </NavLink>
                  <NavLink
                    activeClassName='menu_active'
                    to='createaccount'
                    className='nav-item nav-link'
                  >
                    Create Account
                  </NavLink>
                  <NavLink
                    activeClassName='menu_active'
                    to='updatepassword'
                    className='nav-item nav-link'
                  >
                    UpdatePassword
                  </NavLink>
                  {/* <NavLink
                    activeClassName='menu_active'
                    to='meetingwindow'
                    className='nav-item nav-link'
                  >
                    MeetingWindow
                  </NavLink> */}
                  <NavLink
                    activeClassName='menu_active'
                    to='instameeting'
                    className='nav-item nav-link'
                  >
                    Insta Meeting
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
