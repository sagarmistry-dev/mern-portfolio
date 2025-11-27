const addProject = require("../../application/use-cases/addProject");
const getAllProjects = require("../../application/use-cases/getAllProjects");
const getProjectById = require("../../application/use-cases/getProjectById");
const updateProject = require("../../application/use-cases/updateProject");
const deleteProject = require("../../application/use-cases/deleteProject");

const projectController = {

  // Create Project
  create: async (req, res) => {
    try {
      const result = await addProject(req.body);
      return res.status(201).json({ message: "Project added successfully", result });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // Get All Projects (Public)
  getAll: async (req, res) => {
    try {
      const projects = await getAllProjects();
      return res.status(200).json(projects);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // Get Single Project (Public)
  getOne: async (req, res) => {
    try {
      const project = await getProjectById(req.params.id);
      return res.status(200).json(project);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  },

  // Update Project (Admin Only)
  update: async (req, res) => {
    try {
      const updated = await updateProject(req.params.id, req.body);
      return res.status(200).json(updated);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // Delete Project (Admin Only)
  delete: async (req, res) => {
    try {
      const deleted = await deleteProject(req.params.id);
      return res.status(200).json({ message: "Project deleted", deleted });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

};

module.exports = projectController;
