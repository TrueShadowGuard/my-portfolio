import React, {useState} from 'react';
import classes from "./ProjectFilters.module.css";
import classNames from "classnames";
import CheckboxWithImage from "../CheckboxWithImage/CheckboxWithImage";
import ReactIcon from "../../../images/CssIcon";
import HtmlIcon from "../../../images/HtmlIcon";
import CssIcon from "../../../images/CssIcon";
import {projectsPageStore} from "../ProjectsPage";
import {observer} from "mobx-react-lite";
import {cssTag, htmlTag, reactTag} from "../consts";

const ProjectFilters = observer((props) => {
    return (
        <div className={classNames(classes.root, props.className)}>
            <CheckboxWithImage Img={ReactIcon}
                               text={reactTag}
                               checked={projectsPageStore.filters[reactTag]}
                               setChecked={checked => projectsPageStore.setFilter(reactTag, checked)}
            />
            <CheckboxWithImage Img={HtmlIcon}
                               text={htmlTag}
                               checked={projectsPageStore.filters[htmlTag]}
                               setChecked={checked => projectsPageStore.setFilter(htmlTag, checked)}
            />
            <CheckboxWithImage Img={CssIcon}
                               text={cssTag}
                               checked={projectsPageStore.filters[cssTag]}
                               setChecked={checked => projectsPageStore.setFilter(cssTag, checked)}
            />
        </div>
    );
});

export default ProjectFilters;