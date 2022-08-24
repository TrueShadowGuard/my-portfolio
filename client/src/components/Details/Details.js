import React, {useEffect, useRef, useState} from "react";
import classes from "./Details.module.css";
import classNames from "classnames";
import anime from "animejs";

const Details = ({summary, children, ...props}) => {
    const [areDetailsOpen, setDetailsOpen] = useState(props.defaultOpen || false);

    const rootClass = classNames({
        [classes.root]: true,
        [classes.open]: areDetailsOpen,
        [props.className]: props.className
    });

    const rootRef = useRef();
    const infoRef = useRef();

    useEffect(setDefaultHeight, []);
    useEffect(setHeight);

    return (
        <div className={rootClass} ref={rootRef}>
            <button className={classes.button} onClick={handleSummaryClick}>{summary}</button>
            <div className={classes.info} ref={infoRef}>{children}</div>
        </div>
    );

    function handleSummaryClick() {
        setDetailsOpen(!areDetailsOpen);
    }

    function getMaxHeight($el) {
        const prevHeight = $el.style.height;

        $el.style.height = "unset";
        const height = $el.clientHeight;
        $el.style.height = prevHeight;

        return height;
    }

    function setHeight() {
        const $info = infoRef.current;
        const $root = rootRef.current;

        const height = getMaxHeight($info);

        const animeDuration = height * 5;

        if(areDetailsOpen) {
            // open
            anime({
                targets: $info,
                height: height,
                easing: "easeInOutQuad",
                duration: animeDuration,
            });
        } else {
            // close
            $root.classList.add(classes.closing);
            anime({
                targets: $info,
                height: 0,
                easing: "easeInOutQuad",
                duration: animeDuration,
                complete: function () {
                    $root.classList.remove(classes.closing);
                }
            });
        }
    }

    function setDefaultHeight() {
        if(props.defaultOpen) {
            infoRef.current.style.height = getMaxHeight(infoRef.current) + "px";
        }
    }
};

export default Details;