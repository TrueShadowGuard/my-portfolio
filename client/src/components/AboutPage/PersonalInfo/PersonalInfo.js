import React from "react";
import classes from "./PersonalInfo.module.css";
import classNames from "classnames";
import File from "./File"

const PersonalInfo = ({ files = [{name: "bio"}] }) => {
    return (
        <div className={classes.root}>
            {files.map((file, index) => (
              <File key={index} file={file}/>
            ))}
        </div>
    );
};

export default PersonalInfo;
