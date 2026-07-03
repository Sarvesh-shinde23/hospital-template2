"use client";

import { useState } from "react";
import { CalendarDays, Loader2, CheckCircle2 } from "lucide-react";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    doctor: "",
    department: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      setStatus("error");
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      // Replace with your real endpoint, e.g.:
      // const res = await fetch("/api/appointments", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      // if (!res.ok) throw new Error("Booking failed");

      await new Promise((resolve) => setTimeout(resolve, 1200)); // simulated latency

      setStatus("success");
      setFormData({
        name: "",
        gender: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        doctor: "",
        department: "",
        message: "",
      });

      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or call us directly.");
    }
  };

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
        <div className="relative rounded-3xl border border-white/50 bg-white/80 p-8 text-black shadow-2xl backdrop-blur-xl">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
                <CheckCircle2 className="h-9 w-9 text-sky-500" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#0c1559]">
                Appointment Requested!
              </h3>
              <p className="mt-3 max-w-xs text-slate-600">
                We've received your details and will confirm your slot shortly via phone or email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="mb-8 text-2xl font-bold text-[#0c1559]">
                Book an Appointment
              </h3>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  disabled={status === "submitting"}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-black placeholder:text-slate-400 transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100 disabled:bg-slate-50 disabled:text-slate-400"
                />

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100 disabled:bg-slate-50 disabled:text-slate-400"
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  disabled={status === "submitting"}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-black placeholder:text-slate-400 transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100 disabled:bg-slate-50 disabled:text-slate-400"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  disabled={status === "submitting"}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-black placeholder:text-slate-400 transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100 disabled:bg-slate-50 disabled:text-slate-400"
                />

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-black transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100 disabled:bg-slate-50 disabled:text-slate-400"
                />

                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-black transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100 disabled:bg-slate-50 disabled:text-slate-400"
                />

                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-black transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100 disabled:bg-slate-50 disabled:text-slate-400"
                >
                  <option value="">Select Doctor</option>
                  <option>Dr. Marcus Webb</option>
                  <option>Dr. James Carter</option>
                  <option>Dr. Aisha Khan</option>
                  <option>Dr. Michael Lee</option>
                  <option>Dr. Priya Sharma</option>
                  <option>Dr. Daniel Osei</option>
                </select>

                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-black transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100 disabled:bg-slate-50 disabled:text-slate-400"
                >
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
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your concern..."
                  disabled={status === "submitting"}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-black placeholder:text-slate-400 transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-100 md:col-span-2 disabled:bg-slate-50 disabled:text-slate-400"
                />
              </div>

              {status === "error" && (
                <p className="mt-4 text-sm font-medium text-red-500">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0c1559] py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-500 hover:shadow-xl disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Booking...
                  </>
                ) : (
                  "Book Appointment"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}