import React from "react";
import classes from "./ProjectFilters.module.css";
import classNames from "classnames";
import CheckboxWithImage from "../CheckboxWithImage/CheckboxWithImage";
import ReactIcon from "../../../svg/ReactIcon";
import HtmlIcon from "../../../svg/HtmlIcon";
import CssIcon from "../../../svg/CssIcon";
import {observer} from "mobx-react-lite";
import {angularTag, cssTag, htmlTag, nodeTag, projectsPageStore, reactTag} from "../projectsPageData";
import Details from "../../Details/Details";
import DetailsHeader from "../../Details/DetailsHeader";
import NodejsIcon from "../../../svg/NodejsIcon";
import AngularIcon from "../../../svg/AngularIcon";

const filters = [
  {img: ReactIcon, tag: reactTag},
  {img: NodejsIcon, tag: nodeTag},
  {img: AngularIcon, tag: angularTag},
  {img: HtmlIcon, tag: htmlTag},
  {img: CssIcon, tag: cssTag},
]

const ProjectFilters = observer((props) => {
  return (
    <div className={classNames(classes.root, props.className)}>
      <Details defaultOpen
               summary={<DetailsHeader header={"projects"}/>}
      >
        <div className={classes.filters}>
          {filters.map(filter => (
            <CheckboxWithImage Img={filter.img}
                               text={filter.tag}
                               checked={projectsPageStore.filters[filter.tag]}
                               setChecked={checked => projectsPageStore.setFilter(filter.tag, checked)}
            />
          ))}
        </div>
      </Details>
    </div>
  );
});

export default ProjectFilters;