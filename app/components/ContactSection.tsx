export default function ContactSection() {
  return (
    <section id="contact" className="mb-20">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Contact</h2>
      <div className="max-w-md mx-auto text-center">
        <p className="mb-6">Let's build something amazing together! Reach out via email, LinkedIn, or GitHub.</p>
        <div className="space-y-4">
          <a href="mailto:your.email@example.com" className="block text-blue-600 hover:underline">your.email@example.com</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">LinkedIn</a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline">GitHub</a>
        </div>
      </div>
    </section>
  )
}
