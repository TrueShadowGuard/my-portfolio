import React from "react"
import aboutPageStore from "./aboutPageStore"
import { observer } from "mobx-react-lite"
import classes from "./AboutPage.module.css"
import aboutPage from "./AboutPage"


const CurrentFile = observer(() => {

  if (!aboutPageStore?.currentFile?.text) return null;


  const text = aboutPageStore.currentFile.text;
  const numeratedText = text.split("\n").map((row, index) => indexToHtml(String(index).padStart(4, " ")) + row).join("\n");

  return (
    <pre className={classes.currentFile} dangerouslySetInnerHTML={{__html: numeratedText}}></pre>
  )

  function indexToHtml(index) {
    return `<span class="${classes.index}">${index}</span>`
  }
})

export default CurrentFile
