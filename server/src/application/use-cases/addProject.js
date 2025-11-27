const ProjectEntity = require("../../domain/projectEntity");
const ProjectRepository = require("../../infrastructure/repositories/ProjectRepository");

const addProject = async (data) => {
  const projectEntity = new ProjectEntity(data);
  return ProjectRepository.createProject(projectEntity);
};

module.exports = addProject;
