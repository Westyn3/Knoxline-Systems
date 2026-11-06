---
title: "Schema Markup for Local Service Businesses, Explained in Plain English"
seo_title: "Schema Markup for Local Service Businesses, in Plain English"
seo_description: "Schema markup for local service businesses in plain English: LocalBusiness, areaServed, hours, sameAs, breadcrumbs, FAQ and Article, plus how to test it."
description: "Schema markup sounds technical, but the idea is simple: it describes your business to Google in a format machines can read. Here is what home-service businesses should include, how to test it, and what we set up on our own site, which passed with zero errors."
topic: "Structured Data · Local SEO · Website Design"
date: 2026-12-11T08:00:00-05:00
slug: schema-markup-for-local-service-businesses
image: ''
---

Your website says, in plain English, "We're a plumbing company in Knoxville. We're open Monday through Friday. We serve Farragut, Maryville and Oak Ridge."

A person reads that and understands it right away.

Google can usually figure it out too. But "usually" is doing a lot of work in that sentence.

Schema markup removes the guesswork.

It is a small block of code on your website that says the same things your page says, in a labeled, standard format search engines are built to read. Business name: this. Phone: this. Hours: these. Service areas: these.

If you run a roofing, septic, HVAC, plumbing or other home-service business, you don't need to become a developer to understand it. You just need to know what it is, what it should include, and how to check that it is working.

That is what this post covers. We'll also show you exactly what we set up on our own site at Knoxline Systems in October 2026, which passed Google's Rich Results Test and the Schema.org validator with **zero errors.**

## What Schema Markup Actually Is

Schema markup is a type of **structured data.** "Structured" just means the information is organized into labeled fields instead of written as normal sentences.

The labels come from **Schema.org**, a shared vocabulary that the major search engines support. It has standard names for things like a business, its address, its opening hours, an article, a breadcrumb trail and a list of FAQs.

Here is the difference in practice.

**Normal web page text:**

> Open Monday through Friday, 7 AM to 6 PM.

**The same thing as structured data:**

```json
"openingHoursSpecification": {
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  "opens": "07:00",
  "closes": "18:00"
}
```

Same information. One version is written for people. The other is written for machines.

Your visitors never see the structured data. It sits in the code of the page.

## Why It Matters for Local Service Businesses

Google says structured data helps it understand the content of a page, and that certain types of structured data can make a page **eligible** for special search features, often called rich results.

Two important words there: "understand" and "eligible."

Schema markup is not a magic ranking switch. Adding it does not guarantee better positions or any special display in search results. Google decides what to show.

What it does is make your business information clear and unambiguous. For a local service business, that is worth a lot, because so much of local search depends on Google being confident about:

- what kind of business you are,
- where you are and where you work,
- when you are open,
- and which other profiles on the web belong to you.

Schema markup is also one more way to reinforce consistency. If your website text, your Google Business Profile and your structured data all say the same thing, that is a clear, consistent picture of one real business. We wrote about that in [Why Your Website Should Match Your Google Business Profile 100%](/blog/match-website-to-google-business-profile/).

## The Format: JSON-LD

There are a few ways to add structured data to a page. The one Google recommends is called **JSON-LD.**

You don't need to remember the name. What matters is that JSON-LD sits in its own block of code, separate from the visible page. That makes it clean to add, easy to update and less likely to break your design.

When we hand-build websites in HTML and CSS, we write the JSON-LD directly into each page. That gives us full control over every field, which is one reason we prefer hand-built sites over most templates and page builders.

## The Business Schema: LocalBusiness and Its Subtypes

The most important schema for a local service business describes the business itself.

Schema.org has a general type called **LocalBusiness**, plus more specific subtypes. A few that home-service businesses commonly use:

- **Plumber**
- **RoofingContractor**
- **HVACBusiness**
- **Electrician**
- **GeneralContractor**
- **HomeAndConstructionBusiness**, a broader type for home-service work
- **ProfessionalService**, for professional service firms

Pick the most specific type that accurately describes your business. If nothing fits exactly, a broader type is fine. A septic company, for example, might use HomeAndConstructionBusiness or LocalBusiness.

Our own site uses **ProfessionalService**, because Knoxline Systems is a consulting, website and marketing firm, not a contractor.

### The fields that matter most

Here are the properties we focus on for local service businesses, in plain English.

**name and legalName.** Your business name, and your legal name if it is different. These should match your Google Business Profile and your website.

**telephone.** Your main business number. Same one as everywhere else.

**url and logo.** Your website address and a link to your logo image.

**address.** Your business address. If you are a service-area business that hides your address on Google, think carefully about how you handle this. Keep your structured data consistent with how you present your business publicly.

**openingHoursSpecification.** Your hours, day by day, in a standard format.

**areaServed.** The cities, counties or regions you serve. For a home-service company, this is one of the most useful fields, because it states your service area directly.

**sameAs.** Links to other official profiles that represent the same business: your Google Business Profile, Facebook page, LinkedIn and so on. This is how you tell search engines, "These are all us."

**founder and foundingDate.** Who started the business and when. Optional, but useful for establishing who is behind the company.

### A simplified example

Here is a simplified example for a made-up plumbing company. The business, phone number and links are placeholders, not a real company.

```json
{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Example Plumbing",
  "legalName": "Example Plumbing, LLC",
  "url": "https://www.example.com/",
  "logo": "https://www.example.com/images/logo.png",
  "telephone": "+1-865-555-0100",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "07:00",
    "closes": "18:00"
  },
  "areaServed": [
    { "@type": "City", "name": "Knoxville" },
    { "@type": "City", "name": "Farragut" },
    { "@type": "City", "name": "Maryville" }
  ],
  "sameAs": [
    "https://www.facebook.com/exampleplumbing",
    "https://maps.google.com/?cid=0000000000000000000"
  ]
}
```

Don't copy this into your site as-is. The point is to see the shape. Every value in your real schema should be accurate and should match what is visible on your website and your Google Business Profile.

## The sameAs Link to Your Google Business Profile

This one deserves its own section, because it is one of the most useful things a local business can add and one of the most often skipped.

The sameAs property lists other web pages that represent the same business. When you include a link to your Google Business Profile there, you are pointing directly from your website to your profile.

A tip: use a **permanent Google Maps link** to your profile rather than a long URL copied from your browser bar after a search. Search URLs can include temporary details. A stable link is cleaner and more reliable.

On our own site, sameAs includes a permanent Google Maps link to our Business Profile, alongside our other official profiles.

## WebSite Schema

WebSite schema describes your website as a whole: its name and its main URL.

It is a small block, and it helps Google understand the name of your site. It usually lives on the homepage.

## Breadcrumbs

Breadcrumbs are the little trail that shows where a page sits on your site. For example:

**Home › Services › Septic Pumping**

**Home › Blog › How Often Should You Pump a Septic Tank?**

BreadcrumbList schema describes that trail in structured data. It helps Google understand how your pages are organized, and Google may use it in how your page is displayed in search results.

For home-service sites with service pages, area pages and blog posts, breadcrumbs make the structure clear. We add them to both pages and posts.

## Article Schema for Blog Posts

If you publish blog posts, Article schema describes each one: the headline, the author, the publish date, the image and the publisher.

It helps Google understand that the page is an article, who wrote it and when it was published.

We add Article schema to every post on our site.

## FAQ Schema

FAQ schema marks up a list of questions and answers on a page.

Many home-service service pages have a short FAQ section: "How often should I pump my septic tank?" "Do you offer emergency service?" "What areas do you serve?" FAQPage schema describes those questions and answers in structured data.

An honest note here: Google has limited when it shows FAQ rich results in search, and most business websites should not expect to see the expandable question dropdowns in Google results. We still add FAQ schema to service pages because it accurately describes the content on the page. But we don't promise any special display from it, and neither should anyone else.

The important rule for FAQ schema, and for all structured data: **the questions and answers in the markup must match what is visible on the page.** Don't mark up content visitors can't see.

## The Rules That Keep Schema Honest

Google has guidelines for structured data. The short version:

- **Mark up what is actually on the page.** Structured data should describe visible content, not hidden claims.
- **Be accurate.** Your hours, phone and service areas should be true and current.
- **Don't mark up fake reviews or ratings.** Never add review or rating data you made up.
- **Keep it up to date.** If your hours change, update the structured data along with the visible text and your Google Business Profile.

Structured data that misrepresents a business can do more harm than good. The goal is clarity, not tricks.

## How to Test Your Schema Markup

This is the part most business owners can do themselves.

### Google's Rich Results Test

Google's Rich Results Test checks a page for structured data that Google supports for rich results. You paste in your page URL, and it shows what it found and whether there are errors or warnings.

Use it to check your homepage, a service page and a blog post.

### The Schema.org Validator

The Schema.org validator checks your structured data against the full Schema.org vocabulary, not just the types Google uses for rich results. It is useful for catching mistakes in fields Google's tool doesn't focus on, like areaServed or founder.

### Search Console

Once your site is in Google Search Console, it can show reports on certain kinds of structured data it has found on your site, along with any issues. It is worth checking after any big change.

### Errors versus warnings

**Errors** usually mean something is broken or missing and needs to be fixed. **Warnings** often mean an optional field is missing. Fix errors first. Then decide whether the warnings matter for your business.

## What We Set Up on Our Own Site

In October 2026, we rebuilt the structured data on knoxlinesystems.com. Here is exactly what is on the site now:

- **Business schema (ProfessionalService)** with our legal name, hours, service areas, logo, founder and founding date.
- **sameAs** links, including a permanent Google Maps link to our Google Business Profile.
- **WebSite schema** for the site.
- **Breadcrumbs** on pages and posts.
- **Article schema** on blog posts.
- **FAQ schema** on service pages.

We tested it with **Google's Rich Results Test** and the **Schema.org validator.** Both returned **zero errors.**

We also matched every value to our Google Business Profile: the legal name "Knoxline Systems, LLC," our hours of Monday through Friday, 7 AM to 6 PM, and the same 20 service areas listed on our profile.

That's the point of doing it carefully. The structured data, the visible page and the Google Business Profile all say the same thing.

## Where Schema Fits in the Bigger Picture

Schema markup is one piece of a strong local foundation. It works alongside:

- a fast website with a clear page for each service,
- honest service area pages,
- a complete and accurate Google Business Profile,
- a steady flow of real customer reviews,
- and business information that matches everywhere.

We walked through that full system for one trade in [Septic Company SEO: The Complete Local Playbook](/blog/septic-company-seo-guide/), and the website side in [Website Design for Contractors in Knoxville](/blog/website-design-for-contractors-knoxville/).

Schema alone won't make a weak website rank. But on a strong website, it removes ambiguity and helps make sure Google understands exactly what your business is.

## Frequently Asked Questions

### What is schema markup in simple terms?

It is code on your website that describes your business, pages and content in a standard, labeled format search engines can read. Visitors don't see it. Search engines use it to better understand your site.

### Does schema markup help my business rank higher?

Google says structured data helps it understand your content and can make pages eligible for certain rich results. It is not a guarantee of better rankings. Think of it as part of a clean, consistent foundation rather than a shortcut.

### What schema type should a home-service business use?

Use the most specific accurate type, such as Plumber, RoofingContractor, HVACBusiness, Electrician or GeneralContractor. If none fits, HomeAndConstructionBusiness or LocalBusiness works.

### How do I check if my website has schema markup?

Run your page through Google's Rich Results Test and the Schema.org validator. Both will show what structured data they find and whether there are errors.

### Can I add schema markup to a Wix or Squarespace site?

Many website builders allow some structured data, but control varies. With a hand-built site, we write the structured data directly and control every field.

## Let Us Handle the Code

You shouldn't have to learn JSON-LD to run a roofing or septic company.

At Knoxline Systems, structured data is part of every website we build: business schema, service areas, hours, sameAs links to your Google Business Profile, breadcrumbs, Article and FAQ schema, all matched to your real business and tested before it goes live.

See how we build [websites for home-service businesses](/websites.html), or [contact Knoxline Systems](/contact.html) and we'll run your current site through the same tests we used on ours and tell you what we find.
