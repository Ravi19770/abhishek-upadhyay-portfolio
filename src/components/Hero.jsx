import React from "react";
import { motion } from "framer-motion";
import profile from '../assets/profile.Abhi.jpeg';


const Hero = () => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id="home"
            className="min-h-screen flex item-center pt-20 pb-16 bg-gradiand-to-r from-[#1a1a1a] via-[#2d2d2d] to-[1a1a1a]"

        >
            {/* left side container */}

            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                        Hi, I'm <span className="text-purple-500">Abhishek Upadhyay</span>
                    </h1>
                    <h2 className="text-white text-2xl md:text-4xl font-semibold mb-6 typewriter">
                        Full Stack Developer
                    </h2>
                    <p className=" text-lg text-white mb-8">
                        I create stunning web experience with modern technologies
                        and innovation design.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#projects" className=" text-white px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300">View work

                        </a>

                        <a href="#Contact" className=" text-white px-6 py-3 border border-purple-500 rounded-lg font-medium  hover:bg-purple-700 transition duration-300">Contact

                        </a>

                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-7 rounded-full
                        bg-gradient-to-r from-purple-500 to-pink animate-pluse-slow opacity-70">

                            <motion.img 
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration:4,
                                repeat: Infinity,
                                repeatType:"loop",
                                ease: "easeInOut"
                            }}
                            className="relative rounded-full w-64 h-64 md:w-80 md:w-h-80 object-cover z-10 animate-float"
                            src={profile} alt="profile" />
                        </div>

                    </div>

                </div>

            </div>
        </motion.div>
    )

}
export default Hero;