export default function ExamCard({ session }) {
  const datetime = session.datetime.split("T");
  const date = datetime[0];
  const time = datetime[1].slice(0, 8);

  //TODO: update display of schedule details
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden border border-slate-700">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{session.title}</h3>
        </div>
        <div className="flex mb-5 justify-between">
          <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-md text-sm font-medium border border-blue-500/30">
            {session.language}
          </span>
          <span className="inline-block items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/30">
            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
            {session.status}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
            <div className="text-slate-400">
              <p className="text-xs uppercase tracking-wide mb-1 text-left">
                Date
              </p>
              <p className="text-white font-semibold">{date}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
            <div className="text-slate-400">
              <p className="text-xs uppercase tracking-wide mb-1 text-left">
                Time
              </p>
              <p className="text-white font-semibold">{time}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700 md:col-span-2">
            <div className="text-slate-400">
              <p className="text-xs uppercase tracking-wide mb-1 text-left">
                Location
              </p>
              <p className="text-white font-semibold">{session.country}</p>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-slate-700">
          <p className="text-xs text-slate-400 uppercase tracking-wide mb-3 text-left">
            Candidates
          </p>
          <div className="flex flex-wrap gap-2">
            {session.candidates.map((candidate) => (
              <span
                key={candidate.id}
                className="px-3 py-1.5 bg-slate-700/70 text-slate-200 rounded-md text-sm border border-slate-600 hover:bg-slate-700 transition-colors"
              >
                {candidate.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
