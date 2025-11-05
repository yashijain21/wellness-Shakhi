// HeroSection.jsx
import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa"
import { motion } from "framer-motion";
import amitabh from "../assets/amitabh.png";
import bgImg from "../assets/background.png"
import amitabh2 from "../assets/amitabh2.png";
import newherobg from "../assets/newheromobile.png"
import amitabhmobile from "../assets/mobileamitabh.png"
import newhero from "../assets/newhero.png"
import bgImg2 from "../assets/am2bg.png"
import logo from "../assets/logo.png"
import bgLeaves from "../assets/bg-leaves.png"; // your background with leaves
import motherBaby from "../assets/mother-baby.png";
import leafBg from "../assets/faqbg.png"; // background with leaves
import motherBaby2 from "../assets/mother-baby-faq.png"
import instabg from "../assets/instabg.png"; // your leaf background
import insta1 from "../assets/insta1.png";
import insta2 from "../assets/insta2.png";
import insta3 from "../assets/insta3.png"; // add your 3rd card
import mobilebanner from "../assets/mobile banner.jpg"
import { useState } from "react";
import RhCompatibilityModal from "./RHCompatibilityModal";
export default function HeroSection() {
      const [open, setOpen] = useState(null);
  return (
    <div className="noto-sans bg-white text-gray-800 ">
       <div className="bg-white w-full h-15 md:h-20 p-2 px-7 flex justify-between items-center">
          <img src={logo} alt="" className="w-24 md:w-42" />
      <RhCompatibilityModal />

        </div> 
      {/* Hero Section */}
<section className="relative text-white overflow-hidden hidden md:block lg:block h-[600px]  bg-gradient-to-r to-[#1a2f78] from-[#088bbf]">
  {/* Image overlay on top of gradient */}

  {/* Background gradient is already here */}

  {/* Image layer with edge fade */}
  <div
    className="absolute inset-0 bg-center bg-contain   bg-no-repeat"
    style={{
       backgroundImage: `url(${newhero})`,
      WebkitMaskImage:
        "radial-gradient(circle at center, black 70%, transparent 100%)",
      maskImage: "radial-gradient(circle at center, black 70%, transparent 100%)",
      maskRepeat: "no-repeat",
      maskSize: "cover",
      opacity: 0.9,
    }}
  ></div>

 



  {/* Content */}
  <div className="relative z-10 container flex flex-col lg:flex-row items-center px-6 lg:px-16 h-full">
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative top-25 left-40 text-center lg:text-left"
    >
      <div className="flex items-center justify-center mb-5">
        <RhCompatibilityModal />
      </div>
    </motion.div>
  </div>
</section>

 
      {/* Hero Section */}
<section className="relative text-white overflow-hidden block md:hidden lg:hidden h-[500px]  bg-gradient-to-r to-[#1a2f78] from-[#088bbf]">
  {/* Image overlay on top of gradient */}

  {/* Background gradient is already here */}

  {/* Image layer with edge fade */}
  <div
    className="absolute inset-0 bg-end bg-contain bg-no-repeat "
    style={{
       backgroundImage: `url(${newherobg})`,
      WebkitMaskImage:
        "radial-gradient(circle at center, black 70%, transparent 100%)",
      maskImage: "radial-gradient(circle at center, black 70%, transparent 100%)",
      maskRepeat: "no-repeat",
      maskSize: "contain",
      opacity: 0.9,
    }}
  ></div>
<div className="absolute top-40 left-8 items-center justify-center mb-5">
         <RhCompatibilityModal className=" text-[10px] "/>
      </div>
        <div className="mt-85 px-5 flex flex-col lg:flex-row items-center ">
    {/* Left: Text */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-1 text-center lg:text-left z-10"
    >
      
    <div className=" py-2 block md:hidden lg:hidden w-full mt-4 ">
          <p className="text-sm md:text-lg mb-6 w-full text-center ">
        Find out if you and your partner are Rh compatible and understand what it means for your pregnancy. <br></br>
        Use our Rh Compatibility Checker to know<br></br> if you are at risk in just a few seconds.
      </p>

    
    </div>
    </motion.div>
  </div>
</section>


      {/* Awareness Section */}
<section
  className="relative w-full h-[500px] flex items-center justify-center px-8 md:px-16 overflow-hidden  "
  style={{
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  }}
>
  {/* Overlay (optional slight dark tint for contrast) */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Info Box */}
  <div className="relative bg-[#00B5D8] text-white rounded-2xl p-8 md:p-10 max-w-sm shadow-lg hidden md:block">
    <h2 className="text-2xl font-semibold mb-4 leading-snug">
      Understanding the correlation between blood
      groups & pregnancy
    </h2>
    <p className="text-sm leading-relaxed mb-6">
      Watch Dr. Supriya Puranik in conversation with Divyanshi Sumrav as she beautifully
      explains the connection between pregnancy and blood groups.
    </p>
   <a href="https://youtu.be/JNNlURoXCIc?si=mSC7xzvXBVwGczhU" target="_blank">
    <button className="bg-white text-[#00B5D8] px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
      Watch Now
    </button>
   </a>
  </div>
</section>
  <div className="relative bg-[#00B5D8] text-white  p-8 md:p-10  shadow-lg block  md:hidden ">
    <h2 className="text-sm font-semibold mb-4 leading-snug">
      Understanding the correlation between blood
      groups & pregnancy
    </h2>
    <p className="text-[12px] leading-relaxed mb-6">
      Watch Dr. Supriya Puranik in conversation with Divyanshi Sumrav as she beautifully
      explains the connection between pregnancy and blood groups.
    </p>
   <div className="flex justify-center"    >
     <a href="https://youtu.be/JNNlURoXCIc?si=mSC7xzvXBVwGczhU" target="_blank">
    <button className="bg-white text-[#00B5D8] px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
      Watch Now
    </button>
   </a>
   </div>
  </div>
 <section
      className="relative w-full h-[500px] flex items-center justify-center px-8 md:px-16 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Content */}
      <div className="relative z-10 text-[#00A6B6] max-w-lg mt-20  hidden md:block">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug text-center">
          Protect Your Future Child
          <br /> From Unwanted Complications.
        </h2>
        <p className="text-base md:text-lg mb-8 text-center">
          Use our Rh Compatibility Checker to know if you are at risk in just
          a few seconds
        </p>
      <div className="flex justify-center">
       < RhCompatibilityModal />
      </div>
      </div>
       <div className="relative -top-50 z-10 text-[#00A6B6] max-w-lg mt-40 block md:hidden">
        <h2 className="text-lg md:text-3xl font-semibold mb-4 leading-snug text-center">
          Protect Your Future Child
          <br /> From Unwanted Complications.
        </h2>
        <p className="text-[12px] md:text-lg mb-8 text-center">
          Use our Rh Compatibility Checker to know if you are at risk in just
          a few seconds
        </p>
      <div className="flex justify-center">
            < RhCompatibilityModal />
      </div>
      </div>
      {/* Right Image */}
     
        <div className="absolute md:relative md:top-0 top-42 w-[350px] md:w-[500px]  ">
        <img
          src={amitabhmobile}
          alt="Amitabh Bachchan"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
      <section
      className="relative w-full bg-no-repeat bg-cover bg-center px-6 md:px-16 py-16"
      style={{
        backgroundImage: `url(${bgLeaves})`,
      }}
    >
      {/* TOP ROW */}
      <div className="grid md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
        {/* Left Text */}
        <div className="md:border-r-4  border-[#009FB6] p-2">
         
          <h2 className="text-2xl md:text-4xl font-semibold text-[#009FB6] mb-4 leading-snug text-center md:bg-white p-4">
            Learn How Knowing Your 
            Blood Group Can Make 
            Pregnancy Safer
          </h2>
             <div className="w-34 h-1 bg-[#009FB6] mb-4 ml-24 block md:hidden">

            </div>
        </div>

        {/* Right Awareness Paragraph */}
        <div>
          <h3 className="text-[#009FB6] font-semibold mb-2 text-center">
            Awareness today means safety for tomorrow
          </h3>
          <p className="text-gray-700 leading-relaxed text-center">
            If you’re Rh-negative and your partner is Rh-positive, chances are
            that your baby may become Rh-positive and your body may develop
            antibodies during pregnancy that act against your baby. But with
            simple testing and timely care, this can be easily managed to keep
            both you and your baby healthy.
          </p>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="sm:flex md:flex lg:flex xl:flex gap-10 items-center justify-center mt-12 mx-auto">
        {/* Mother Baby Image */}
        <div>
          <img
            src={motherBaby}
            alt="Mother with baby"
            className="rounded-xl w-96 h-auto object-cover shadow-md "
          />
        </div>

        {/* 3-Step Section */}
        <div className="mt-5">
          <h3 className="text-[#009FB6] text-lg font-semibold mb-6 text-center">
            Your 3–Step Path to a Safer Pregnancy
          </h3>

          <div className="space-y-6">
            <div>
              <span className="bg-[#00B5D8] text-white text-sm px-3 py-1 rounded-tl-lg rounded-br-lg inline-block mb-2">
                Step 1
              </span>
              <p className="text-gray-700">
                Check your Rh compatibility, a simple start to understanding your
                body.
              </p>
            </div>

            <div>
              <span className="bg-[#00B5D8] text-white text-sm px-3 py-1 rounded-tl-lg rounded-br-lg inline-block mb-2">
                Step 2
              </span>
              <p className="text-gray-700">
                Learn what your result means and how it helps your baby.
              </p>
            </div>

            <div>
              <span className="bg-[#00B5D8] text-white text-sm px-3 py-1 rounded-tl-lg rounded-br-lg inline-block mb-2">
                Step 3
              </span>
              <p className="text-gray-700">
                Stay connected with your doctor for ongoing care and reassurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
   <section
      className="relative w-full bg-no-repeat bg-red-500 bg-cover bg-center  md:pl-16 block md:hidden "
      style={{ backgroundImage: `url(${leafBg})` }}
    >
      <div className="w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <div className="flex-col md:flex justify-center items-center ">
           <div className="flex justify-center items-center ml-5 mt-10 bg-white">
             <div className="w-44" >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#009FB6] mb-2 flex items-center gap-2 text-center">
            All about Rh Incompatibility
          </h2>

          <p className="text-gray-700 mb-8  text-sm text-center">
            Answers to Your Most Common Questions About Blood Types, Pregnancy,
            and Newborn Health
          </p>
          </div>
           </div>
           {/* RIGHT IMAGE */}
        <div className="flex justify-center ">
          <img
            src={motherBaby2}
            alt="Mother with baby"
            className="w-[300px]  sm:hidden md:w-[800px] object-contain"
          />
        </div>
          </div>

          {/* FAQ 1 */}
          <div className="bg-[#E6F9FC] rounded-md mb-3 transition">
            <div
              className="flex items-center justify-between hover:bg-[#D8F2F6] px-5 py-3 cursor-pointer"
              onClick={() => setOpen(open === 1 ? null : 1)}
            >
              <span className="text-[#009FB6] font-medium">
                What is Rh incompatibility?
              </span>
              <span className="text-white bg-[#00B5D8] rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {open === 1 ? "−" : "+"}
              </span>
            </div>
            {open === 1 && (
              <p className="px-5 pb-3 text-gray-700 text-sm">
                Rh incompatibility occurs when a mother’s blood type is
                Rh-negative and the baby’s blood type is Rh-positive. The
                mother’s immune system may recognize the baby’s Rh-positive red
                blood cells as foreign and produce antibodies against them.
              </p>
            )}
          </div>

          {/* FAQ 2 */}
          <div className="bg-[#E6F9FC] rounded-md mb-3 transition">
            <div
              className="flex items-center justify-between hover:bg-[#D8F2F6] px-5 py-3 cursor-pointer"
              onClick={() => setOpen(open === 2 ? null : 2)}
            >
              <span className="text-[#009FB6] font-medium">
                How common is Rh incompatibility?
              </span>
              <span className="text-white bg-[#00B5D8] rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {open === 2 ? "−" : "+"}
              </span>
            </div>
            {open === 2 && (
              <p className="px-5 pb-3 text-gray-700 text-sm">
                About 15% of people are Rh-negative, so Rh incompatibility can
                occur in roughly 1 in 10 pregnancies.
              </p>
            )}
          </div>

          {/* FAQ 3 */}
          <div className="bg-[#E6F9FC] rounded-md mb-3 transition">
            <div
              className="flex items-center justify-between hover:bg-[#D8F2F6] px-5 py-3 cursor-pointer"
              onClick={() => setOpen(open === 3 ? null : 3)}
            >
              <span className="text-[#009FB6] font-medium">
                When does Rh incompatibility become a problem?
              </span>
              <span className="text-white bg-[#00B5D8] rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {open === 3 ? "−" : "+"}
              </span>
            </div>
            {open === 3 && (
              <p className="px-5 pb-3 text-gray-700 text-sm">
                It usually becomes an issue only after the mother has been
                exposed to Rh-positive blood — for example, during delivery,
                miscarriage, abortion, ectopic pregnancy, or certain prenatal
                procedures.
              </p>
            )}
          </div>

          {/* FAQ 4 */}
          <div className="bg-[#E6F9FC] rounded-md mb-3 transition">
            <div
              className="flex items-center justify-between hover:bg-[#D8F2F6] px-5 py-3 cursor-pointer"
              onClick={() => setOpen(open === 4 ? null : 4)}
            >
              <span className="text-[#009FB6] font-medium">
                What are the risks to the baby?
              </span>
              <span className="text-white bg-[#00B5D8] rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {open === 4 ? "−" : "+"}
              </span>
            </div>
            {open === 4 && (
              <p className="px-5 pb-3 text-gray-700 text-sm">
                If untreated, maternal antibodies can cross the placenta and
                destroy the baby’s red blood cells, causing hemolytic disease of
                the newborn (HDN) or erythroblastosis fetalis. This can lead to
                anemia, jaundice, heart failure, or even stillbirth in severe
                cases.
              </p>
            )}
          </div>

          {/* FAQ 5 */}
          <div className="bg-[#E6F9FC] rounded-md mb-3 transition">
            <div
              className="flex items-center justify-between hover:bg-[#D8F2F6] px-5 py-3 cursor-pointer"
              onClick={() => setOpen(open === 5 ? null : 5)}
            >
              <span className="text-[#009FB6] font-medium">
                How is Rh incompatibility detected?
              </span>
              <span className="text-white bg-[#00B5D8] rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {open === 5 ? "−" : "+"}
              </span>
            </div>
            {open === 5 && (
              <p className="px-5 pb-3 text-gray-700 text-sm">
                It’s detected through:<br />
                • Blood typing (to know Rh status)<br />
                • Indirect Coombs test (to check if the mother has developed Rh
                antibodies)
              </p>
            )}
          </div>

          {/* FAQ 6 */}
          <div className="bg-[#E6F9FC] rounded-md mb-3 transition">
            <div
              className="flex items-center justify-between hover:bg-[#D8F2F6] px-5 py-3 cursor-pointer"
              onClick={() => setOpen(open === 6 ? null : 6)}
            >
              <span className="text-[#009FB6] font-medium">
                How can Rh incompatibility be prevented?
              </span>
              <span className="text-white bg-[#00B5D8] rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {open === 6 ? "−" : "+"}
              </span>
            </div>
            {open === 6 && (
              <p className="px-5 pb-3 text-gray-700 text-sm">
                By giving an Rh immunoglobulin injection (RhIg or RhoGAM) to the
                Rh-negative mother:<br />
                • Around 28 weeks of pregnancy, and<br />
                • Within 72 hours after delivery of an Rh-positive baby.<br />
                Also after miscarriage, abortion, or invasive prenatal tests.
              </p>
            )}
          </div>
        </div>

       
      </div>
    </section>
     <section
      className="relative w-full bg-no-repeat bg-cover bg-center pl-6 md:pl-16 pt-16 hidden md:block "
      style={{ backgroundImage: `url(${leafBg})` }}
    >
      <div className="w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#009FB6] mb-2 flex items-center gap-2">
            All about Rh Incompatibility
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Answers to Your Most Common Questions About Blood Types, Pregnancy,
            and Newborn Health
          </p>

          {/* FAQ 1 */}
          <div className="bg-[#E6F9FC] rounded-md mb-3 transition">
            <div
              className="flex items-center justify-between hover:bg-[#D8F2F6] px-5 py-3 cursor-pointer"
              onClick={() => setOpen(open === 1 ? null : 1)}
            >
              <span className="text-[#009FB6] font-medium">
                What is Rh incompatibility?
              </span>
              <span className="text-white bg-[#00B5D8] rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {open === 1 ? "−" : "+"}
              </span>
            </div>
            {open === 1 && (
              <p className="px-5 pb-3 text-gray-700 text-sm">
                Rh incompatibility occurs when a mother’s blood type is
                Rh-negative and the baby’s blood type is Rh-positive. The
                mother’s immune system may recognize the baby’s Rh-positive red
                blood cells as foreign and produce antibodies against them.
              </p>
            )}
          </div>

          {/* FAQ 2 */}
          <div className="bg-[#E6F9FC] rounded-md mb-3 transition">
            <div
              className="flex items-center justify-between hover:bg-[#D8F2F6] px-5 py-3 cursor-pointer"
              onClick={() => setOpen(open === 2 ? null : 2)}
            >
              <span className="text-[#009FB6] font-medium">
                How common is Rh incompatibility?
              </span>
              <span className="text-white bg-[#00B5D8] rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {open === 2 ? "−" : "+"}
              </span>
            </div>
            {open === 2 && (
              <p className="px-5 pb-3 text-gray-700 text-sm">
                About 15% of people are Rh-negative, so Rh incompatibility can
                occur in roughly 1 in 10 pregnancies.
              </p>
            )}
          </div>

          {/* FAQ 3 */}
          <div className="bg-[#E6F9FC] rounded-md mb-3 transition">
            <div
              className="flex items-center justify-between hover:bg-[#D8F2F6] px-5 py-3 cursor-pointer"
              onClick={() => setOpen(open === 3 ? null : 3)}
            >
              <span className="text-[#009FB6] font-medium">
                When does Rh incompatibility become a problem?
              </span>
              <span className="text-white bg-[#00B5D8] rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {open === 3 ? "−" : "+"}
              </span>
            </div>
            {open === 3 && (
              <p className="px-5 pb-3 text-gray-700 text-sm">
                It usually becomes an issue only after the mother has been
                exposed to Rh-positive blood — for example, during delivery,
                miscarriage, abortion, ectopic pregnancy, or certain prenatal
                procedures.
              </p>
            )}
          </div>

          {/* FAQ 4 */}
          <div className="bg-[#E6F9FC] rounded-md mb-3 transition">
            <div
              className="flex items-center justify-between hover:bg-[#D8F2F6] px-5 py-3 cursor-pointer"
              onClick={() => setOpen(open === 4 ? null : 4)}
            >
              <span className="text-[#009FB6] font-medium">
                What are the risks to the baby?
              </span>
              <span className="text-white bg-[#00B5D8] rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {open === 4 ? "−" : "+"}
              </span>
            </div>
            {open === 4 && (
              <p className="px-5 pb-3 text-gray-700 text-sm">
                If untreated, maternal antibodies can cross the placenta and
                destroy the baby’s red blood cells, causing hemolytic disease of
                the newborn (HDN) or erythroblastosis fetalis. This can lead to
                anemia, jaundice, heart failure, or even stillbirth in severe
                cases.
              </p>
            )}
          </div>

          {/* FAQ 5 */}
          <div className="bg-[#E6F9FC] rounded-md mb-3 transition">
            <div
              className="flex items-center justify-between hover:bg-[#D8F2F6] px-5 py-3 cursor-pointer"
              onClick={() => setOpen(open === 5 ? null : 5)}
            >
              <span className="text-[#009FB6] font-medium">
                How is Rh incompatibility detected?
              </span>
              <span className="text-white bg-[#00B5D8] rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {open === 5 ? "−" : "+"}
              </span>
            </div>
            {open === 5 && (
              <p className="px-5 pb-3 text-gray-700 text-sm">
                It’s detected through:<br />
                • Blood typing (to know Rh status)<br />
                • Indirect Coombs test (to check if the mother has developed Rh
                antibodies)
              </p>
            )}
          </div>

          {/* FAQ 6 */}
          <div className="bg-[#E6F9FC] rounded-md mb-3 transition">
            <div
              className="flex items-center justify-between hover:bg-[#D8F2F6] px-5 py-3 cursor-pointer"
              onClick={() => setOpen(open === 6 ? null : 6)}
            >
              <span className="text-[#009FB6] font-medium">
                How can Rh incompatibility be prevented?
              </span>
              <span className="text-white bg-[#00B5D8] rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {open === 6 ? "−" : "+"}
              </span>
            </div>
            {open === 6 && (
              <p className="px-5 pb-3 text-gray-700 text-sm">
                By giving an Rh immunoglobulin injection (RhIg or RhoGAM) to the
                Rh-negative mother:<br />
                • Around 28 weeks of pregnancy, and<br />
                • Within 72 hours after delivery of an Rh-positive baby.<br />
                Also after miscarriage, abortion, or invasive prenatal tests.
              </p>
            )}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={motherBaby2}
            alt="Mother with baby"
            className="w-[400px]sm:hidden md:w-[800px] object-contain"
          />
        </div>
      </div>
    </section>
  <section
      className="relative w-full bg-no-repeat bg-cover bg-center px-6 py-16"
      style={{
        backgroundImage: `url(${instabg})`,
      }}
    >
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#009FB6] mb-2">
          Our Awareness Initiatives
        </h2>
        <p className="text-gray-700">
          Join us in spreading awareness about blood group compatibility and maternal health.
        </p>
      </div>

      {/* Horizontal Scroll Carousel */}
      <div className="flex items-center justify-center space-x-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-20">
        {[insta1, insta2, insta3].map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-center    w-[280px] md:w-[320px] overflow-hidden"
          >
            <img
              src={img}
              alt={`Awareness ${index + 1}`}
              className="w-full h-[320px] object-cover"
            />
            <div className="p-4 text-center">
              {index === 0 && (
                <>
                  <h3 className="text-[#009FB6] font-semibold">
                    Follow Us on Instagram
                  </h3>
                  <p className="text-[#009FB6] font-medium">@Wellnesssakhi</p>
                  <p className="text-gray-600 text-sm mt-2">
                    Stay updated with health tips, expert advice, and Rh factor awareness.
                  </p>
                </>
              )}
              {index === 1 && (
                <>
                  <h3 className="text-[#009FB6] font-semibold">
                    Blood Group Awareness Week #BanoBloodSmart
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Driving conversations around critical health challenges.
                  </p>
                </>
              )}
              {index === 2 && (
                <>
                  <h3 className="text-[#009FB6] font-semibold">
                    Wellness Sakhi Teams Up with UNIMO
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Inspiring change through our social platforms.
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
     <footer className="bg-[#d8edf0] text-gray-700 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">
        {/* Left Section - Logo & Subscribe */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <img src={logo} alt="Wellness Sakhi" className="w-36"  />
          
          </div>

          <div className=" bg-[#00c4d6] rounded-full w-fit p-1 mb-4">
<a
  href="https://www.antid.com/wp-content/themes/antid/docs/Revised_AntiD%20150-300mcg-(Liquid)-Vial-PFS-Com-PI-for-Domestic-29-10-24-India%20sale-QR.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[#00c4d6] text-white font-medium px-6 py-2 rounded-full border-[2px] border-dotted border-white hover:bg-[#00b0c0] transition duration-300"
>
   Anti D PFS PI
</a>

          </div>
         
        </div>

        {/* Middle Section - Information */}
        <div>
          <h4 className="text-[#009FB6] font-semibold mb-3">Information</h4>
          <ul className="flex flex-col gap-3 text-sm cursor-pointer">
           <a href="https://www.antid.com/blood-groups-and-rh-factor/"><li>Blood Groups & Rh Factor</li></a>
           <a href="https://www.antid.com/what-is-rh-incompatibility/"><li>What is Rh Incompatibility?</li></a>
           <a href="https://www.antid.com/rh-incompatibility-in-pregnant-women/">
           <li>Rh Incompatibility in Pregnant Women</li></a>
            <a href="https://www.antid.com/risk-factors-complications/
">
  <li>Risk Factors & Complications</li></a> 
           <a href="https://www.antid.com/risk-factors-complications/
">
  <li>Treatment & Management</li>
</a>
         
          </ul>
        </div>

        {/* Right Section - Social Links */}
        <div>
          <h4 className="text-[#009FB6] font-semibold mb-3">Follow Us On</h4>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/wellness_sakhi"
              className="text-gray-700 hover:text-[#009FB6] text-xl transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/p/Wellness-Sakhi-61569493175245/"
              className="text-gray-700 hover:text-[#009FB6] text-xl transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/@WellnessSakhi"
              className="text-gray-700 hover:text-[#009FB6] text-xl transition-colors"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-6 border-t border-[#00B8D4] pt-4 text-center text-sm text-gray-600">
      <p className="text-center text-sm text-gray-600">
  <a
    href="#"
    className="hover:text-cyan-600 underline transition"
  >
    Privacy Policy
  </a>
  &nbsp; | &nbsp;
  <a
    href="#"
    className="hover:text-cyan-600 underline transition"
  >
    Terms & Conditions
  </a>
  &nbsp; | &nbsp;
  <a
    href="#"
    className="hover:text-cyan-600 underline transition"
  >
    Cookie Policy
  </a>
</p>

      </div>
    </footer>
    </div>
  );
}
