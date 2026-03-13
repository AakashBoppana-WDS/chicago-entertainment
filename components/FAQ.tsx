export default function FAQ() {
  return (
    <section className="bg-black py-20">

      <div className="max-w-4xl mx-auto px-10">

        <h2 className="text-3xl text-center text-cyan-400 font-bold mb-12">
          FAQ
        </h2>

        <div className="space-y-6">

          <div className="bg-neutral-900 p-6 rounded-lg border border-gray-800">
            <h4 className="font-semibold mb-2 text-white">
              How long is booth rental?
            </h4>

            <p className="text-gray-400">
              Our rental packages range from 2 to 6 hours depending on the event type.
            </p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-lg border border-gray-800">
            <h4 className="font-semibold mb-2 text-white">
              Do guests get prints?
            </h4>

            <p className="text-gray-400">
              Yes, guests receive instant high-quality prints immediately after each photo session.
            </p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-lg border border-gray-800">
            <h4 className="font-semibold mb-2 text-white">
              Can photos be shared online?
            </h4>

            <p className="text-gray-400">
              Yes, all photos are uploaded to an online gallery where guests can download and share them.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}