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
      className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-800 mb-4">
        {initialData ? "Edit Project" : "Add Project"}
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-800 mb-1">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-300"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-800 mb-1">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          className="w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-300"
        ></textarea>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-800 mb-1">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-800 mb-1">
            GitHub Link
          </label>
          <input
            type="text"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-300"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-800 mb-1">
          Tech Stack (comma separated)
        </label>
        <input
          type="text"
          name="techStack"
          value={formData.techStack.join(",")}
          onChange={handleChange}
          className="w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-300"
        />
      </div>

      <div className="flex justify-end mt-4">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
