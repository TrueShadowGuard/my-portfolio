import React from "react";
import classes from "./ProjectCard.module.css";
import classNames from "classnames";

import cardExample from "../../../../assets/cardExample.jpg";

const ProjectCard = ({name, type, description, image, deployUrl, githubUrl, ...props}) => {
    return (
        <div className={classNames(classes.root, props.className)}>
            <header className={classes.header}>
                <a href={githubUrl} target={"_blank"} rel="noreferrer">
                    <p className={classes.name}>{name}&nbsp;</p>
                </a>
                <p className={classes.type}>// {type}</p>
            </header>
            <div className={classes.card}>
                <img className={classes.bgImage} src={image || cardExample} alt=""/>
                <p className={classes.description}>
                    {description || "No description for this project"}
                </p>
                <a className={classes.viewProjectLink} href={deployUrl} target={"_blank"} rel="noreferrer">
                    <button className={classes.viewProjectButton}>view-project</button>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;