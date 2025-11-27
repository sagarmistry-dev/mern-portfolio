const ProjectModel = require("../models/ProjectModel");

const ProjectRepository = {
  createProject: async (data) => {
    const project = new ProjectModel(data);
    return project.save();
  },

  getAllProjects: async () => {
    return ProjectModel.find().sort({ createdAt: -1 });
  },

  getProjectById: async (id) => {
    return ProjectModel.findById(id);
  },

  updateProject: async (id, data) => {
    return ProjectModel.findByIdAndUpdate(id, data, { new: true });
  },

  deleteProject: async (id) => {
    return ProjectModel.findByIdAndDelete(id);
  }
};

module.exports = ProjectRepository;
