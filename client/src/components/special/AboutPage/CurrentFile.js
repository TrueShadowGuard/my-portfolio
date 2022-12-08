import React from "react"
import aboutPageStore from "./aboutPageStore"
import {observer} from "mobx-react-lite"
import classes from "./AboutPage.module.css"
import SubHeader from "../SubHeader/SubHeader"
import {useWindowSize} from "usehooks-ts";

const CurrentFile = observer(() => {
  const text = aboutPageStore.currentFile?.text
  const numeratedText = prepareText(text);
  const {width} = useWindowSize();

  return (
    <div className={classes.currentFile}>
      {width < 1100 ? <MinFile /> : <File />}
    </div>
  );

  function prepareText(text) {
    if (!text) return null;
    return text
      .split("\n")
      .map((row, index) => indexToHtml(String(index).padStart(4, " ")) + row)
      .join("\n")
  }

  function indexToHtml(index) {
    return `<span class="${classes.index}">${index}</span>`
  }

  function closeCurrentFile() {
    aboutPageStore.setCurrentFile(null);
  }

  function MinFile() {
    return <div>{aboutPageStore.currentFile?.minText}</div>
  }

  function File() {
    return (
      <div>
        {aboutPageStore.currentFile?.name && <SubHeader tabName={aboutPageStore.currentFile.name} onCloseClick={closeCurrentFile}/>}
        <pre className={classes.currentFile} dangerouslySetInnerHTML={{__html: numeratedText}}></pre>
      </div>
    );
  }
});

export default CurrentFile
