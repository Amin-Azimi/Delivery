import { Outlet, Link } from "react-router-dom";
function Layout() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/deliveris">Deliveris</Link>
            </li>
          </ul>
        </nav>
  
        <hr />
        <Outlet />
      </div>
    );
  }

  export default Layout;