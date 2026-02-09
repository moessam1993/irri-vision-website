import { useEffect } from "react";

const LimitedEarlyAccess = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-white overflow-x-hidden font-inter">
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 sm:p-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#195769] mb-4">
              Limited Early Access
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              AI-powered ophthalmology tools built by ophthalmologists, for real clinical workflows.
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We’re opening a time-limited early access list for doctors and hospitals interested in next-generation retinal AI, ophthalmology EMR, and remote diagnostics.
            </p>
            <div className="mb-6 p-4 bg-gradient-to-r from-[#FFF3E0] to-[#FFE4CC] border-l-4 border-[#B45309] rounded-r-lg">
              <p className="text-[#B45309] font-semibold">
                ⏳ Registration closes in 48 hours. Early access is limited, so if you are an ophthalmologist or your speciality is related to ophthalmology, such as neonatologists who are dealing with ROP cases, join us now!
              </p>
            </div>
            <a
              href="https://forms.gle/uzHhvC3HYue4SCUv8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-[#195769] to-[#144552] text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              Request Early Access
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
            <div className="grid gap-4 md:grid-cols-[1fr_2fr] md:items-start">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Why are we opening early access?
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Many doctors are curious about how AI, digital workflows, and remote diagnostics can actually help in daily clinical practice.
                </p>
                <p>
                  Before our official public announcement, we decided to open a short early-access window to understand real clinical interest and involve selected doctors and hospitals early in the process.
                </p>
                <p className="font-semibold text-[#B45309]">This is not a public launch.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
            <div className="grid gap-4 md:grid-cols-[1fr_2fr] md:items-start">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                What IRRI Vision is working on
              </h2>
              <ul className="space-y-3 text-gray-700 text-lg list-disc list-inside">
                <li>AI-assisted retinal disease analysis</li>
                <li>Ophthalmology-specific EMR designed for real workflows</li>
                <li>Portable and remote diagnostic solutions</li>
                <li>All solutions are being built by ophthalmologists, with a strong focus on clinical relevance, safety, and scalability.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
            <div className="grid gap-4 md:grid-cols-[1fr_2fr] md:items-start">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                What does early access include?
              </h2>
              <ul className="space-y-3 text-gray-700 text-lg">
                {[
                  "Priority consideration for pilot programs",
                  "Early feedback directly with the founding medical team",
                  "Preferred onboarding when pilots open",
                  "Opportunity to influence product direction",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#195769]/10 text-[#195769] text-sm font-semibold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              <div className="mt-4 space-y-2 font-semibold text-[#B45309]">
                <p>No obligation. No payment. This is not a clinical deployment.</p>
              </div>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Important notice
            </h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>Early access requests will be accepted for a very limited time only. Requests submitted after the deadline will not be considered for this phase.</p>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900 mb-4">Selection will be based on:</p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {["Specialty relevance", "Practice type", "Capacity"].map((item) => (
                    <div
                      key={item}
                      className="flex flex-col items-center p-4 sm:p-6 rounded-lg bg-white hover:bg-[#F5F7FA] transition-all duration-300 shadow-sm hover:shadow-md text-center"
                    >
                      <div className="mb-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#195769]/10 text-[#195769] text-sm font-semibold">
                        ✓
                      </div>
                      <p className="text-[#4D4D4D] text-sm sm:text-base font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#195769] to-[#144552] rounded-3xl shadow-2xl p-8 sm:p-10 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              If you’re interested in being involved early, request access now.
            </h2>
            <a
              href="https://forms.gle/uzHhvC3HYue4SCUv8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-white text-[#195769] font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              Request Early Access
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LimitedEarlyAccess;