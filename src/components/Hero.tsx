export default function Hero() {
  return (
    <section className="pt-8 pb-4">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 p-8 sm:p-12">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-[96px]" />
        </div>

        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Active Clinical Trials — 2024–2026
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Neuralink Clinical Trials
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Documentation & Analysis
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-6">
            A comprehensive documentation of Neuralink's brain-computer interface clinical trials,
            including the speech restoration trials in the UAE and Dallas, TX — performed on the
            speech cortex of the brain. Covering trial locations, FDA regulatory history,
            ethical concerns, and the technology involved.
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-blue-400">📍</span> 7 Trial Sites
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-purple-400">🌍</span> 4 Countries
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-green-400">👥</span> 27+ Patients
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-amber-400">⚠️</span> Not FDA Approved
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
