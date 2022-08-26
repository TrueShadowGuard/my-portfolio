import React from "react"
import aboutPageStore from "./aboutPageStore"
import { observer } from "mobx-react-lite"
import classes from "./AboutPage.module.css"
import aboutPage from "./AboutPage"


const CurrentFile = observer(() => {

  if (!aboutPageStore?.currentFile?.text) return null;


  const text = aboutPageStore.currentFile.text;
  const numeratedText = text.split("\n").map((row, index) => String(index).padStart(4, " ") + " " + row).join("\n");

  return (
    <pre className={classes.currentFile}>
        {numeratedText}
    </pre>
  )
})

export default CurrentFile
