import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const importantLinks = ["Appointment", "Doctors", "Services", "About Us"];
const contactUs = [
  "Call: (237) 681-812-414",
  "Address: 8502 Preston Rd",
  "Nashik India",
];
const socialIcons = [FaFacebookF, FaTwitter, FaInstagram];
export default function Footer() {
  return (
    <footer className="bg-[#0c1559] pt-12 text-white/80">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 pb-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold text-white">MEDDICAL</h3>
          <p className="mt-3 text-sm leading-relaxed">
            Leading the Way in Medical Excellence, Trusted Care.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase text-white">
            Important Links
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            {importantLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-sky-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase text-white">Contact Us</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {contactUs.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase text-white">Newsletter</h4>
          <form className="mt-3 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-l-sm px-3 py-2 text-sm text-slate-700 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-r-sm bg-sky-400 px-4 text-sm font-semibold text-[#0c1559] hover:bg-sky-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs sm:flex-row">
          <p>© 2026 All Rights Reserved by Ascending Heavens</p>
         <div className="flex gap-3">
  {socialIcons.map((Icon, i) => (
    <span
      key={i}
      className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-sky-400 hover:text-[#0c1559]"
    >
      <Icon className="h-3.5 w-3.5" />
    </span>
  ))}
</div>
        </div>
      </div>
    </footer>
  );
}