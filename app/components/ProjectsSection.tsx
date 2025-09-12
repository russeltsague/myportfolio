export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-20">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Projects</h2>
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Cameroun Basketball League Website */}
        <article className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-2">Cameroun Basketball League Website</h3>
          <p className="mb-4">
            Full-stack web app for league management. Technologies: Next.js, Node.js, MongoDB, Tailwind CSS. Features: Team management, match schedules, live scores.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            {['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'].map(tech => (
              <span key={tech} className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
          {/* Placeholder for screenshot */}
          <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
            Screenshot
          </div>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-blue-600 hover:underline">GitHub</a>
            <a href="#" className="text-blue-600 hover:underline">Live Demo</a>
          </div>
        </article>

        {/* MboaLearn Educational App */}
        <article className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-2">MboaLearn Educational App</h3>
          <p className="mb-4">
            AI-powered learning app for secondary/high school students. Technologies: Flutter, Python, AI integration. Features: Personalized learning paths, quizzes, progress tracking.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            {['Flutter', 'Python', 'AI'].map(tech => (
              <span key={tech} className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
          {/* Placeholder for app screenshots */}
          <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
            App Screenshots
          </div>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-blue-600 hover:underline">GitHub</a>
            <a href="#" className="text-blue-600 hover:underline">App Store / Play Store</a>
          </div>
        </article>

        {/* LAN Chess Game with AI */}
        <article className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold mb-2">LAN Chess Game with AI</h3>
          <p className="mb-4">
            Python game with LAN multiplayer and AI opponent using Minimax algorithm. Technologies: Python, Pygame, AI. Features: LAN connectivity, smart AI opponent, intuitive UI.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            {['Python', 'Pygame', 'AI'].map(tech => (
              <span key={tech} className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
          {/* Placeholder for gameplay screenshots or GIF */}
          <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
            Gameplay Screenshot / GIF
          </div>
          <div className="mt-4">
            <a href="#" className="text-blue-600 hover:underline">GitHub</a>
          </div>
        </article>
      </div>
    </section>
  )
}
