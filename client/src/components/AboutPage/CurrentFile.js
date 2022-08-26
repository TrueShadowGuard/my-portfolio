import React from "react"
import aboutPageStore from "./aboutPageStore"
import { observer } from "mobx-react-lite"
import classes from "./AboutPage.module.css"
import aboutPage from "./AboutPage"
import SubHeader from "../SubHeader/SubHeader"

const CurrentFile = observer(() => {
  const text = aboutPageStore.currentFile?.text
  const numeratedText = prepareText(text);

  return (
    <div>
      {aboutPageStore.currentFile?.name && <SubHeader tabName={aboutPageStore.currentFile.name} onCloseClick={closeCurrentFile}/>}
      <pre className={classes.currentFile} dangerouslySetInnerHTML={{ __html: numeratedText }}></pre>
    </div>
  )

  function prepareText(text) {
    if(!text) return null;
    return text
      .split("\n")
      .map((row, index) => indexToHtml(String(index).padStart(4, " ")) + row)
      .join("\n")
  }

  function indexToHtml (index) {
    return `<span class="${classes.index}">${index}</span>`
  }

  function closeCurrentFile() {
    aboutPageStore.setCurrentFile(null);
  }
})

export default CurrentFile
