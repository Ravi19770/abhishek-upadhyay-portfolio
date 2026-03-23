import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGoogle, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FaGithub, FaTwitter } from "react-icons/fa6";


const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            id="Contact"
            className="py-20 bg-dark-100"
        >
            <div className="container mx-auto px-6">

                <h2 className="text-white text-3xl font-bold text-center mb-4">
                    Get In <span className="text-purple-500">touch</span></h2>
                <h3 className="text-white text-center">Have a project in mind let's talk! </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 
                max-w-5xl mx-auto">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="Name" className="block text-white mb-2">Your Name

                            </label>
                            <input type="text" className=" w-full bg-dark-300 border border-dark-300 rounden-lg
                               px-4 py-2 outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="Email Address" className="block text-white mb-2">Email Address

                            </label>
                            <input type="text" className=" w-full bg-dark-300 border border-dark-300 rounden-lg
                               px-4 py-2 outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="Your Message" className="block text-white mb-2">Your Message

                            </label>
                            <input type="text" className="w-full h-40 bg-dark-300 border border-dark-300 rounden-lg
                               px-4 py-2 outline-none"
                            />
                        </div>
                        <botton type="Submit" className="text-white w-full px-6 py-3 bg-purple-500 
                        rounded-lg font-medium hover:bg-purple-700 transition duration-300"
                        >Send Massage</botton>

                    </form>

                    <div className="space-y-8">
                        <div className="flext-itme-start">
                            <div className="text-purple-500 text-2xl mr-4">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className="text-white">
                                    Location
                                </h3>
                                <p className="text-white">Noida, sector18</p>
                            </div>


                        </div>
                        <div className="flext-itme-start">
                            <div className="text-purple-500 text-2xl mr-4">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className="text-white">
                                    Email
                                </h3>
                                <p className="text-white"></p>
                            </div>


                        </div>

                        <div className="flext-itme-start">
                            <div className="text-purple-500 text-2xl mr-4">
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className="text-white">
                                    Contact
                                </h3>
                                <p className="text-white">+91 7753088595</p>
                            </div>


                        <div className="pt-4">
  <h3 className="text-white text-lg font-semibold mb-4">
    Follow Me
  </h3>

  <div className="flex gap-4">
    
    <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple-300 hover:bg-purple-500 hover:text-white transition duration-300">
      <FaGithub />
    </a>

    <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple-300 hover:bg-purple-500 hover:text-white transition duration-300">
      <FaLinkedin />
    </a>

    <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple-300 hover:bg-purple-500 hover:text-white transition duration-300">
      <FaTwitter />
    </a>

    <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple-300 hover:bg-purple-500 hover:text-white transition duration-300">
      <FaGoogle />
    </a>

  </div>
</div>

                        </div>
                    </div>

                </div>
            </div>

        </motion.div>

    )


}

export default Contact;