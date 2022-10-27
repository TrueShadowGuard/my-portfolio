import React from "react";
import classes from "./CheckboxWithImage.module.css";
import classNames from "classnames";

import checkMark from "../../../../assets/check-mark.svg";

const CheckboxWithImage = ({Img, text, checked, setChecked, ...props}) => {
    return (
        <label className={classNames(classes.root, props.className, {[classes.checked]: checked})}>
            <input type="checkbox" hidden onChange={e => setChecked(e.target.checked)}/>
            <div className={classes.checkbox}>
                <img className={classes.mark} src={checkMark} alt=""/>
            </div>
            {typeof Img === "string" ?
                <img src={Img} alt={""} className={classes.img}/> :
                <Img className={classes.img} color={checked ? "#607B96" : "#273E53"}/>
            }
            <span className={classes.text}>{text}</span>
        </label>
    );
};

export default CheckboxWithImage;