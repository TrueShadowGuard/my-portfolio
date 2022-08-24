import React from "react"
import classes from "./PersonalInfo.module.css";
import FileIcon from "../../../images/FileIcon"

const File = ({file}) => {
  return (
    <div className={classes.file}>
      <FileIcon className={classes.fileIcon}/>
      <p className={classes.fileName}>{file.name}</p>
    </div>
  )
}

export default File
