import Image from "next/image";
import { ArrowRight, Calendar, Phone, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100">
      {/* Background Blur */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row lg:py-28">
        {/* Left */}
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Caring For Life
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-[#0C1559] lg:text-6xl">
            Leading the Way
            <br />
            <span className="text-sky-500">
              in Medical Excellence
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Trusted healthcare with experienced doctors, advanced
            technology, and compassionate care for you and your family.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#appointment"
              className="flex items-center gap-2 rounded-xl bg-[#0C1559] px-7 py-4 font-semibold text-white transition hover:bg-[#16237f]"
            >
              <Calendar size={18} />
              Book Appointment
            </a>

            <a
              href="#services"
              className="flex items-center gap-2 rounded-xl border border-sky-300 bg-white px-7 py-4 font-semibold text-sky-700 transition hover:bg-sky-50"
            >
              Explore Services
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Stats */}


        </div>

        {/* Right */}

        <div className="relative w-full max-w-xl">
          {/* Background Shape */}

          <div className="absolute inset-0 scale-95 rounded-full bg-sky-100 blur-xl" />

          <Image
            src="/Hero3.png"
            alt="Doctor"
            width={700}
            height={800}
            priority
            className="relative z-10 mx-auto w-full"
          />

          

         
        </div>
      </div>
    </section>
  );
}