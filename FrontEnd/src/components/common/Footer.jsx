import React from "react";

// Footer data structure
const footerSections = [
  {
    title: "Shop",
    links: ["Gift cards", "Registry", "Sitemap", "Blog"],
  },
  {
    title: "Sell",
    links: [
      "Sell on This Platform",
      "Teams",
      "Forums",
      "Affiliates & Creators",
    ],
  },
  {
    title: "About",
    links: [
      "Your Name, Inc.",
      "Policies",
      "Investors",
      "Careers",
      "Press",
      "Impact",
      "Legal imprint",
    ],
  },
  {
    title: "Help",
    links: ["Help Centre", "Privacy settings"],
    social: true,
  },
];

// Footer link component
const FooterLink = ({ text }) => (
  <a
    href="#"
    className="text-white/80 text-sm font-light hover:text-white hover:underline transition-colors duration-200 block mt-2"
    onClick={(e) => e.preventDefault()}
  >
    {text}
  </a>
);

// Social media icons component
const SocialIcons = () => (
  <div className="flex space-x-4 mt-4">
    {["instagram", "facebook-f", "pinterest-p", "twitter", "youtube"].map(
      (icon) => (
        <a
          key={icon}
          href="#"
          aria-label={icon}
          className="hover:text-white/70 transition-colors duration-200"
        >
          <i className={`fab fa-${icon} text-xl`}></i>
        </a>
      )
    )}
  </div>
);

// Main Footer component
function Footer() {
  return (
    <footer className="bg-primary w-full mt-10 rounded-t-xl shadow-lg font-urbanist text-primarybg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Footer link */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 text-center md:text-left">
          {footerSections.map((section) => (
            <div
              key={section.title}
              className="flex flex-col items-center md:items-start"
            >
              <h4 className="text-lg font-extrabold mb-3">{section.title}</h4>
              <div className="flex flex-col space-y-1">
                {section.links.map((link) => (
                  <FooterLink key={link} text={link} />
                ))}
              </div>
              {section.social && <SocialIcons />}
            </div>
          ))}
        </div>

        {/* Footer bottom */}
        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-y-3">
          <p className="text-white/60 text-xs md:text-sm font-light">
            &copy; {new Date().getFullYear()} Inc. All rights reserved.
          </p>
          <div>
            <span className="text-white/60 text-xs md:text-sm font-light hover:text-white cursor-pointer">
              Bangla (BD) | $ (BDT)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
