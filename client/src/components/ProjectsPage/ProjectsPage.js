import React from 'react';
import classes from "./ProjectsPage.module.css";
import classNames from "classnames";
import {appStore} from "../../App";
import SubHeader from "../SubHeader/SubHeader";
import ProjectFilters from "./ProjectFilters/ProjectFilters";

const ProjectsPage = (props) => {
    return (
        <div className={classNames(classes.root, props.className)}>
            <SubHeader header={"projects"} tabName={"React; Vue"}/>
            <ProjectFilters/>
        </div>
    );
};

export default ProjectsPage;