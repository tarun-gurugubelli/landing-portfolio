"use client"

import { ArrowRight, Code, Server, Github, Linkedin, Mail, User, Award, Target } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

export default function Component() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0, 0, 0, 0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(0, 0, 0, 0.1) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 py-6 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-black dark:text-white transition-colors duration-300">
            Tarun's Portfolio Hub
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/tarun-gurugubelli"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/tarun-gurugubelli"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:tarungurugubelli@outlook.com"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="flex items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-16 animate-fade-in">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6 leading-tight transition-colors duration-300">
                Choose Your
                <span className="block text-gray-600 dark:text-gray-400 transition-colors duration-300">Journey</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
                Explore my expertise in full-stack development and DevOps engineering. Select your area of interest to
                dive deeper into my work.
              </p>
            </div>

            {/* Portfolio Options */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* MEAN Stack Portfolio */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-black dark:bg-white rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500"></div>
                <Link href="https://mean.tarungurugubelli.com" target='_blank' className="relative block">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 sm:p-10 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-black dark:bg-white rounded-full">
                        <Code className="w-12 h-12 text-white dark:text-black" />
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-black dark:text-white mb-4 transition-colors duration-300">
                      MEAN Stack
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                      Full-stack web development with MongoDB, Express.js, Angular, and Node.js. Explore my dynamic web
                      applications and modern frontend solutions.
                    </p>
                    <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                      <span className="font-semibold mr-2">View Portfolio</span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </div>

              {/* DevOps Portfolio */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-black dark:bg-white rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500"></div>
                <Link href="https://devops.tarungurugubelli.com" target="_blank" className="relative block">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 sm:p-10 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-black dark:bg-white rounded-full">
                        <Server className="w-12 h-12 text-white dark:text-black" />
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-black dark:text-white mb-4 transition-colors duration-300">
                      DevOps
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                      Infrastructure automation, CI/CD pipelines, and cloud solutions. Discover my expertise in
                      deployment, monitoring, and system optimization.
                    </p>
                    <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                      <span className="font-semibold mr-2">View Portfolio</span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6 transition-colors duration-300">
                About Me
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                Passionate developer with expertise spanning full-stack development and DevOps engineering, dedicated to
                creating robust, scalable solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Experience */}
              <div className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-black dark:bg-white rounded-full group-hover:scale-110 transition-transform duration-300">
                    <User className="w-8 h-8 text-white dark:text-black" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 transition-colors duration-300">
                  Experience
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  3+ years of hands-on experience in developing scalable web applications and managing cloud
                  infrastructure across various industries and project scales.
                </p>
              </div>

              {/* Skills */}
              <div className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-black dark:bg-white rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white dark:text-black" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 transition-colors duration-300">
                  Skills
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  Proficient in modern web technologies, cloud platforms, containerization, CI/CD pipelines, and
                  infrastructure as code with a focus on best practices.
                </p>
              </div>

              {/* Mission */}
              <div className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-black dark:bg-white rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white dark:text-black" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4 transition-colors duration-300">
                  Mission
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  Committed to delivering high-quality solutions that drive business growth while maintaining code
                  excellence and operational efficiency.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-300">
                Ready to collaborate? Let's build something amazing together.
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
            © {new Date().getFullYear()} Tarun's Portfolio Hub. Crafted with passion.
          </p>
        </div>
      </footer>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
