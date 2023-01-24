import React from "react";
import classes from "./ProjectsPage.module.css";
import classNames from "classnames";
import SubHeader from "../SubHeader/SubHeader";
import ProjectFilters from "./ProjectFilters/ProjectFilters";
import {makeAutoObservable} from "mobx";
import {observer} from "mobx-react-lite";
import ProjectCard from "./ProjectCard/ProjectCard";
import church from "../../../assets/Church.jpg";
import tanks from "../../../assets/Tanks.png";
import {cssTag, htmlTag, nodeTag, projectsPageStore, reactTag} from "./projectsPageData";
import {useWindowSize} from "usehooks-ts";

const ProjectsPage = observer((props) => {
    return (
        <div className={classNames(classes.root, props.className)}>
            <div className={classes.twoColumns}>
                <ProjectFilters/>
                <Projects/>
            </div>
        </div>
    );
});

const Projects = observer(() => {

    const {width} = useWindowSize();

    return (
        <div className={classes.projectsColumn}>
            {width >= 665 && <SubHeader tabName={projectsPageStore.filtersString}/>}
            <div className={classes.projects}>
                {projectsPageStore.filteredProjects.map(project => <ProjectCard {...project}/>)}
            </div>
        </div>
    )
});

export default ProjectsPage;
