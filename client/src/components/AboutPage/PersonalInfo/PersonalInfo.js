import React from "react";
import classes from "./PersonalInfo.module.css";
import Folder from "./Folder"


const testFiles = [{name: "bio", text: `/**
 * About me
 * I have 5 years of еxperience in web
 * development lorem ipsum dolor sit amet, 
 * consectetur adipiscing elit, sed do eiusmod
 * tempor incididunt ut labore et dolore
 * magna aliqua. Ut enim ad minim veniam,
 * quis nostrud exercitation ullamco laboris
 * nisi ut aliquip ex ea commodo consequat.
 * Duis aute irure dolor in reprehenderit in
 *
 * Duis aute irure dolor in reprehenderit in
 * voluptate velit esse cillum dolore eu fugiat 
 * nulla pariatur. Excepteur sint occaecat 
 * officia deserunt mollit anim id est laborum.
 */`}, {name: "hello", text: "lorem100"}];
const testFolders = [{name: "folder1", files: testFiles}, {name: "folder2", files: testFiles}]

const PersonalInfo = ({ files = testFiles }) => {
    return (
        <div className={classes.root}>
            {testFolders.map((folder, index) => (
              <Folder key={index} folder={folder}/>
            ))}
        </div>
    );
};

export default PersonalInfo;
