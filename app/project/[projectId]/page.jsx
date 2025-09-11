"use client";
import React from "react";
import projects from "../../data/project.json";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { motion } from "framer-motion";
import { notFound, useParams, useRouter } from "next/navigation";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const project = projects.find((p) => String(p.id) === params.projectId);
  if (!project) return notFound();

  return (
    <>
      <Header />
      <div className="px-4 sm:px-8 lg:mx-30 mt-30">
        <button
          onClick={() => router.back()} // ✅ kembali ke halaman sebelumnya
          className="mb-6 px-4 py-2 border border-[#806D9C] bg-white text-[#806D9C] rounded-xl hover:bg-[#806D9C] hover:text-white outline-2 outline-transparent hover:outline-[#806D9C] transition"
        >
          ← Back
        </button>
        {/* Bagian atas (image + detail) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-30">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <Image
              src={project.foto}
              alt={project.title}
              width={500}
              height={500}
              className="w-full rounded-lg"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
          <motion.div
            className="flex flex-col justify-center items-start"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              {project.title}
            </h1>
            <p className="mb-5 italic text-sm sm:text-base">
              {project.role} - {project.year}
            </p>
            <p className="mb-4 text-sm sm:text-base text-gray-700 text-justify md:pr-10">
              {project.description}
            </p>
            <div className="mt-5">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base bg-[#806D9C] text-white py-2 px-6 rounded-2xl hover:bg-white hover:text-[#806D9C] outline-2 outline-transparent hover:outline-[#806D9C] transition"
              >
                View Full Project
              </a>
            </div>
          </motion.div>
        </div>

        <hr className="border-t-1 border-[#806D9C]" />

        {/* Features */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <p className="font-bold text-xl sm:text-2xl text-center">
            High Quality Awesome{" "}
            <span className=" text-[#6531b3]">{project.title}</span> Features{" "}
            <br className="hidden sm:block" /> You Will Impress
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {project.fitur.map((item, index) => (
              <div
                key={index}
                className="rounded-lg shadow-xl p-6 sm:p-10 text-center flex flex-col justify-start"
              >
                <h3 className="text-base font-semibold mb-2 text-[#6531b3]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 items-center"
        >
          {project.contibution?.map((con, i) => (
            <React.Fragment key={i}>
              <div className="flex justify-center">
                <img
                  src={con.image}
                  alt="Contribution"
                  className="w-full max-w-sm rounded-lg"
                />
              </div>
              <div className="rounded-lg shadow-xl p-6 sm:p-10">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  My Contributions
                </h2>
                <ul className="space-y-4">
                  {con.list.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-[#806D9C] text-white rounded-full text-sm font-bold">
                        {idx + 1}
                      </div>
                      <p className="text-sm sm:text-base text-gray-700">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </React.Fragment>
          ))}
        </motion.div>

        {/* Overview */}
        <motion.div
          className="rounded-lg p-6 sm:p-10 mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <p className="text-lg sm:text-xl font-semibold mb-6 sm:mb-10">
            Project Overview
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {project.images?.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={project.title + i}
                width={500}
                height={500}
                className="rounded-xl"
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div>
        <hr className="border-t-1 border-[#806D9C] mx-4 sm:mx-8 lg:mx-30" />
        <Footer />
      </div>
    </>
  );
}
