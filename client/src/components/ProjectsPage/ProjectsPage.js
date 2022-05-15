import React from 'react';
import classes from "./ProjectsPage.module.css";
import classNames from "classnames";
import SubHeader from "../SubHeader/SubHeader";
import ProjectFilters from "./ProjectFilters/ProjectFilters";
import {makeAutoObservable} from "mobx";
import {observer} from "mobx-react-lite";
import ProjectCard from "./ProjectCard/ProjectCard";
import church from "../../images/Church.jpg";
import tanks from "../../images/Tanks.png";
import {cssTag, htmlTag, nodeTag, reactTag} from "./consts";

const ProjectsPage = observer((props) => {
    return (
        <div className={classNames(classes.root, props.className)}>
            <SubHeader header={"projects"} tabName={projectsPageStore.filtersString}/>
            <div className={classes.projectsAndFilters}>
                <ProjectFilters/>
                <Projects/>
            </div>
        </div>
    );
});

const Projects = observer(() => {
    return (
        <div className={classes.projects}>
            {projectsPageStore.filteredProjects.map(project => <ProjectCard {...project}/>)}
        </div>
    )
});

class ProjectsPageStore {
    filters = {};
    projects = [
        {
            name: "Church",
            type: "_multipage-spa",
            description: "Layout from figma and some functionality",
            image: church,
            githubUrl: "https://github.com/TrueShadowGuard/church",
            deployUrl: "https://sg-church.herokuapp.com/",
            tags: [reactTag, htmlTag, cssTag, nodeTag]
        },
        {
            name: "Tanks",
            type: "_game",
            description: "Simple version of Battle city",
            image: tanks,
            githubUrl: "https://github.com/TrueShadowGuard/tanks",
            deployUrl: "https://trueshadowguard.github.io/tanks/",
            tags: [htmlTag, cssTag]
        },
        {
            name: "Github API",
            type: "_multipage-spa",
            description: "Interface for some github API",

            githubUrl: "https://github.com/TrueShadowGuard/github",
            deployUrl: "https://github-paralect.netlify.app/",
            tags: [reactTag, htmlTag, cssTag]
        },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    setFilter(name, value) {
        this.filters[name] = value;
    }

    get filtersString() {
        const filters = Object.entries(this.filters).filter(([name, value]) => value);
        if (filters.length === 0) return "All projects"

        return filters
            .map(([name]) => name)
            .sort()
            .join("; ");
    }

    get filteredProjects() {
        const filters = Object.entries(this.filters)
            .filter(([name, value]) => value)
            .map(([name, value]) => name);
        return this.projects
            .filter(project =>
                filters.every(filter => project.tags.includes(filter))
            );
    }
}

export const projectsPageStore = new ProjectsPageStore();
window._projectsPageStore = projectsPageStore;

export default ProjectsPage;