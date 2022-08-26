import { makeAutoObservable } from "mobx"

class AboutPageStore {
  constructor () {
    makeAutoObservable(this);
  }

  currentFile = null;

  setCurrentFile(currentFile) {
    this.currentFile = currentFile;
  }
}

const aboutPageStore = new AboutPageStore();
window._aboutPageStore = aboutPageStore;
export default aboutPageStore;
