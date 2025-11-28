const ProjectTable = ({ projects, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto bg-gray-100 dark:bg-neutral-800 rounded-xl shadow-md">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-neutral-800 dark:bg-neutral-900 dark:text-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">Title</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Tech Stack</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
          {projects.map((project) => (
            <tr key={project._id} className="hover:bg-gray-700 dark:hover:bg-neutral-900 transition">
              <td className="px-6 py-4 text-gray-800 dark:text-gray-100 font-medium">
                {project.title}
              </td>
              <td className="px-6 py-4 text-gray-800 dark:text-gray-300">
                {project.techStack.join(", ")}
              </td>
              <td className="px-6 py-4 flex gap-3">
                <button
                  onClick={() => onEdit(project)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(project._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
