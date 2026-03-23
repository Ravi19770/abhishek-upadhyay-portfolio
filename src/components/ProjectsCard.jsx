import React from "react";

const ProjectsCard = ({ title, description, image, tech, icons }) => {
    return (
        <div className="bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer">

            {/* Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover"
            />

            <div className="p-5">

                {/* Title */}
                <h3 className="text-white text-lg font-semibold mb-2">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4">
                    {description}
                </p>

                {/* 🔥 Icons */}
                <div className="flex gap-3 mb-4">
                    {icons?.map((Icon, index) => (
                        <Icon
                            key={index}
                            className="text-xl text-purple-400 hover:scale-110 transition"
                        />
                    ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                    {tech?.map((item, index) => (
                        <span
                            key={index}
                            className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-md"
                        >
                            {item}
                        </span>
                    ))}
                </div>
                <div className="flex gap-2">
                    <a href="#" className=" flex-1 text-white text-center  px-6 py-2 mt-2 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300">View Demo

                    </a>
                   <a href="#" className="flex-1 text-white text-center px-6 py-2 mt-2 border border-purple-500 rounded-lg font-medium  hover:bg-purple-700 transition duration-300">Code

                        </a>

                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;