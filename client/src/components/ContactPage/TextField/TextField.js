import React from "react"
import classNames from "classnames"
import classes from "./TextField.module.css"

function TextInput (props) {

  props = Object.entries(props);

  const customPropsNames = ["as", "label", "className"];

  const customProps = Object.fromEntries(props.filter(prop => customPropsNames.includes(prop[0])));

  const inputProps = Object.fromEntries(props.filter(prop => !customPropsNames.includes(prop[0])));
  inputProps.className = classes.field;

  const formElement = React.createElement(customProps.as || "input", inputProps);

  const rootClass = classNames({
    [customProps.className]: customProps.className,
    [classes.root]: true
  })

  return (
    <label className={rootClass}>
      {customProps.label && <p className={classes.label}>{customProps.label}:</p>}
      {formElement}
    </label>
  )
}

export default TextInput;
