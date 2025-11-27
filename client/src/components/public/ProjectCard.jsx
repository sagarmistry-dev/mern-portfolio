const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          <strong>Tech Stack:</strong> {project.techStack.join(", ")}
        </p>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
