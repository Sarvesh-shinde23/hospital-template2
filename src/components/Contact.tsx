import { Phone, MapPin, Mail, Clock } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    label: "EMERGENCY",
    lines: ["(237) 681-812-414", "(237) 666-331-894"],
  },
  {
    icon: MapPin,
    label: "LOCATION",
    lines: ["8502 Preston Rd", "Texas, USA"],
  },
  {
    icon: Mail,
    label: "EMAIL",
    lines: ["Mdtheme@gmail.com"],
  },
  {
    icon: Clock,
    label: "WORKING HOURS",
    lines: ["Mon-Sat: 09:00 - 23:00", "Sunday: Emergency only"],
  },
];

export default function Contact() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-500">
            Get in Touch
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#0c1559] sm:text-3xl">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map(({ icon: Icon, label, lines }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-md bg-sky-50 px-4 py-8 text-center"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0c1559] text-white">
                <Icon className="h-5 w-5" />
              </span>
              <p className="text-xs font-bold uppercase tracking-wide text-[#0c1559]">
                {label}
              </p>
            {lines.map((line, index) => (
  <p key={index} className="text-xs text-slate-500">
    {line}
  </p>
))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}