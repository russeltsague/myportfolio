export default function AchievementsSection() {
  return (
    <section id="achievements" className="mb-20">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Achievements</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Certified Flutter Developer</h3>
          <p className="text-gray-700">Completed official Flutter certification demonstrating proficiency in mobile app development.</p>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">AI in Education Workshop</h3>
          <p className="text-gray-700">Participated in a workshop focused on integrating AI technologies in educational tools.</p>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Open Source Contributor</h3>
          <p className="text-gray-700">Contributed to multiple open source projects related to web and game development.</p>
        </div>
      </div>
    </section>
  )
}
