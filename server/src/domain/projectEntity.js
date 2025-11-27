class ProjectEntity {
  constructor({ title, description, image, github, techStack = [] }) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.github = github;
    this.techStack = techStack;
  }
}

module.exports = ProjectEntity;
