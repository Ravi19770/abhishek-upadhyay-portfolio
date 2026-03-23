import React from "react";
import { motion } from "framer-motion";
import { projects } from "../assets/assets";
import ProjectsCard from "./ProjectsCard";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="Projects"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-white text-3xl font-bold text-center mb-4">
          My <span className="text-purple-500">Projects</span>
        </h2>

        <p className="text-white text-center max-w-2xl mx-auto mb-16">
          A selection of my recent work
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8">
          
          {projects.map((project, index) => (
            <ProjectsCard key={index} {...project} />
          ))}

        </div>
       <div className="text-center mt-12">
  <a
    href="#"
    className="inline-flex items-center gap-2 bg-purple-500 text-white px-6 py-3 border borde-purple-500 rounded-full hover:bg-purple-600/20 transition duration-300"
  >
    <span>View More Projects</span>
    <FaArrowRight className="text-sm" />
  </a>
</div>

      </div>
    </motion.div>
  );
};

export default Projects;