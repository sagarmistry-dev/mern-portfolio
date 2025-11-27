import TableSkeleton from "../components/TableSkeleton";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import {
  getAllProjectsApi,
  createProjectApi,
  updateProjectApi,
  deleteProjectApi,
} from "../api/projectApi";
import ProjectTable from "../components/ProjectTable";
import ProjectForm from "../components/ProjectForm";
import Modal from "../components/Modal";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal"; // ✅ Import new modal

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  // ✅ Fetch all projects
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const { status, data } = await getAllProjectsApi();
      if (status === 200) setProjects(data);
    } catch (err) {
      toast.error("Failed to fetch projects. Please try again.");
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    fetchProjects();
  }, []);

  // ✅ Add new project modal
  const handleAddNew = () => {
    setEditData(null);
    setIsModalOpen(true);
  };

  // ✅ Edit existing project
  const handleEdit = (project) => {
    setEditData(project);
    setIsModalOpen(true);
  };

  // ✅ Save (create/update)
  const handleSave = async (formData) => {
    try {
      let response;
      if (editData) {
        response = await updateProjectApi(editData._id, formData);
      } else {
        response = await createProjectApi(formData);
      }

      if (response.status === 200 || response.status === 201) {
        await fetchProjects();
        setIsModalOpen(false);
        toast.success(
          editData
            ? "Project updated successfully!"
            : "Project added successfully!"
        );
      } else {
        toast.error("Failed to save project. Please try again.");
      }
    } catch (err) {
      toast.error("An unexpected error occurred.");
    }
  };

  // ✅ Delete confirmation
  const handleDelete = (id) => {
    setDeleteId(id);
  };

  // ✅ Confirm delete
  const confirmDelete = async () => {
    try {
      if (deleteId) {
        const { status } = await deleteProjectApi(deleteId);
        if (status === 200) {
          await fetchProjects();
          toast.success("Project deleted successfully!");
        } else {
          toast.error("Error deleting project.");
        }
      }
    } catch (err) {
      toast.error("Network error. Please try again.");
    } finally {
      setDeleteId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Admin Dashboard
          </h1>
          <button
            onClick={handleAddNew}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md shadow-sm transition"
          >
            + Add New Project
          </button>
        </div>

        {loading ? (
         <TableSkeleton />
          ) : (
          <ProjectTable
          projects={projects}
          onEdit={handleEdit}
          onDelete={handleDelete}
          />
        )}


        {/* ✅ Modal for Add/Edit */}
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <ProjectForm onSave={handleSave} initialData={editData} />
          </Modal>
        )}

        {/* ✅ Delete confirmation modal */}
        {deleteId && (
          <ConfirmDeleteModal
            onClose={() => setDeleteId(null)}
            onConfirm={confirmDelete}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
