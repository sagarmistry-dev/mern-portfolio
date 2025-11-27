const ProjectRepository = require("../../infrastructure/repositories/ProjectRepository");

const getProjectById = async (id) => {
  return ProjectRepository.getProjectById(id);
};

module.exports = getProjectById;
