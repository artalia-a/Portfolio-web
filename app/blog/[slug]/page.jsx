"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blogs/${slug}`
        );
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setBlog(data.data || null);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchBlog();
  }, [slug]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (!blog) return <p className="text-center mt-20">Blog not found</p>;

  return (
    <div>
      <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-60">
        <Header />

        {/* Tombol Back */}
        <button
          onClick={() => router.back()}
          className="mt-30 px-4 py-2 border border-[#806D9C] bg-white text-[#806D9C] rounded-xl hover:bg-[#806D9C] hover:text-white transition"
        >
          ← Back
        </button>

        {/* Judul */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mt-8 mb-5">
          <h1>{blog.title}</h1>
        </div>

        {/* Info Author */}
        <div className="flex flex-wrap gap-2 sm:gap-4 items-center text-sm text-gray-700">
          <span className="text-[#6531b3] font-bold border border-[#806D9C] rounded-xl px-4 py-1">
            {blog.author}
          </span>

          <span className=" border border-[#806D9C] rounded-xl px-4 py-1">
            {new Date(blog.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="border border-[#806D9C] rounded-xl px-4 py-1">
            {blog.category}
          </span>
        </div>

        {/* Gambar */}
        <div className="my-6">
          <img
            src={
              blog.image
                ? `https://portfolio-api-production-709b.up.railway.app${blog.image}`
                : "/default-image.jpg"
            }
            alt={blog.title}
            className="w-full max-h-[500px] object-cover rounded-lg"
          />
        </div>

        {/* Konten */}
        <motion.div
          className="text-justify text-sm sm:text-base leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {blog.content.split("\n").map((paragraph, index) => (
            <p key={index} className="whitespace-pre-line mb-4">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <hr className="border-t-1 border-[#806D9C] mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-60" />
      </div>
      <div className="mx-30">
        <Footer />
      </div>
    </div>
  );
}
