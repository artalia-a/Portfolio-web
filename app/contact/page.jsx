"use client";
import React from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import WhatsApp from "../assets/whatsapp.svg";
import Linkedin from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <Header />

      <motion.div
        className="px-4 sm:px-10 md:px-20 lg:px-30 mt-60"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        {/* Judul */}
        <p className="text-3xl sm:text-3xl font-bold leading-snug">
          I’d love to hear from you!
          <br className="hidden sm:block" />
          Feel free to say hi via email or social media
        </p>

        {/* Email + Icon Sosmed */}
        <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Button Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=artini.artalia501@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base bg-[#806D9C] text-white py-2 px-6 rounded-2xl hover:bg-white hover:text-[#806D9C] outline-2 outline-transparent hover:outline-[#806D9C] transition text-center"
          >
            artini.artalia501@gmail.com
          </a>

          {/* Ikon Sosial Media */}
          <div className="flex items-center gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6283119679411"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#806D9C] rounded-full p-2 hover:bg-white hover:outline-2 hover:outline-[#806D9C] outline-transparent transition group"
            >
              <Image
                src={WhatsApp}
                alt="WhatsApp"
                width={20}
                height={20}
                className="invert transition group-hover:invert-0 group-hover:brightness-0 group-hover:[filter:invert(25%)_sepia(13%)_saturate(800%)_hue-rotate(230deg)_brightness(95%)_contrast(90%)]"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/artini-artalia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#806D9C] rounded-full p-2 hover:bg-white hover:outline-2 hover:outline-[#806D9C] outline-transparent transition group"
            >
              <Image
                src={Linkedin}
                alt="Linkedin"
                width={20}
                height={20}
                className="invert transition group-hover:invert-0 group-hover:brightness-0 group-hover:[filter:invert(25%)_sepia(13%)_saturate(800%)_hue-rotate(230deg)_brightness(95%)_contrast(90%)]"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/artini.artalia?igsh=MWE3bDlqMG90azFncw=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#806D9C] rounded-full p-2 hover:bg-white hover:outline-2 hover:outline-[#806D9C] outline-transparent transition group"
            >
              <Image
                src={Instagram}
                alt="Instagram"
                width={20}
                height={20}
                className="invert transition group-hover:invert-0 group-hover:brightness-0 group-hover:[filter:invert(25%)_sepia(13%)_saturate(800%)_hue-rotate(230deg)_brightness(95%)_contrast(90%)]"
              />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="px-4 sm:px-10 md:px-20 lg:px-30 mt-60">
        <hr className="border-t-1 border-[#806D9C] mb-8" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
