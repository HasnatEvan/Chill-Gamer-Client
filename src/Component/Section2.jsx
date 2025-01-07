import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Section2 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // এখানে আপনি ডাটা সাবমিট করার জন্য API কল বা অন্য কোন লজিক রাখতে পারেন
        alert('Form submitted!');
    };

    return (
        <section className="pb-5 bg-black">
            <h2 className="text-3xl font-semibold text-[#00ffcc] text-center mb-8">𝑪𝒐𝒏𝒕𝒂𝒄𝒕 𝑼𝒔</h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-300 p-8 rounded-lg shadow-lg">
                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter your name"
                        required
                    />
                </motion.div>

                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter your email"
                        required
                    />
                </motion.div>

                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <label htmlFor="message" className="block text-lg font-medium text-gray-700">Your Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter your message"
                        rows="5"
                        required
                    />
                </motion.div>

                <div className="flex justify-center">
                    <motion.button
                        type="submit"
                        className=" bg-gradient-to-r from-[#00ffcc] to-[#00b3b3] text-white py-2 px-6 rounded-lg hover:bg-indigo-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Submit
                    </motion.button>
                </div>
            </form>
        </section>
    );
};

export default Section2;
