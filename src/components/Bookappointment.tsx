import { CalendarDays } from "lucide-react";

export default function BookAppointment() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50 py-24">
      {/* Background Blur */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-600">
            <CalendarDays className="h-4 w-4" />
            Book Appointment
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-[#0c1559]">
            Schedule Your Visit With Our Specialists
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Connect with experienced healthcare professionals for personalized
            consultations, preventive screenings, and comprehensive treatment
            plans—all tailored to your healthcare needs.
          </p>

          <div className="mt-10 space-y-5">
            {[
              "Same-Day Appointments",
              "Experienced Specialists",
              "24×7 Emergency Support",
              "Cashless Insurance Available",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white">
                  ✓
                </div>

                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
<form className="rounded-3xl border border-white/50 bg-white/80 p-8 text-black shadow-2xl backdrop-blur-xl">
          <h3 className="mb-8 text-2xl font-bold text-[#0c1559]">
            Book an Appointment
          </h3>

          <div className="grid gap-5 md:grid-cols-2">
           <input
  type="text"
  placeholder="Full Name"
  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-black placeholder:text-slate-400 transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100"
/>

            <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <input
  type="email"
  placeholder="Email Address"
  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-black placeholder:text-slate-400 transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100"
/>

            <input
  type="tel"
  placeholder="Phone Number"
  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-black placeholder:text-slate-400 transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100"
/>

            <input
  type="date"
  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-black transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100"
/>

            <input
  type="time"
  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-black transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100"
/>

        <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-black transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100">
  <option value="">Select Doctor</option>
  <option>Dr. Marcus Webb</option>
  <option>Dr. James Carter</option>
  <option>Dr. Aisha Khan</option>
  <option>Dr. Michael Lee</option>
  <option>Dr. Priya Sharma</option>
  <option>Dr. Daniel Osei</option>
</select>

<select className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-black transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100">
  <option value="">Select Department</option>
  <option>Cardiology</option>
  <option>Neurology</option>
  <option>Orthopedics</option>
  <option>Dermatology</option>
  <option>Pediatrics</option>
  <option>Oncology</option>
  <option>General Medicine</option>
  <option>ENT</option>
  <option>Gynecology</option>
  <option>Urology</option>
  <option>Ophthalmology</option>
  <option>Radiology</option>
</select>

           <textarea
  rows={4}
  placeholder="Tell us about your concern..."
  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-black placeholder:text-slate-400 transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100 md:col-span-2"
/>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-[#0c1559] py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-500 hover:shadow-xl"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
}