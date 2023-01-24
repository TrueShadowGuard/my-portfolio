import React from "react"
import classes from "./PersonalInfo.module.css"
import FileIcon from "../../../svg/FileIcon"
import aboutPageStore from "../aboutPageStore"
import classNames from "classnames"

const File = ({ file }) => {

  const fileClassName = classNames({
    [classes.node]: true,
  })

  return (
    <div className={fileClassName} onClick={handleClick}>
      <FileIcon className={classes.nodeIcon}/>
      <p className={classes.nodeName}>{file.name}</p>
    </div>
  )

  function handleClick () {
    if(file.text) {
      aboutPageStore.setCurrentFile(file)
    }
  }
}

export default File
