import React from "react";
import classes from "./SubHeader.module.css";
import classNames from "classnames";

import triangle from "../../../assets/triangle.svg";
import cross from "../../../assets/cross.svg"

const SubHeader = ({header, tabName, ...props}) => {
    return (
        <div className={classNames(classes.root, props.className)}>
            <div className={classes.tabs}>
                <div className={classes.tab}>
                    <p className={classes.tabName}>{tabName}</p>
                    <img className={classes.cross} src={cross} alt="cross" onClick={handleCloseClick}/>
                </div>
            </div>
        </div>
    );

    function handleCloseClick() {
      if(props.onCloseClick) props.onCloseClick();
    }
};

export default SubHeader;
