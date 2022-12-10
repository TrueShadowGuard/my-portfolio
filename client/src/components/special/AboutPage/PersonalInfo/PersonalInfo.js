import React from "react";
import classes from "./PersonalInfo.module.css";
import Folder from "./Folder"
import aboutPageStore from "../aboutPageStore"
import File from "./File";

const PersonalInfo = () => {
    return (
        <div className={classes.root}>
            {aboutPageStore.folders.map((folder, index) => (
              <Folder key={index + "folder"} folder={folder}/>
            ))}
            {aboutPageStore.files.map((file, index) => (
              <File key={index + "file"} file={file} />
            ))}
        </div>
    );
};

export default PersonalInfo;
