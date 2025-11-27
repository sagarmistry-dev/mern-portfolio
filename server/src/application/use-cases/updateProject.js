const ProjectRepository = require("../../infrastructure/repositories/ProjectRepository");

const updateProject = async (id, data) => {
  return ProjectRepository.updateProject(id, data);
};

module.exports = updateProject;
