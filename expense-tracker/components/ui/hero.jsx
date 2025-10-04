"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button.jsx";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const imageElement = imageRef.current;
    if (!imageElement) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden bg-white">
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h1
          className="gradient-title"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            fontWeight: '800'
          }}
        >
          Manage Your Finances <br /> with Intelligence
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#6b7280',
          marginBottom: '2rem',
          maxWidth: '700px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <Link href="/dashboard">
              <button className="btn-primary">
                Get Started
              </button>
            </Link>
            <Link href="https://www.youtube.com/roadsidecoder">
              <button className="btn-outline">
                Watch Demo
              </button>
            </Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              style={{
                borderRadius: '12px',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
                border: '1px solid #e5e7eb',
                width: '100%',
                height: 'auto',
                maxWidth: '1000px'
              }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;