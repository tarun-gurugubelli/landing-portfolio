"use client"
import { Github, Linkedin, Mail, X } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null

  const handleConnect = (platform: string) => {
    let url = ""

    switch (platform) {
      case "github":
        url = "https://github.com/tarun-gurugubelli" // Replace with your actual GitHub URL
        break
      case "linkedin":
        url = "https://linkedin.com/in/tarun-gurugubelli" // Replace with your actual LinkedIn URL
        break
      case "email":
        url =
          "mailto:tarun.gurugubelli@example.com?subject=Let's Connect&body=Hi, I'd like to discuss potential collaboration opportunities." // Replace with your actual email
        break
    }

    if (url) {
      window.open(url, "_blank")
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 dark:bg-white/10 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Let's Connect</h3>
          <p className="text-gray-600 dark:text-gray-400">Choose your preferred way to get in touch</p>
        </div>

        {/* Connection Options */}
        <div className="space-y-4">
          {/* GitHub */}
          <button
            onClick={() => handleConnect("github")}
            className="w-full flex items-center p-4 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg hover:border-black dark:hover:border-white transition-all duration-300 group"
          >
            <div className="p-2 bg-black dark:bg-white rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
              <Github className="w-6 h-6 text-white dark:text-black" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-black dark:text-white">GitHub</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">View my code and projects</p>
            </div>
          </button>

          {/* LinkedIn */}
          <button
            onClick={() => handleConnect("linkedin")}
            className="w-full flex items-center p-4 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg hover:border-black dark:hover:border-white transition-all duration-300 group"
          >
            <div className="p-2 bg-black dark:bg-white rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
              <Linkedin className="w-6 h-6 text-white dark:text-black" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-black dark:text-white">LinkedIn</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Professional networking</p>
            </div>
          </button>

          {/* Email */}
          <button
            onClick={() => handleConnect("email")}
            className="w-full flex items-center p-4 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg hover:border-black dark:hover:border-white transition-all duration-300 group"
          >
            <div className="p-2 bg-black dark:bg-white rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6 text-white dark:text-black" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-black dark:text-white">Email</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Direct communication</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
