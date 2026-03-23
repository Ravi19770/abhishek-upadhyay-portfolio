import React from "react";

import { motion } from "framer-motion";

import { skills } from "../assets/assets";
const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            id="Skills"
            className="py-20 bg-dark-100"
        >
            <div className="container mx-auto px-6">

                <h2 className="text-white text-3xl font-bold text-center mb-4">
                    My <span className="text-purple-500">Skills</span>
                </h2>

                <p className="text-white text-center max-w-2xl mx-auto mb-16">
                    Technologies I work with to bring ideas to life
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;

                        return (
                            <div
                                key={index}
                                className="bg-dark-300 rounded-2xl p-5 hover:-translate-y-2 transition duration-300 cursor-pointer text-white"
                            >
                                <div>
                                    <Icon className="text-3xl text-purple-500 mb-3" />

                                    <h3 className="text-lg font-semibold mb-2">
                                        {skill.title}
                                    </h3>

                                    <p className="text-sm text-gray-300">
                                        {skill.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {skill.tags.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-md mr-2"
                                            >
                                                {tech}
                                            </span>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </motion.div>
    );
};

export default Skills;