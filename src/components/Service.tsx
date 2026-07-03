import Image from "next/image";
import {
  Stethoscope,
  HeartPulse,
  FlaskConical,
  Droplet,
} from "lucide-react";

const serviceTabs = [
  { label: "Free Checkup", icon: Stethoscope, active: false },
  { label: "Cardiogram", icon: HeartPulse, active: false },
  { label: "Drug Testing", icon: FlaskConical, active: false },
  { label: "Blood Bank", icon: Droplet, active: false },
];

const features = [
  "A Passion for Healing",
  "All our Best",
  "A Legacy of Excellence",
  "5-Star Care",
  "Believe in Us",
  "Always Caring",
];

export default function Services() {
  return (
    <section id="services" className="bg-[#f7f9fc] py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">
            Care You Can Believe In
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#0c1559] sm:text-4xl">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr_320px]">
          {/* Service Tabs */}
          <div className="flex flex-row gap-4 overflow-x-auto lg:flex-col lg:overflow-visible">
            {serviceTabs.map(({ label, icon: Icon, active }) => (
              <button
                key={label}
                className={`group flex min-w-[140px] flex-col items-center gap-3 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:min-w-0 ${
                  active
                    ? "border-[#0c1559] bg-[#0c1559] text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#0c1559] hover:bg-[#0c1559] hover:text-white"
                }`}
              >
                <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm font-semibold">{label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="transition-all duration-500 hover:translate-x-1">
            <h3 className="text-2xl font-bold text-[#0c1559]">
              A Passion for Putting Patients First.
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="group flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 transition-all duration-300 hover:bg-white hover:shadow-md"
                >
                  <span className="h-2 w-2 rounded-full bg-sky-500 transition-all duration-300 group-hover:h-3 group-hover:w-3 group-hover:bg-[#0c1559]" />

                  <span className="text-sm font-medium text-slate-600 transition-colors duration-300 group-hover:text-[#0c1559]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 leading-8 text-slate-500">
              We combine compassionate care with advanced medical technology to
              deliver exceptional healthcare services. From preventive
              screenings and specialist consultations to diagnostics and
              emergency care, our experienced medical professionals are
              committed to providing personalized treatment that supports your
              health and well-being at every stage of life.
            </p>

            <a
              href="#all-services"
              className="mt-8 inline-flex items-center rounded-full bg-[#0c1559] px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-500 hover:shadow-xl"
            >
              View All Services
            </a>
          </div>

          {/* Images */}
          <div className="space-y-5">
            <div className="group overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <Image
                src="/female.avif"
                alt="Doctor consulting patient"
                width={350}
                height={220}
                className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="group overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <Image
                src="/Doctor2.jpg"
                alt="Medical team"
                width={350}
                height={220}
                className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}