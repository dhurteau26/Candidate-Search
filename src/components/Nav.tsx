import { Link } from 'react-router-dom'

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav>
      <p>
        <Link to='/'>
          Featured Candidates
        </Link>
      </p>

    </nav>
  )
};

export default Nav;
