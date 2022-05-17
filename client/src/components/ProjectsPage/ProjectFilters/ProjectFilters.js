import React from 'react';
import classes from "./ProjectFilters.module.css";
import classNames from "classnames";
import CheckboxWithImage from "../CheckboxWithImage/CheckboxWithImage";
import ReactIcon from "../../../images/ReactIcon";
import HtmlIcon from "../../../images/HtmlIcon";
import CssIcon from "../../../images/CssIcon";
import {projectsPageStore} from "../ProjectsPage";
import {observer} from "mobx-react-lite";
import {cssTag, htmlTag, nodeTag, reactTag} from "../consts";
import Details from "../../Details/Details";
import DetailsHeader from "../../Details/DetailsHeader";
import NodejsIcon from "../../../images/NodejsIcon";

const ProjectFilters = observer((props) => {
    return (
        <div className={classNames(classes.root, props.className)}>
            <Details defaultOpen
                     summary={<DetailsHeader header={"projects"} />}
            >
                <div className={classes.filters}>
                    <CheckboxWithImage Img={ReactIcon}
                                       text={reactTag}
                                       checked={projectsPageStore.filters[reactTag]}
                                       setChecked={checked => projectsPageStore.setFilter(reactTag, checked)}
                    />
                    <CheckboxWithImage Img={NodejsIcon}
                                       text={nodeTag}
                                       checked={projectsPageStore.filters[nodeTag]}
                                       setChecked={checked => projectsPageStore.setFilter(nodeTag, checked)}
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
            </Details>
        </div>
    );
});

export default ProjectFilters;