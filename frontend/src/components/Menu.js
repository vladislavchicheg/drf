import React from "react";

import {Link} from "react-router-dom"
const Menu = () => {

    return (
      <nav>
        <ul className="nav nav-pills nav-fill justify-content-center mb-5">
  <li className="nav-item">
    <Link to='/'>Пользователи</Link>
    
  </li>
  <li className="nav-item">
    <Link to='/projects'>Проекты</Link>
  </li>
  <li className="nav-item">
  <Link to='/todos'>TODOs</Link>
  </li>
  
</ul></nav>
    )
}

export default Menu;