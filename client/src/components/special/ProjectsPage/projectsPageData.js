import church from "../../../assets/Church.jpg";
import tanks from "../../../assets/Tanks.png";
import {makeAutoObservable} from "mobx";

export const reactTag = "React";
export const htmlTag = "HTML";
export const cssTag = "CSS";
export const nodeTag = "NodeJS";
export const angularTag = "Angular";

class ProjectsPageStore {
  filters = {};
  projects = [
    {
      name: "Church",
      type: "spa",
      description: "Layout from figma and some functionality",
      image: church,
      githubUrl: "https://github.com/TrueShadowGuard/church",
      deployUrl: null,
      tags: [reactTag, htmlTag, cssTag, nodeTag]
    },
    {
      name: "Tanks",
      type: "_game",
      description: "Simple version of Battle city",
      image: tanks,
      githubUrl: "https://github.com/TrueShadowGuard/tanks",
      deployUrl: "https://trueshadowguard.github.io/tanks/",
      tags: [htmlTag, cssTag]
    },
    {
      name: "Github API",
      type: "_spa",
      description: "Interface for some github API",
      githubUrl: "https://github.com/TrueShadowGuard/github",
      deployUrl: "https://github-paralect.netlify.app/",
      tags: [reactTag, htmlTag, cssTag]
    },
    {
      name: "Angular todos",
      type: "_spa",
      description: "TO-DO app",
      githubUrl: "https://github.com/TrueShadowGuard/angular-todos",
      deployUrl: "https://trueshadowguard.github.io/angular-todos/",
      tags: [htmlTag, cssTag, angularTag]
    }
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setFilter(name, value) {
    this.filters[name] = value;
  }

  get filtersString() {
    const filters = Object.entries(this.filters).filter(([name, value]) => value);
    if (filters.length === 0) return "All projects"

    return filters
      .map(([name]) => name)
      .sort()
      .join("; ");
  }

  get filteredProjects() {
    const filters = Object.entries(this.filters)
      .filter(([_, value]) => value)
      .map(([name, _]) => name);

    return this.projects
      .filter(project =>
        filters.every(filter => project.tags.includes(filter))
      )
      .sort((a,b) => a.tags.length > b.tags.length ? 1 : -1);
  }
}

export const projectsPageStore = new ProjectsPageStore();
window._projectsPageStore = projectsPageStore;