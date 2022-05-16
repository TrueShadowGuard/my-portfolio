import React, {useEffect, useRef, useState} from 'react';
import classes from "./Details.module.css";
import classNames from "classnames";

const Details = ({summary, details, ...props}) => {
    const [areDetailsOpen, setDetailsOpen] = useState(false);

    const rootClass = classNames({
        [classes.root]: true,
        [classes.open]: areDetailsOpen,
        [props.className]: props.className
    });

    const rootRef = useRef();

    return (
        <div className={rootClass} ref={rootRef}>
            <button className={classes.button} onClick={handleSummaryClick}>{summary}</button>
            <div className={classes.detailsAnimation}>{details}</div>
        </div>
    );

    function handleSummaryClick() {
        setDetailsOpen(!areDetailsOpen);
    }
};

export default Details;