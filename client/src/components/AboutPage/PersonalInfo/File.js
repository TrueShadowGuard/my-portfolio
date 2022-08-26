import React from "react"
import classes from "./PersonalInfo.module.css";
import FileIcon from "../../../images/FileIcon"
import aboutPageStore from "../aboutPageStore"

const File = ({file}) => {
  return (
    <div className={classes.node} onClick={handleClick}>
      <FileIcon className={classes.nodeIcon}/>
      <p className={classes.nodeName}>{file.name}</p>
    </div>
  )

  function handleClick() {
    aboutPageStore.setCurrentFile(file)
  }
}

export default File
