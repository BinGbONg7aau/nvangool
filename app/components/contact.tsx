"use client";

import * as Icon from "@deemlol/next-icons";
import copyToClipboard from "@/app/utils/copyToClipBoard";
import SectionHeader from "@/app/components/sectionHeader";

const contactDetails = [
  {
    label: "e-mail address",
    value: "Nikolaj.van.gool@gmail.com",
    display: "Nikolaj.van.gool@gmail.com",
  },
  {
    label: "phone number",
    value: "+4530451510",
    display: "+45 30 45 15 10",
  },
  {
    label: "address",
    value: "2500 Valby, Denmark",
    display: "2500 Valby, Denmark",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/BinGbONg7aau/",
    Icon: Icon.GitHub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nikolaj-van-gool/",
    Icon: Icon.LinkedIn,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/nikolaj.vangool/",
    Icon: Icon.Facebook,
  },
];

export default function Contact() {
  return (
    <>
      <div className="py-8 px-4 lg:px-12">
        <SectionHeader
          title="Contact"
          text={
            <>
              I{"'"}m currently open to opportunities in software development
              and always happy to connect with people working on interesting
              projects. Feel free to reach out by email or connect with me on
              LinkedIn. I{"'"}d love to hear from you!
            </>
          }
        />
        <div className="border w-full p-4 flex flex-col lg:flex-row justify-around">
          <div className="flex w-full lg:w-1/2 flex-col text-lg items-center font-bold">
            {contactDetails.map((contact, index) => (
              <button
                key={contact.label}
                type="button"
                onClick={() => copyToClipboard(contact.value, contact.label)}
                className={`group flex w-4/5 lg:w-1/2 items-center p-6 text-left transition-opacity hover:opacity-80 cursor-pointer gap-2 ${
                  index < contactDetails.length - 1 ? "border-b" : ""
                }`}
              >
                <div>{contact.display}</div>
                <Icon.Copy
                  className="shrink-0 opacity-0 transition-opacity group-hover:opacity-80"
                  size={20}
                  strokeWidth={2}
                />
              </button>
            ))}
          </div>

          <div className="flex w-full lg:w-1/2 items-center justify-center">
            {socialLinks.map(({ name, href, Icon: SocialIcon }, index) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-8 transition-opacity hover:opacity-75 ${
                  index < socialLinks.length - 1 ? "border-r" : ""
                }`}
              >
                <SocialIcon size={40} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
