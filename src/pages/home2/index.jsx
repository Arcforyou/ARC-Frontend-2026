@@ .. @@
 import React from 'react';
+import { useEffect } from 'react';
+import { gsap } from 'gsap';
+import { ScrollTrigger } from 'gsap/ScrollTrigger';
 import './home2.scss';
 
+gsap.registerPlugin(ScrollTrigger);
+
 const Home2 = () => {
+  useEffect(() => {
+    // Animate sections on scroll
+    gsap.fromTo('.animate-section', 
+      {
+        opacity: 0,
+        y: 60
+      },
+      {
+        opacity: 1,
+        y: 0,
+        duration: 1,
+        ease: "power2.out",
+        stagger: 0.3,
+        scrollTrigger: {
+          trigger: '.animate-section',
+          start: 'top 80%',
+          toggleActions: 'play none none reverse'
+        }
+      }
+    );
+
+    // Animate cards with stagger
+    gsap.fromTo('.animate-card',
+      {
+        opacity: 0,
+        y: 40,
+        scale: 0.9
+      },
+      {
+        opacity: 1,
+        y: 0,
+        scale: 1,
+        duration: 0.8,
+        ease: "power2.out",
+        stagger: 0.15,
+        scrollTrigger: {
+          trigger: '.animate-card',
+          start: 'top 85%',
+          toggleActions: 'play none none reverse'
+        }
+      }
+    );
+
+    // Animate testimonial cards
+    gsap.fromTo('.testimonial-card',
+      {
+        opacity: 0,
+        x: 50
+      },
+      {
+        opacity: 1,
+        x: 0,
+        duration: 0.6,
+        ease: "power2.out",
+        stagger: 0.1,
+        scrollTrigger: {
+          trigger: '.testimonials-section',
+          start: 'top 80%',
+          toggleActions: 'play none none reverse'
+        }
+      }
+    );
+
+    return () => {
+      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
+    };
+  }, []);
+
   return (
     <div className="home2-container">
       {/* Header */}
-      <header className="header">
+      <header className="header animate-section">
         <div className="container">
           <div className="nav">
             <div className="logo">
@@ -67,7 +139,7 @@ const Home2 = () => {
       </header>
 
       {/* Hero Section */}
-      <section className="hero">
+      <section className="hero animate-section">
         <div className="container">
           <div className="hero-content">
             <div className="hero-left">
@@ -106,7 +178,7 @@ const Home2 = () => {
       </section>
 
       {/* Testimonials Section */}
-      <section className="testimonials-section">
+      <section className="testimonials-section animate-section">
         <div className="container">
           <div className="testimonials-header">
             <h2>What Our Traders Say</h2>
@@ -162,7 +234,7 @@ const Home2 = () => {
       </section>
 
       {/* Trading Plans Section */}
-      <section className="trading-plans">
+      <section className="trading-plans animate-section">
         <div className="container">
           <h2 className="section-title">Choose Your Trading Challenge</h2>
           
           {/* Challenge Types */}
           <div className="challenge-types">
-            <div className="challenge-card instant">
+            <div className="challenge-card instant animate-card">
               <div className="challenge-header">
                 <h3>Instant Funding</h3>
                 <span className="badge">Most Popular</span>
@@ -179,7 +251,7 @@ const Home2 = () => {
               </div>
               <button className="cta-button">Get Instant Funding</button>
             </div>
-            <div className="challenge-card evaluation">
+            <div className="challenge-card evaluation animate-card">
               <div className="challenge-header">
                 <h3>2-Step Evaluation</h3>
                 <span className="badge evaluation-badge">Traditional</span>
@@ -194,7 +266,7 @@ const Home2 = () => {
           
           {/* Trading Plans Table */}
           <div className="plans-table">
-            <div className="account-header starter">
+            <div className="account-header starter animate-card">
               <h3>Starter</h3>
               <div className="price">$89</div>
               <div className="account-size">$10,000 Account</div>
             </div>
-            <div className="account-header professional">
+            <div className="account-header professional animate-card">
               <h3>Professional</h3>
               <div className="price">$189</div>
               <div className="account-size">$25,000 Account</div>
             </div>
-            <div className="account-header expert">
+            <div className="account-header expert animate-card">
               <h3>Expert</h3>
               <div className="price">$389</div>
               <div className="account-size">$50,000 Account</div>
             </div>
-            <div className="account-header master">
+            <div className="account-header master animate-card">
               <h3>Master</h3>
               <div className="price">$689</div>
               <div className="account-size">$100,000 Account</div>
@@ -218,7 +290,7 @@ const Home2 = () => {
             
             <div className="table-row">
               <div className="table-label">Profit Target</div>
-              <div className="table-cell">8%</div>
-              <div className="table-cell">8%</div>
-              <div className="table-cell">8%</div>
-              <div className="table-cell">8%</div>
+              <div className="table-cell animate-card">8%</div>
+              <div className="table-cell animate-card">8%</div>
+              <div className="table-cell animate-card">8%</div>
+              <div className="table-cell animate-card">8%</div>
             </div>
             
             <div className="table-row">
               <div className="table-label">Max Daily Loss</div>
-              <div className="table-cell">5%</div>
-              <div className="table-cell">5%</div>
-              <div className="table-cell">5%</div>
-              <div className="table-cell">5%</div>
+              <div className="table-cell animate-card">5%</div>
+              <div className="table-cell animate-card">5%</div>
+              <div className="table-cell animate-card">5%</div>
+              <div className="table-cell animate-card">5%</div>
             </div>
             
             <div className="table-row">
               <div className="table-label">Max Total Loss</div>
-              <div className="table-cell">10%</div>
-              <div className="table-cell">10%</div>
-              <div className="table-cell">10%</div>
-              <div className="table-cell">10%</div>
+              <div className="table-cell animate-card">10%</div>
+              <div className="table-cell animate-card">10%</div>
+              <div className="table-cell animate-card">10%</div>
+              <div className="table-cell animate-card">10%</div>
             </div>
             
             <div className="table-row">
               <div className="table-label">Profit Split</div>
-              <div className="table-cell">80%</div>
-              <div className="table-cell">80%</div>
-              <div className="table-cell">85%</div>
-              <div className="table-cell">90%</div>
+              <div className="table-cell animate-card">80%</div>
+              <div className="table-cell animate-card">80%</div>
+              <div className="table-cell animate-card">85%</div>
+              <div className="table-cell animate-card">90%</div>
             </div>
             
             <div className="table-row">
               <div className="table-label">Trading Period</div>
-              <div className="table-cell">Unlimited</div>
-              <div className="table-cell">Unlimited</div>
-              <div className="table-cell">Unlimited</div>
-              <div className="table-cell">Unlimited</div>
+              <div className="table-cell animate-card">Unlimited</div>
+              <div className="table-cell animate-card">Unlimited</div>
+              <div className="table-cell animate-card">Unlimited</div>
+              <div className="table-cell animate-card">Unlimited</div>
             </div>
             
             <div className="table-row cta-row">
               <div className="table-label"></div>
-              <div className="table-cell">
+              <div className="table-cell animate-card">
                 <button className="cta-button">Get Started</button>
               </div>
-              <div className="table-cell">
+              <div className="table-cell animate-card">
                 <button className="cta-button">Get Started</button>
               </div>
-              <div className="table-cell">
+              <div className="table-cell animate-card">
                 <button className="cta-button">Get Started</button>
               </div>
-              <div className="table-cell">
+              <div className="table-cell animate-card">
                 <button className="cta-button">Get Started</button>
               </div>
             </div>
@@ -277,7 +349,7 @@ const Home2 = () => {
       </section>
 
       {/* Footer */}
-      <footer className="footer">
+      <footer className="footer animate-section">
         <div className="container">
           <div className="footer-content">
             <div className="footer-section">