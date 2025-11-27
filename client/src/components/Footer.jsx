const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-400 py-6 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-blue-600">Sagar Mistry</span>. 
        All rights reserved.
      </p>
      <p className="mt-2 text-xs">
        Built with <span className="text-blue-500 font-medium">React</span> &{" "}
        <span className="text-teal-400 font-medium">TailwindCSS</span>.
      </p>
    </footer>
  );
};

export default Footer;
