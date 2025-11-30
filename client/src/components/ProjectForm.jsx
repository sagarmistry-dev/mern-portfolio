import { useState } from "react";

const ProjectForm = ({ onSave, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || {
      title: "",
      description: "",
      image: "",
      github: "",
      techStack: [],
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "techStack") {
      setFormData({ ...formData, techStack: value.split(",") });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-xl space-y-5 transition-colors duration-300"
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {initialData ? "Edit Project" : "Add Project"}
      </h2>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-400 dark:border-gray-700 bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          className="w-full rounded-md border border-gray-400 dark:border-gray-700 bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        ></textarea>
      </div>

      {/* Image + GitHub */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-400 dark:border-gray-700 bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
            GitHub Link
          </label>
          <input
            type="text"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-400 dark:border-gray-700 bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
          Tech Stack (comma separated)
        </label>
        <input
          type="text"
          name="techStack"
          value={formData.techStack.join(",")}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-400 dark:border-gray-700 bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
