---
title: "Website Speed for Contractors: Why Slow Sites Lose Calls and How to Fix Them"
seo_title: "Website Speed for Contractors: Why Slow Sites Lose Calls"
seo_description: "Website speed for contractors in plain English: Core Web Vitals, PageSpeed scores, and fixing the images, fonts, scripts and hosting that slow sites."
description: "A homeowner with a roof leak isn't going to wait for a slow website to load. Here is what website speed means for contractors, how Google measures it, what usually causes the problem, and what we found and fixed on our own site."
topic: "Website Design · Site Speed · Local SEO"
date: 2027-02-19T08:00:00-05:00
slug: website-speed-for-contractors
image: ''
---

A homeowner's water heater just failed.

They search "water heater repair near me" from the garage, standing in an inch of water. They tap the first plumber that looks good.

The page starts loading. A white screen. A spinning logo. A giant photo slowly filling in from the top.

They hit back.

They tap the next plumber.

**You never know that call existed.**

That's the problem with a slow website. It doesn't send you an error message. It doesn't show up as a lost lead in your CRM. It just quietly sends people to someone else.

This post covers website speed for contractors in plain English: why it matters, how Google measures it, what usually slows contractor sites down, and what we found and fixed on our own website.

## Why Speed Matters More for Contractors

Some websites can get away with being slow. A homeowner browsing furniture ideas on a Sunday afternoon might wait.

Home-service customers usually can't.

Think about who's searching for your services:

- Someone whose AC died on a hot afternoon.
- Someone with a septic backup.
- Someone with water coming through the ceiling after a storm.
- Someone whose refrigerator stopped working with a week of groceries inside.

They're on a phone. They might be on a weak cell signal. They're stressed. They have a list of options, and they're going down it fast.

A fast site gets them to your phone number before their patience runs out.

### Speed is also part of how Google evaluates pages

Google has said that page experience, including Core Web Vitals, is something its ranking systems look at. It's not the only factor, and great content on a slower page can still rank. But speed is one of the things you control, and it affects the customer either way.

## Core Web Vitals in Plain English

Core Web Vitals are Google's set of measurements for how a page feels to a real visitor. There are three.

### Largest Contentful Paint (LCP): "How fast does the main thing show up?"

LCP measures how long it takes for the largest visible element on the screen to appear. On most contractor homepages, that's the big headline or the hero image at the top.

Google's guidance is that a good LCP is 2.5 seconds or less.

If your hero image is a huge, uncompressed photo, LCP will usually suffer.

### Interaction to Next Paint (INP): "When I tap something, does it respond?"

INP measures how quickly the page responds when someone taps, clicks or types. If a visitor taps your menu and nothing happens for a moment, that's a responsiveness problem.

Google's guidance is that a good INP is 200 milliseconds or less.

Heavy scripts, chat widgets and tracking code are common causes of poor responsiveness.

### Cumulative Layout Shift (CLS): "Does the page jump around?"

CLS measures how much the page shifts while it loads. You've seen this: you go to tap a button, an image loads above it, the whole page jumps, and you tap something else.

Google's guidance is that a good CLS is 0.1 or less.

Images without set dimensions, late-loading banners and pop-ups are common causes.

## How to Check Your Speed

You can check your own site in a few minutes.

### Google PageSpeed Insights

Go to PageSpeed Insights, enter your website address and run the test. You'll get scores for mobile and desktop.

Look at the **mobile** results first. Mobile tests simulate a slower phone and network, which is closer to how many of your customers actually see your site.

You'll see two kinds of data:

- **Field data**, from real Chrome users visiting your site, if Google has enough of it. Smaller sites often won't have enough traffic for this to appear.
- **Lab data**, from a simulated test run at that moment. This is where the performance score comes from.

The performance score is useful as a rough guide, and it can vary a bit from run to run. Don't panic over a few points of difference. Focus on the specific problems it lists.

### Lighthouse

Lighthouse is built into Chrome's developer tools and runs similar tests, plus audits for SEO, accessibility and best practices. On our own site, every page we tested scored 100 on the Lighthouse SEO audit. Speed is a separate score, and it's often the harder one.

### Your own phone

The simplest test: pull up your site on your phone, on cellular data, not Wi-Fi. How long before you can see what you do and how to call? Be honest.

## What We Found on Our Own Website

We'd rather show you a real problem than describe a hypothetical one.

When we tested our own site, knoxlinesystems.com, the Google PageSpeed **mobile performance score was 76** before we made speed fixes.

Not terrible. Not good enough either.

The biggest issue was about **2.1 seconds of render-blocking requests**, and most of that came from **Google Fonts**.

### What "render-blocking" means

When a browser loads a page, some files have to finish downloading before the browser will show anything. Those are render-blocking.

Our site was loading fonts from Google's servers. The browser had to reach out to another server, download the font instructions, then download the fonts themselves, all before it would paint the page properly. On a simulated mobile connection, that added up.

The visitor sees a blank or half-loaded screen while that happens.

### What we changed

We made three main fixes:

1. **Self-hosted the fonts with preload.** Instead of fetching fonts from Google's servers, we serve them from our own site and tell the browser to start downloading them right away. That removes the extra trips to another server.
2. **Loaded analytics after the page.** Analytics scripts don't need to run before the visitor sees anything. We moved them so they load after the page content is ready.
3. **Made the main headline paint immediately.** The most important thing at the top of the page now shows up right away, instead of waiting on fonts or other files.

These are the kinds of fixes that are straightforward on a hand-built site, because we control every file and the order it loads in. On many template platforms, fonts and scripts are loaded by the platform, and you can't change how.

We're not going to quote a final live score here. Scores vary between test runs, and the honest point is the process: find the biggest bottleneck, fix it, test again.

## The Usual Suspects on Contractor Websites

Here's what we most often find slowing down home-service websites.

### 1. Huge images

This is the most common problem by far. A photo straight off a phone or a professional camera can be enormous. Uploading it directly to the website means every visitor downloads the full-size file, even on a small phone screen.

**Fixes:**

- Resize images to the size they actually display.
- Compress them.
- Use modern formats like WebP where supported.
- Serve smaller versions to phones.
- Lazy-load images further down the page so they only load when the visitor scrolls to them.
- Set width and height on images so the page doesn't jump around while they load.

### 2. Background video

A slow-motion video of a crew installing a roof looks great on a desktop with fast Wi-Fi. On a phone with two bars, it's a heavy file that delays everything else.

**Fixes:**

- Consider a strong still photo instead.
- If you keep video, make it small, compressed and loaded after the main content.
- Don't autoplay large video at the top of mobile pages.

### 3. Fonts

As we found on our own site, fonts can be a real bottleneck.

**Fixes:**

- Self-host fonts instead of loading from a third-party server.
- Preload the main font files.
- Use only the font weights and styles you actually need. Every extra weight is another file.
- Use font settings that let text appear immediately with a fallback font while the custom font loads.

### 4. Scripts and plugins

Chat widgets, review widgets, tracking pixels, social feeds, slider plugins, popup tools. Each one adds code. Together, they can slow a page down badly and hurt responsiveness.

**Fixes:**

- Audit every script. If it isn't earning its keep, remove it.
- Load non-essential scripts after the page content.
- Replace heavy plugins with simple code where possible.

### 5. Page builders and bloated themes

Many template and page-builder sites load a large amount of code on every page, whether that page uses it or not. That's one of the main reasons we hand-build sites in HTML and CSS. A hand-built page loads what it needs and nothing else.

### 6. Slow or overloaded hosting

Cheap shared hosting can be slow to respond, especially when lots of sites share the same server.

**Fixes:**

- Use reliable hosting suited to your site.
- For static sites, serving files from a content delivery network can help pages load quickly for visitors in different places.
- Make sure caching is set up so returning visitors don't download everything again.

## Speed and Mobile Go Together

Speed problems are almost always worse on phones. Slower processors, weaker connections, smaller screens.

That's why we test on mobile first. A site that feels fine on your office computer may feel sluggish on a technician's phone in a rural part of your service area.

We covered the rest of the mobile picture (tap-to-call, thumb-friendly buttons, readable text, no sideways scrolling) in [Contractor Website Mobile Optimization: What Most Sites Get Wrong](/blog/contractor-website-mobile-optimization/).

## A Simple Speed Checklist

Run through this list for your own site:

- Mobile PageSpeed test run, and top issues noted.
- Hero image compressed and sized for mobile.
- All images resized, compressed and lazy-loaded below the fold.
- Image dimensions set to prevent layout shifts.
- No large autoplay video at the top of mobile pages.
- Fonts self-hosted, preloaded and limited to the weights you use.
- Analytics and non-essential scripts loaded after the page.
- Unused plugins and widgets removed.
- Phone number visible and tappable without waiting for the full page.
- Hosting reliable, with caching in place.
- Tested on a real phone over cellular data.

## What Speed Won't Fix

Speed matters. But it's one piece of a working website.

A fast site with vague service pages, a buried phone number and no reviews still won't win many calls. Speed makes sure people stay long enough to see what you offer. The rest of the site has to convince them to call.

And speed improvements won't guarantee better rankings. They remove a problem. Strong content, a well-managed Google Business Profile and real reviews still do the heavy lifting in local search. Organic SEO usually takes months to show clear movement, and about six months is a fair expectation. We showed what that early movement looked like for us in [What Our Own Search Console Data Taught Us About Local SEO](/blog/what-our-search-console-taught-us/).

## Frequently Asked Questions

### What is a good PageSpeed score for a contractor website?

Higher is better, but don't chase a perfect number at the expense of everything else. Focus on fixing the specific problems the test lists, especially render-blocking files, oversized images and heavy scripts. The goal is a site that loads fast for real visitors on phones.

### Why is my mobile score lower than my desktop score?

The mobile test simulates a slower device and network. Most sites score lower on mobile. That's also why the mobile score is the one to pay closest attention to.

### Does website speed affect Google rankings?

Google says page experience, including Core Web Vitals, is considered by its ranking systems. It's one factor among many. Relevant, helpful content still matters more, but speed affects whether visitors stay.

### Can I fix speed on Wix or Squarespace?

You can improve some things, like image sizes and removing unnecessary elements. But on many platforms, you can't control how core files, fonts and scripts load. That's a big part of why we build sites by hand.

## Stop Losing Calls You Never Knew About

A slow website loses customers quietly. No complaint, no voicemail, no lead. Just a homeowner who tapped back and called someone else.

The fix usually isn't mysterious. Find the biggest bottleneck. Fix it. Test again. Repeat.

At Knoxline Systems, we hand-build fast websites in pure HTML and CSS for home-service businesses across the Southeast, so we control every file and how it loads. If you want to know what's slowing your site down, take a look at our [website design service](/websites.html) or [contact us](/contact.html) and we'll run a speed review on your current site.
