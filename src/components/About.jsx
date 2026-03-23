import React from "react";
import { motion } from "framer-motion";
import profile from '../assets/profile.avif';
import { aboutInfo } from "../assets/assets";

const About = () => {

    return (

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id="About"
            className="py-20 bg-dark-200"
        >
            <div className="container mx-0 px-6">
                {/* Heading*/}
                <h2 className=" text-white text-3xl font-bold text-center mb-4">About <span className="text-purple-500">me</span></h2>
                <p className="text-white text-center max-w-2xl mx-auto mb-16">
                    Get to know About my background and passion
                </p>
                <div className="flex flex-col md:flex-row items-start gap-12">

                    {/* IMAGE */}
                    <div className="md:w-1/2 rounded-2xl overflow-hidden">
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="w-full h-full"
                            src={profile}
                            alt="profile"
                        />
                    </div>

                    {/* TEXT (RIGHT SIDE) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="md:w-1/2"
                    >
                        <div className="rounded-2xl p-8">
                            <h3 className="text-white font-semibold mb-6">
                                My journey
                            </h3>

                            <p className="text-white mb-6">
                                I' m a passionate full-stack developer with
                                over 1+ years of experience creating digital
                                solution for business around the world.
                                My journey started with basic HTML/CSS website and
                                has evolved into building complex web
                                application with modern framework.
                            </p>

                            <p className="text-white mb-12">
                                My journey started with basic HTML/CSS and evolved into modern web applications.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {
                                    aboutInfo.map((data, index) => (
                                        <div
                                            key={index}
                                            className="bg-dark-300 rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-2 text-white"
                                        >

                                            {/* ICON */}
                                            <div className="text-purple-500 text-3xl mb-3">
                                                <data.icon />
                                            </div>

                                            {/* CONTENT */}
                                            <div>
                                                <h3 className="text-lg font-semibold mb-2">
                                                    {data.title}
                                                </h3>
                                                <p className="text-sm text-gray-300 leading-relaxed">
                                                    {data.description}
                                                </p>
                                            </div>

                                        </div>
                                    ))


                                }
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>

        </motion.div>
    )


}
export default About;