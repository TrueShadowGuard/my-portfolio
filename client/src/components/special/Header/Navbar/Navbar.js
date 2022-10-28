import React from "react"
import classes from "./Navbar.module.css"
import classNames from "classnames"
import {NavLink} from "react-router-dom"

const links = [
  {to: "/", text: "_hello"},
  {to: "/about-me", text: "_about-me"},
  {to: "/projects", text: "_projects"},
  {to: "/contact-me", text: "_contact-me"},
]

const Navbar = (props) => {
  const getLinkClass = (navData) => classNames({
    [classes.link]: true,
    [classes.active]: navData.isActive
  });

  return (
    <nav className={classNames(classes.root, props.className)}>
      <ul className={classes.list}>
        {links.map(link => (
          <li key={link.to + link.text}>
            <NavLink className={getLinkClass} end to={link.to}><span className={classes.linkText}>{link.text}</span></NavLink>
          </li>
        ))
        }
      </ul>
    </nav>
  )
}

export default Navbar
