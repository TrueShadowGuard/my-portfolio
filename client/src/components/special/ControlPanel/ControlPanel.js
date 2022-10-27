import React from "react";
import classes from "./ControlPanel.module.css";
import classNames from "classnames";

const ControlPanel = (props) => {
    return (
        <div className={classNames(classes.root, props.className)}>

        </div>
    );
};

export default ControlPanel;