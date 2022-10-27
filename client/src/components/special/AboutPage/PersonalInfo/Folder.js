import React, {useState} from "react"
import classes from "./PersonalInfo.module.css"
import FolderIcon from "../../../images/FolderIcon"
import classNames from "classnames"
import File from "./File"

const Folder = ({ folder }) => {

  const [open, setOpen] = useState(false)

  const folderClass = classNames({
    [classes.node]: true,
    [classes.folder]: true,
    [classes.folderOpen]: open,
  });

  return (
    <>
      <div className={folderClass} onClick={handleClick}>
        <FolderIcon className={classes.nodeIcon} color={folder.color}/>
        <p className={classes.nodeName}>{folder.name}</p>
      </div>
      {open && folder.files.map((file, i) => <File file={file} key={i}/>)}
    </>
  )

  function handleClick () {
    setOpen(!open);
  }
}

export default Folder
