import {NavLink, Outlet} from "react-router-dom";

export default function(){

  return(
      <div>
          <nav className="navbar navbar-light bg-light">
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/Chat'>Chat</NavLink>
          </nav>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">

                  <NavLink to='/' className="nav-item nav-link active">Home</NavLink>
                  <NavLink to='/Chat className="nav-item nav-link active"'>Chat</NavLink>
              </div>
          </div>

          <Outlet>

          </Outlet>
      </div>
  );
}