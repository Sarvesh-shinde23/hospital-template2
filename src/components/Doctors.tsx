"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Doctor {
  name: string;
  role: string;
  img: string;
  imgPosition?: string; // e.g. "center top", "50% 20%" — tune per photo
}

const doctors: Doctor[] = [
  { name: "Dr. Marcus Webb", role: "NEUROLOGY", img: "/Doctor1.jpg", imgPosition: "center top" },
  { name: "Dr. James Carter", role: "CARDIOLOGY", img: "/Doctor2.jpg", imgPosition: "center 15%" },
  { name: "Dr. Aisha Khan", role: "DERMATOLOGY", img: "/Doctor3.avif", imgPosition: "center top" },
  { name: "Dr. Michael Lee", role: "ONCOLOGY", img: "/Doctor4.jpg", imgPosition: "center 20%" },
  { name: "Dr. Priya Sharma", role: "PEDIATRICS", img: "/Doctor5.jpg", imgPosition: "center top" },
  { name: "Dr. Daniel Osei", role: "ORTHOPEDICS", img: "/Doctor6.webp", imgPosition: "center top" },
];

const PER_PAGE = 3;
const pageCount = Math.ceil(doctors.length / PER_PAGE);

export default function Doctors() {
  const [page, setPage] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goTo = (index: number) => {
    if (index < 0) {
      setPage(pageCount - 1);
    } else if (index >= pageCount) {
      setPage(0);
    } else {
      setPage(index);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const delta = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (delta > threshold) {
      goTo(page + 1);
    } else if (delta < -threshold) {
      goTo(page - 1);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-500">
            Trusted Care
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#0c1559] sm:text-3xl">
            Our Doctors
          </h2>
        </div>

        {/* Swipeable viewport */}
        <div className="relative">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {Array.from({ length: pageCount }).map((_, pageIdx) => (
                <div
                  key={pageIdx}
                  className="grid w-full flex-shrink-0 grid-cols-1 gap-8 sm:grid-cols-3"
                >
                  {doctors
                    .slice(pageIdx * PER_PAGE, pageIdx * PER_PAGE + PER_PAGE)
                    .map((doc, i) => (
                      <div key={i} className="text-center">
                        <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                          <Image
                            src={doc.img}
                            alt={doc.name}
                            fill
                            sizes="(max-width: 640px) 100vw, 300px"
                            className="object-cover"
                            style={{ objectPosition: doc.imgPosition ?? "center top" }}
                          />
                        </div>

                        <h3 className="mt-4 text-sm font-bold uppercase text-[#0c1559]">
                          {doc.name}
                        </h3>
                        <p className="text-xs font-semibold text-sky-500">
                          {doc.role}
                        </p>

                        <div className="mt-3 flex justify-center gap-2">
                          {[FaFacebookF, FaTwitter, FaLinkedinIn].map(
                            (Icon, idx) => (
                              <span
                                key={idx}
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0c1559] text-white"
                              >
                                <Icon className="h-3.5 w-3.5" />
                              </span>
                            )
                          )}
                        </div>

                        
                        <a
  href="#profile"
  className="mt-4 inline-block rounded-full bg-sky-100 px-5 py-2 text-xs font-semibold text-[#0c1559] transition hover:bg-sky-200"
>
  View Profile
</a>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Arrow controls (desktop) */}
          {pageCount > 1 && (
            <>
              <button
                aria-label="Previous doctors"
                onClick={() => goTo(page - 1)}
                className="absolute left-0 top-1/2 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 text-[#0c1559] shadow-md transition hover:scale-110 sm:flex"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next doctors"
                onClick={() => goTo(page + 1)}
                className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-4 items-center justify-center rounded-full bg-white p-2 text-[#0c1559] shadow-md transition hover:scale-110 sm:flex"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {/* Pagination dots */}
        {pageCount > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to page ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === page ? "w-6 bg-[#0c1559]" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}