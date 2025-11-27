const ProjectRepository = require("../../infrastructure/repositories/ProjectRepository");

const deleteProject = async (id) => {
  return ProjectRepository.deleteProject(id);
};

module.exports = deleteProject;
