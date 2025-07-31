import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaUser, FaCommentDots } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-20 bg-gradient-to-b from-blue-950 to-blue-800 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Get In Touch</h2>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Contact Info */}
        <div className="md:w-1/2 space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="flex items-center gap-3"><FaEnvelope className="text-purple-400" /> mlokesh2182@gmail.com</p>
            <p className="flex items-center gap-3 mt-2"><FaMapMarkerAlt className="text-purple-400" /> USA</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex gap-6">
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                <FaGithub className="text-3xl hover:text-purple-400 transition" />
              </a>
              <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-3xl hover:text-purple-400 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-blue-900 p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
          <form className="space-y-6">
            <div>
              <label className="flex items-center gap-2"><FaUser /> Name</label>
              <input type="text" className="w-full p-3 rounded bg-blue-800 text-white placeholder-gray-300 mt-1" placeholder="Your name" />
            </div>
            <div>
              <label className="flex items-center gap-2"><FaEnvelope /> Email</label>
              <input type="email" className="w-full p-3 rounded bg-blue-800 text-white placeholder-gray-300 mt-1" placeholder="Your email" />
            </div>
            <div>
              <label className="flex items-center gap-2"><FaCommentDots /> Message</label>
              <textarea rows="5" className="w-full p-3 rounded bg-blue-800 text-white placeholder-gray-300 mt-1" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="bg-purple-600 hover:bg-purple-500 transition text-white px-6 py-3 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
