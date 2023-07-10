import React from 'react'
import { Link } from 'react-router-dom';
function Menu() {
  return (
    <nav>
    <ul>
      <li>
        <Link to="/">Tasks</Link>
      </li>
      <li>
        <Link to="/completed">Completed Tasks</Link>
      </li>
      <li>
        <Link to="/trash">Trash</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Menu