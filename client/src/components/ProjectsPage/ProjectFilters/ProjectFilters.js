import React, {useState} from 'react';
import classes from "./ProjectFilters.module.css";
import classNames from "classnames";
import CheckboxWithImage from "../CheckboxWithImage/CheckboxWithImage";
import ReactIcon from "../../../images/CssIcon";
import HtmlIcon from "../../../images/HtmlIcon";
import CssIcon from "../../../images/CssIcon";

const ProjectFilters = (props) => {
    return (
        <div className={classNames(classes.root, props.className)}>
            <CheckboxWithImage Img={ReactIcon}
                               text={"React"}
                               checked={!!states["react"]}
                               setChecked={setState("react")}
            />
            <CheckboxWithImage Img={HtmlIcon}
                               text={"HTML"}
                               checked={!!states["html"]}
                               setChecked={setState("html")}
            />
            <CheckboxWithImage Img={CssIcon}
                               text={"CSS"}
                               checked={!!states["css"]}
                               setChecked={setState("css")}
            />
        </div>
    );
};

export default ProjectFilters;