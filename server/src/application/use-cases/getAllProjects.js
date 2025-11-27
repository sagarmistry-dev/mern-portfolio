const ProjectRepository = require("../../infrastructure/repositories/ProjectRepository");

const getAllProjects = async () => {
  return ProjectRepository.getAllProjects();
};

module.exports = getAllProjects;
