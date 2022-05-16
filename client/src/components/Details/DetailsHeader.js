import React from 'react';
import classes from './Details.module.css';
import triangle from "../../images/triangle.svg";
import classNames from "classnames";

const DetailsHeader = ({header, ...props}) => {
    return (
        <header className={classNames(classes.header, props.header)}>
            <img className={classes.triangle} src={triangle} alt="triangle"/>
            {header}
        </header>
    );
};

export default DetailsHeader;