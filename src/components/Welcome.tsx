import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Welcome() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-500">
          Welcome to Meddical
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#0c1559] sm:text-3xl">
          A Great Place to Receive Care
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          scelerisque tortor ornare ornare. Convallis felis vitae tortor
          augue. Velit ac euismod proin massa in. Consequat faucibus
          pellentesque enim nec.
        </p>
        <a
          href="#about"
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-500 hover:text-sky-600"
        >
          Learn More <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-4">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="/Blackdoctors1.png"
            alt="Team of doctors and medical staff"
            width={1200}
            height={400}
            className="h-56 w-full object-cover sm:h-72"
          />
        </div>
      </div>
    </section>
  );
}