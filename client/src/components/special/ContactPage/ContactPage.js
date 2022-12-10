import React, { useState } from "react"
import ReactDOM from "react-dom"
import classes from "./ContactPage.module.css"
import TextField from "../../ui/TextField/TextField"
import CodeEditor from "@uiw/react-textarea-code-editor"
import ReactConfetti from "react-confetti"

const defaultCode = (
`const $form = document.querySelector('#contact-form');

runConfetti();

const response = fetch("/contact-me", {
  method: "POST",
  body: new FormData($form),
});

response.then(response => response.ok && runConfetti());`
);


const ContactPage = () => {

  const [code, setCode] = useState(defaultCode)

  const [confetti, setConfetti] = useState(false);

  return (
    <div className={classes.root}>
      {confetti && ReactDOM.createPortal(
        <ReactConfetti style={{zIndex: 20}}
                       width={window.innerWidth}
                       height={window.innerHeight}
                       recycle={false}
                       onConfettiComplete={() => setConfetti(false)}/>,
        document.body
      )}
      <div className={classes.formColumn}>
        <form className={classes.form} onSubmit={handleSubmit} id={"contact-form"}>
          <TextField className={classes.textField} label={"_name"} name={"name"}/>
          <TextField className={classes.textField} label={"_email"} type={"email"} name={"email"}/>
          <TextField className={classes.textField} label={"_message"} as={"textarea"} name={"message"}/>
          <button className={classes.submitButton}>submit-message</button>
        </form>
      </div>

      <div className={classes.codeColumn}>
        <div className={classes.code}>
          <CodeEditor
            tabIndex={-1}
            value={code}
            onChange={e => setCode(e.target.value)}
            language="js"
            placeholder="Please enter JS code."
            padding={15}
            style={{
              fontSize: 18,
              backgroundColor: "transparent",
              fontFamily: 'Fira Code, ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />
        </div>
        {code !== defaultCode && <button className={classes.resetButton} onClick={resetCode}>Reset</button>}
      </div>

    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();
    eval(code)
  }

  function runConfetti() {
    setConfetti(true);
  }

  function resetCode() {
    setCode(defaultCode);
  }
}

export default ContactPage
