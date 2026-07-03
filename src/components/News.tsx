"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, MessageCircle, ArrowUpRight, Calendar } from "lucide-react";

const news = [
  {
    date: "Sep 16, 2021",
    author: "Dr. Sarah Connor",
    category: "Neurology",
    title: "Understanding migraines: causes, triggers, and modern treatments.",
    excerpt:
      "A closer look at why migraines happen and the latest options available to manage them.",
    likes: 24,
    comments: 6,
    img: "/news1.jpg",
  },
  {
    date: "Sep 14, 2021",
    author: "Dr. James Carter",
    category: "Cardiology",
    title: "Five everyday habits that keep your heart healthy for longer.",
    excerpt:
      "Small, sustainable changes that meaningfully lower long-term cardiovascular risk.",
    likes: 31,
    comments: 9,
    img: "/news2.jpg",
  },
  {
    date: "Sep 10, 2021",
    author: "Dr. Aisha Khan",
    category: "Dermatology",
    title: "Sun protection myths dermatologists wish you'd stop believing.",
    excerpt:
      "Clearing up common misconceptions around SPF, skin tone, and daily protection.",
    likes: 18,
    comments: 3,
    img: "/news3.jpg",
  },
  {
    date: "Sep 6, 2021",
    author: "Dr. Priya Sharma",
    category: "Pediatrics",
    title: "A parent's guide to childhood vaccination schedules.",
    excerpt:
      "What to expect at each stage, and why staying on schedule matters most early on.",
    likes: 12,
    comments: 1,
    img: "/news4.jpg",
  },
];

export default function News() {
  const [liked, setLiked] = useState<Record<number, boolean>>({});

  const toggleLike = (i: number) =>
    setLiked((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <section className="bg-[#f7f9fc] py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-500">
            Better Information, Better Health
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#0c1559] sm:text-3xl">
            Latest News
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
          {news.map((item, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
  src={item.img}
  alt={item.title}
  fill
  sizes="(max-width: 640px) 100vw, 50vw"
  className="object-cover transition duration-500 group-hover:scale-105"
/>
                <span className="absolute left-3 top-3 rounded-full bg-[#0c1559] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  {item.category}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.date}
                  <span className="text-slate-300">·</span>
                  <span>{item.author}</span>
                </div>

                <h3 className="mt-2 text-base font-bold leading-snug text-[#0c1559] transition group-hover:text-sky-600">
                  <a href="#article">{item.title}</a>
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {item.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <button
                      onClick={() => toggleLike(i)}
                      className="flex items-center gap-1.5 transition hover:text-rose-500"
                    >
                      <Heart
                        className={`h-4 w-4 transition ${
                          liked[i] ? "fill-rose-500 text-rose-500" : ""
                        }`}
                      />
                      {item.likes + (liked[i] ? 1 : 0)}
                    </button>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="h-4 w-4" />
                      {item.comments}
                    </span>
                  </div>

                  <a
                    href="#article"
                    className="flex items-center gap-1 text-xs font-semibold text-sky-500 transition group-hover:gap-1.5 hover:text-sky-600"
                  >
                    Read More
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#all-news"
            className="inline-block rounded-full bg-[#0c1559] px-7 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0c1559]/90"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}