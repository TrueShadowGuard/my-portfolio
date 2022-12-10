import { makeAutoObservable } from "mobx"

class AboutPageStore {
  constructor () {
    makeAutoObservable(this);
    this.currentFile = files.find(file => file.name === "index");
  }

  currentFile = null

  folders = folders
  files = files;

  setCurrentFile (currentFile) {
    this.currentFile = currentFile;
  }
}

const workExperience = [{
  name: "YumaSoft",
  text: `From June 2022 to now
Developed legacy auto repair shop management software
Fixed bugs and developed new functionality
Core technologies: Backbone.js, React.js`,
}]

const interests = [
  {
    name: "Dota 2",
    text: "Sometimes I let myself play Dota with my friends"
  },
  {
    name: "Chemistry",
    text: "I love chemistry and sometimes I study it.\n" +
      "In the past, successfully participated in the Olympiads on it.\n" +
      "Took a prize-winning place in the Olympiad of the state level"
  }
];

const education = [
  {
    name: "School 67, Gomel",
  },
  {
    name: "Gomel State Lyceum",
    text: `Like `
  },
  {
    name: "BSMU",
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
}];

const files = [{
  name: "index",
  text: `Having a high level of javascript proficiency, I can easily solve the tasks.
I like to help colleagues at work, as well as automate my daily activities.
Russian level - native, English level - Intermediate

Core technologies: HTML, CSS, JavaScript, react, node, mobx, redux
Also familiar with: SQL, docker, mongo, ruby`
}];

const aboutPageStore = new AboutPageStore()
window._aboutPageStore = aboutPageStore
export default aboutPageStore
