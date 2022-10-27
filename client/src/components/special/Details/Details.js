import React, {useRef, useState} from "react";
import classes from "./Details.module.css";
import classNames from "classnames";

const Details = ({summary, children, ...props}) => {
    const [areDetailsOpen, setDetailsOpen] = useState(props.defaultOpen || false);

    const rootClass = classNames({
        [classes.root]: true,
        [classes.open]: areDetailsOpen,
        [props.className]: props.className
    });

    const rootRef = useRef();
    const infoRef = useRef();

    return (
          <div className={rootClass} ref={rootRef}>
              <button className={classes.button} onClick={handleSummaryClick}>{summary}</button>
              <div className={classes.info} ref={infoRef}>{children}</div>
          </div>
    );

    function handleSummaryClick() {
        setDetailsOpen(!areDetailsOpen);
    }
};

export default Details;
