export default function SkillsSection() {
  return (
    <section id="skills" className="mb-20">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Technical Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
          <ul className="space-y-4">
            {['Flutter', 'Dart', 'Next.js', 'React', 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB', 'Firebase', 'Python', 'Pygame', 'AI (Minimax algorithm)'].map(skill => (
              <li key={skill} className="flex items-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
          <ul className="space-y-4">
            {['Problem-solving', 'Project management', 'Critical thinking'].map(skill => (
              <li key={skill} className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-2 font-medium">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
