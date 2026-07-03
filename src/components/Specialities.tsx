"use client";

import { useState } from "react";
import {
  Brain,
  HeartPulse,
  Ribbon,
  Ear,
  Eye,
  Activity,
  Wind,
  Droplets,
  Stethoscope,
  TestTube,
  Sparkles,
  Baby,
} from "lucide-react";

const specialties = [
  { label: "Neurology", icon: Brain },
  { label: "Cardiology", icon: HeartPulse },
  { label: "Oncology", icon: Ribbon },
  { label: "Otorhinolaryngology", icon: Ear },
  { label: "Ophthalmology", icon: Eye },
  { label: "Endocrinology", icon: Activity },
  { label: "Pulmonology", icon: Wind },
  { label: "Renal Medicine", icon: Droplets },
  { label: "Gastroenterology", icon: Stethoscope },
  { label: "Urology", icon: TestTube },
  { label: "Dermatology", icon: Sparkles },
  { label: "Gynaecology", icon: Baby },
];

export default function Specialties() {
  const [active, setActive] = useState(1); // "Cardiology" highlighted by default

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-500">
            Always Caring
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#0c1559] sm:text-3xl">
            Our Specialties
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-500">
            Comprehensive, specialist-led care across every major discipline,
            backed by an expert team and modern facilities.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {specialties.map(({ label, icon: Icon }, i) => {
            const isActive = i === active;
            return (
              <button
                key={label}
                onClick={() => setActive(i)}
                className={`group flex flex-col items-center justify-center gap-3 rounded-xl border px-4 py-7 text-center text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "border-[#0c1559] bg-[#0c1559] shadow-lg shadow-[#0c1559]/20"
                    : "border-slate-200 bg-white hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "bg-sky-50 text-sky-500 group-hover:bg-sky-100"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <span className={isActive ? "text-white" : "text-slate-600"}>
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}