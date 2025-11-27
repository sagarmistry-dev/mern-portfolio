import { useEffect, useState } from "react";
import { getAllProjectsApi } from "../../api/projectApi";
import ProjectCard from "../../components/public/ProjectCard";
import DeveloperSpotlight from "../../components/DeveloperSpotlight";
import AboutMe from "../../components/AboutMe";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";

const PublicPortfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { status, data } = await getAllProjectsApi();
      if (status === 200) setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <p className="text-gray-400 text-lg animate-pulse">
          Loading portfolio...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white scroll-smooth">
      {/* 🏠 Home Section */}
      <section
        id="home"
        className="h-[calc(100vh-4rem)] flex items-center justify-center w-full relative scroll-mt-16"
      >
        <DeveloperSpotlight />
      </section>

      {/* 👨‍💻 About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center w-full border-t border-white/10"
      >
        <AboutMe />
      </section>

      {/* 🚀 Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center w-full px-6 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-white">
            Featured Projects
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 6).map((p) => (
              <ProjectCard key={p._id} project={p} />
            ))}
          </div>

          {projects.length > 6 && (
            <div className="flex justify-center mt-12">
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
              >
                View All Projects
              </a>
            </div>
          )}
        </div>
      </section>

      {/* 📬 Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center w-full border-t border-white/10"
      >
        <ContactSection />
      </section>

      {/* ⚙️ Footer */}
      <Footer />
    </div>
  );
};

export default PublicPortfolio;
