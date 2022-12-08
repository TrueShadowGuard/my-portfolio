import { makeAutoObservable } from "mobx"

class AboutPageStore {
  constructor () {
    makeAutoObservable(this)
  }

  currentFile = null

  folders = folders

  setCurrentFile (currentFile) {
    this.currentFile = currentFile
  }
}

const workExperience = [{
  name: "YumaSoft",
  important: true,
  text: `/**
 * From June 2022 to now
 * Developed legacy auto repair shop management software
 * Fixed bugs and developed new functionality
 * Core technologies: Backbone.js, React.js
 */`,
  minText: "From June 2022 to now. Developed legacy auto repair shop management software. Fixed bugs and developed new functionality. Core technologies: Backbone.js, React.js"
}]

const interests = [
  {
    name: "Dota 2",
    important: true
  },
  {
    name: "Math"
  }
];

const education = [
  {
    name: "School 67, Gomel",
  },
  {
    name: "Gomel State Lyceum",
  },
  {
    name: "BSMU",
    important: true
  }
]

const folders = [{
  name: "work_experience",
  files: workExperience
}, {
  name: "interests",
  files: interests,
  color: "#43D9AD"
}, {
  name: "education",
  files: education,
  color: "#3A49A4"
}]

const aboutPageStore = new AboutPageStore()
window._aboutPageStore = aboutPageStore
export default aboutPageStore
