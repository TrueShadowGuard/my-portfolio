import React from 'react';
import classes from "./TwoColumns.module.css";
import classNames from "classnames";

const TwoColumns = ({children, ...props}) => {
    return (
        <div className={classNames(classes.root, props.className)}>
            {children}
        </div>
    );
};

export default TwoColumns;