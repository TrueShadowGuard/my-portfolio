import classes from "./AboutPage.module.css"
import mail from "../../images/mail-icon.svg"
import phone from "../../images/phone-icon.svg"
import React from "react"

function Contacts() {
  return (
    <div className={classes.contacts}>
      <ul>
        <li>
          <img className={classes.contactIcon} src={mail} alt="mail"/>
          <a href="mailto:playvarian@gmail.com">playvarian@gmail.com</a>
        </li>
        <li>
          <img className={classes.contactIcon} src={phone} alt="phone"/>
          <a href="tel:375333930022">+375-33-393-00-22</a>
        </li>
      </ul>
    </div>
  )
}

export default Contacts;
