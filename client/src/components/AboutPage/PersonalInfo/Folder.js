import React, { useContext, useState } from "react"
import classes from "./PersonalInfo.module.css"
import FolderIcon from "../../../images/FolderIcon"
import arrowDown from "../../../images/arrow-down.svg"
import classNames from "classnames"
import File from "./File"
import { DetailsContext } from "../../Details/Details"

const Folder = ({ folder }) => {

  const [open, setOpen] = useState(false)

  const folderClass = classNames({
    [classes.node]: true,
    [classes.folderOpen]: open
  });

  const {setHeight} = useContext(DetailsContext);

  return (
    <>
      <div className={folderClass} onClick={handleClick}>
        <img className={classes.arrow} src={arrowDown} alt=""/>
        <FolderIcon className={classes.nodeIcon}/>
        <p className={classes.nodeName}>{folder.name}</p>
      </div>
      {open && folder.files.map((file, i) => <File file={file} key={i}/>)}
    </>
  )

  function handleClick () {
    setOpen(!open);
    setTimeout(function () {
      setHeight();
    });
  }
}

export default Folder
