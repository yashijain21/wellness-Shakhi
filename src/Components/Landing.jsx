import React, { useState } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import amitabh from "../assets/amitabh.png";
import bgImg from "../assets/background.png";
import bgImg2 from "../assets/am2bg.png";
import logo from "../assets/logo.png";
import bgLeaves from "../assets/bg-leaves.png";
import motherBaby from "../assets/mother-baby.png";
import leafBg from "../assets/faqbg.png";
import motherBaby2 from "../assets/mother-baby-faq.png";
import instabg from "../assets/instabg.png";
import insta1 from "../assets/insta1.png";
import insta2 from "../assets/insta2.png";
import insta3 from "../assets/insta3.png";

export default function LandingMobile() {
  const [open, setOpen] = useState(null);

  return (
    <div className="font-sans bg-white text-gray-800 w-full overflow-x-hidden">
      {/* HEADER */}
      <div className="bg-white w-full flex justify-between items-center px-4 py-3 shadow-md">
        <img src={logo} alt="Logo" className="w-28" />
        <button className="text-white bg-cyan-700 font-semibold px-4 py-2 rounded-full text-sm">
          Check Now
        </button>
      </div>

      {/* HERO */}
      <section className="relative bg-gradient-to-r from-cyan-600 to-cyan-400 text-white py-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center px-4"
        >
          <img
            src={amitabh}
            alt="Amitabh Bachchan"
            className="w-64 object-contain rounded-lg drop-shadow-xl mb-6"
          />
          <h1 className="text-xl font-bold leading-snug mb-3">
            Find Out If Your{" "}
            <span className="text-[#1f4799]">Blood Group</span> is a threat for
            your child.
          </h1>
          <p className="text-sm mb-5">
            Find out if you and your partner are Rh compatible and what it means
            for your pregnancy.
          </p>
          <button className="bg-white text-cyan-700 font-semibold px-5 py-2 rounded-full">
            Check Now
          </button>
        </motion.div>
      </section>

      {/* AWARENESS 1 */}
      <section
        className="relative bg-cover bg-center text-white flex items-center justify-center px-6 py-10"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="bg-[#00B5D8]/95 p-6 rounded-2xl max-w-xs text-center">
          <h2 className="text-lg font-semibold mb-2">
            Understanding the co-relation between blood groups & pregnancy
          </h2>
          <p className="text-sm mb-4">
            Watch Dr. Supriya Puranik explain the connection between pregnancy
            and blood groups.
          </p>
          <button className="bg-white text-[#00B5D8] px-4 py-2 rounded-full font-medium">
            Watch Now
          </button>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="relative bg-cover bg-center text-center py-16 px-6"
        style={{ backgroundImage: `url(${bgImg2})` }}
      >
        <h2 className="text-[#00A6B6] text-xl font-semibold mb-3">
          Protect Your Future Child <br /> From Unwanted Complications.
        </h2>
        <p className="text-gray-700 mb-5 text-sm">
          Use our Rh Compatibility Checker to know if you are at risk in just a
          few seconds.
        </p>
        <button className="bg-[#00A6B6] text-white px-8 py-2 rounded-full font-medium">
          Check Now
        </button>
      </section>

      {/* INFO SECTION */}
      <section
        className="relative bg-cover bg-center px-6 py-10 text-center"
        style={{ backgroundImage: `url(${bgLeaves})` }}
      >
        <h2 className="text-[#009FB6] text-2xl font-semibold mb-4">
          Learn How Knowing Your Blood Group <br /> Can Make Pregnancy Safer
        </h2>
        <p className="text-gray-700 text-sm mb-8">
          If you’re Rh-negative and your partner is Rh-positive, your body may
          develop antibodies during pregnancy that can affect your baby. Simple
          testing can prevent complications.
        </p>
        <img
          src={motherBaby}
          alt="Mother and baby"
          className="rounded-lg w-full mb-6"
        />
        <h3 className="text-[#009FB6] font-semibold mb-4">
          Your 3–Step Path to a Safer Pregnancy
        </h3>
        <div className="space-y-4 text-sm text-gray-700">
          <p>
            <span className="bg-[#00B5D8] text-white px-3 py-1 rounded-full mr-2">
              1
            </span>
            Check your Rh compatibility.
          </p>
          <p>
            <span className="bg-[#00B5D8] text-white px-3 py-1 rounded-full mr-2">
              2
            </span>
            Learn what your result means.
          </p>
          <p>
            <span className="bg-[#00B5D8] text-white px-3 py-1 rounded-full mr-2">
              3
            </span>
            Stay connected with your doctor.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section
        className="relative bg-cover bg-center px-6 py-12"
        style={{ backgroundImage: `url(${leafBg})` }}
      >
        <h2 className="text-[#009FB6] text-2xl font-semibold mb-3">
          All About Rh Incompatibility
        </h2>
        <p className="text-gray-700 text-sm mb-6">
          Answers to Your Most Common Questions About Blood Types, Pregnancy,
          and Newborn Health.
        </p>

        {/* Example FAQ */}
        {[
          {
            q: "What is Rh incompatibility?",
            a: "It occurs when the mother’s blood is Rh-negative and the baby’s is Rh-positive, causing antibodies to form.",
          },
          {
            q: "When does it become a problem?",
            a: "Usually after exposure to Rh-positive blood — during delivery, miscarriage, or certain procedures.",
          },
          {
            q: "How can it be prevented?",
            a: "By giving an Rh immunoglobulin (RhIg) injection around 28 weeks and after delivery.",
          },
        ].map((faq, i) => (
          <div
            key={i}
            className="bg-[#E6F9FC] rounded-md mb-3 transition"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="flex items-center justify-between px-5 py-3 cursor-pointer">
              <span className="text-[#009FB6] font-medium">{faq.q}</span>
              <span className="text-white bg-[#00B5D8] rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {open === i ? "−" : "+"}
              </span>
            </div>
            {open === i && (
              <p className="px-5 pb-3 text-gray-700 text-sm">{faq.a}</p>
            )}
          </div>
        ))}

        <img
          src={motherBaby2}
          alt="Mother with baby"
          className="rounded-xl w-full mt-8"
        />
      </section>

      {/* INSTAGRAM CAROUSEL */}
      <section
        className="relative bg-cover bg-center px-6 py-12"
        style={{ backgroundImage: `url(${instabg})` }}
      >
        <h2 className="text-[#009FB6] text-2xl font-semibold text-center mb-6">
          Our Awareness Initiatives
        </h2>

        <div className="flex space-x-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
          {[insta1, insta2, insta3].map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center w-[250px] bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={img}
                alt={`Card ${index + 1}`}
                className="w-full h-[250px] object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#d8edf0] text-gray-700 py-8 text-center">
        <img src={logo} alt="Wellness Sakhi" className="mx-auto mb-4 w-28" />
        <input
          type="email"
          placeholder="Subscribe for updates"
          className="w-4/5 rounded-full border border-[#00B8D4] px-4 py-2 text-sm focus:outline-none mb-3"
        />
        <button className="bg-[#00B8D4] text-white px-6 py-2 rounded-full text-sm font-semibold">
          Subscribe
        </button>
        <p className="text-xs mt-4 text-gray-600">
          Privacy Policy | Terms & Conditions | Cookie Policy
        </p>
      </footer>
    </div>
  );
}
