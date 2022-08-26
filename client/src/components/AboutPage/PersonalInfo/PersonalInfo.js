import React from "react";
import classes from "./PersonalInfo.module.css";
import Folder from "./Folder"
import aboutPageStore from "../aboutPageStore"

const PersonalInfo = ({ files }) => {
    return (
        <div className={classes.root}>
            {aboutPageStore.folders.map((folder, index) => (
              <Folder key={index} folder={folder}/>
            ))}
        </div>
    );
};

export default PersonalInfo;
