import React from "react";

import { motion } from "framer-motion";
import { workData } from "../assets/assets";


const Work = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            id="Work"
            className="py-20 bg-dark-100">

            <div className="container mx-auto px-6">
                <h2 className=" text-white text-3xl text-center mb-4 font-bold">Works <span className="text-purple-500">Experience</span></h2>
                <p className="text-white text-center mx-w-2xl mb-16">
                    My Professional  journey  so far
                </p>

                <div className="mx-w-3xl mx-auto">
                    <div className="space-y-12">
                        {
                            workData.map((data, index) =>(
                                <div key={index} className="timeline-item relative pl-12 before:content-['']
                                before:absolute before:left-0 before:w-[2px]
                                before:h-full before:bg-purple-500 cursor-pointer hover:-translate-y-2 
                                transition-all duration-300">
                                    <div className=" absolute left-[-0.5rem] top-0
                                    w-6 h-6 rounded-full bg-purple-500"
                                    ></div>

                                    <div className="text-white rounded-2xl p-6">
                                    <div className="flex justify-between item-start mb-2">

                                           <h3 className="text-xl font-semibold">{data.role}</h3>
                                           <span className="px-3 py-3 bg-purple-500/20 rounded-full text-xs
                                           md:text-sm">{data.duration}</span>
                                    </div>
                                    <div>
                                    <p>{data.company}</p>
                                    <p>{data.description}</p>

                                    </div>
                                    
                                    </div>


                                </div>

                            ))
                        }

                    </div>

                </div>
            </div>
        </ motion.div >

    )


}

export default Work;