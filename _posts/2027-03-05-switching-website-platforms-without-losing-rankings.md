---
title: "Moving Off Wix or Squarespace Without Losing Your Google Rankings"
seo_title: "Move Off Wix or Squarespace Without Losing Rankings"
seo_description: "A checklist for switching website platforms without losing Google rankings: URL inventory, 301 redirects, metadata, sitemap and Search Console."
description: "Switching from Wix or Squarespace to a faster site can help a home-service business, but a careless move can erase years of search visibility. Here is the migration checklist we use to protect your rankings."
topic: "Website Migration · Local SEO · Website Design"
date: 2027-03-05T08:00:00-05:00
slug: switching-website-platforms-without-losing-rankings
image: ''
---

Here's how a website move goes wrong.

The old website was slow. The new website looks great. Launch day goes smoothly.

Then, a few weeks later, the phone gets quieter.

Nobody can explain why.

The new site is better in almost every way. But the move itself broke something. Old pages that Google had been sending people to for years now lead nowhere. The links in the Google Business Profile point to a page that no longer exists. Titles and descriptions that were quietly doing their job got replaced with defaults.

**A new website doesn't lose rankings. A careless migration does.**

The good news is that moving off Wix or Squarespace is very manageable when you do it in the right order. Last week we compared [Wix, Squarespace, Google Sites, WordPress and hand-built sites](/blog/wix-squarespace-wordpress-or-hand-built/). This week is the practical follow-up: if you've decided to switch, here's how to do it without throwing away what your current site has already earned.

## Why Rankings Drop After a Website Switch

Google doesn't rank "your business." It ranks individual pages.

Over time, specific URLs on your site build up history. A page like yoursite.com/septic-pumping might be the one Google shows when someone searches for septic pumping in your area. Other websites may link to it. Your Google Business Profile may link to it. Customers may have bookmarked it.

When you move platforms, URLs often change. Wix and Squarespace each have their own URL habits, and a new site almost always has its own structure.

If the old URL simply disappears, Google hits a dead end. Over time it may drop that page from results. The history attached to it doesn't automatically transfer to your new page just because the new page says similar things.

That's the core problem. Almost everything in this checklist exists to solve it.

## Step 1: Take a Full Inventory of Your Current URLs

Before anyone touches the new site, write down every page on the old one.

Not just the pages in your menu. Every page.

Places to find them:

- **Your current sitemap.** Most builder sites publish one, often at /sitemap.xml.
- **Google Search Console.** The Pages report and Performance report show URLs Google knows about and URLs that get impressions.
- **A site: search in Google.** Search site:yourdomain.com to see what Google has indexed.
- **Old blog posts, landing pages and promo pages** that may not be linked from the menu anymore.

Put them in a simple spreadsheet. One row per URL.

Then add columns for:

- The page title
- The meta description
- The main heading
- Whether the page gets impressions or clicks in Search Console
- **Where this page will live on the new site**

That last column is the most important one in the whole project.

## Step 2: Identify Your Most Valuable Pages

Not every page matters equally.

In Search Console, look at the Performance report over the last several months. Sort by impressions and clicks. The pages at the top are the ones Google already trusts for something.

For a roofer, that might be a roof repair page and a storm damage page. For an HVAC company, it might be an AC repair page that picks up every summer. For a septic company, it might be a pumping page or an inspection page.

These pages get special care:

- **Keep their content**, or improve it, rather than replacing it with something thinner.
- **Keep their topic.** If the old page was about septic inspections, the new page it redirects to should be about septic inspections too.
- **If possible, keep the same URL.** On a hand-built site, we can usually match old URLs closely or exactly.

## Step 3: Keep the Content That's Working

A redesign is a tempting moment to rewrite everything.

Be careful.

If a service page has been earning impressions, the words on that page are part of why. You can improve design, speed, layout and calls to action without gutting the content.

A good approach:

- Keep the core text of high-performing pages.
- Expand thin pages with more useful information.
- Merge near-duplicate pages into one stronger page, and redirect the old ones to it.
- Remove pages that truly serve no purpose, but still redirect them somewhere sensible.

**Better beats different.** Change what needs changing. Keep what's already working.

## Step 4: Map Every Old URL to a New URL

Now go back to your spreadsheet and fill in the "new URL" column for every row.

Rules of thumb:

- **One old page goes to its closest match**, not to the homepage by default.
- **Old service page to new service page.** Old area page to new area page. Old blog post to the same post on the new site.
- **If a page truly has no equivalent**, send it to the most relevant section, like your main services page.
- **Don't redirect everything to the homepage.** That's a common shortcut, and it throws away the relevance of each old page.

This map becomes your redirect list.

## Step 5: Set Up 301 Redirects

A 301 redirect is a permanent forwarding address for a web page.

When someone, or Google, visits the old URL, the server automatically sends them to the new one and tells Google the move is permanent. That's how Google learns that the new page is the successor to the old one.

A few important points:

- **Use 301s, not temporary redirects**, for a permanent move.
- **Redirect directly.** Old URL to final new URL in one hop, not through a chain of redirects.
- **Test every redirect after launch.** Click through your spreadsheet. Every old URL should land on the right new page.
- **Keep redirects in place long-term.** Don't remove them a month after launch.

How redirects are set up depends on your new hosting. The important part is that they exist, they're permanent and they're tested.

## Step 6: Carry Over and Improve Your Metadata

Every page has information Google reads that customers mostly don't see.

- **Title tag.** The clickable headline in search results.
- **Meta description.** The short summary under it.
- **Headings.** The H1 and section headings on the page.
- **Image alt text.** Descriptions for images.

Builder platforms sometimes fill these in automatically. When you move, those values can vanish or get replaced with generic defaults like "Home" or "Services."

Use your spreadsheet. For each important page, carry the title and description over to the new page, then improve them where it makes sense. A clear title like "Septic Pumping in [Your Area] | [Your Company]" is more useful than "Services."

When we updated our own site in October 2026, we also adjusted our positioning in titles to "Knoxville-based, serving the Southeast" instead of Knoxville-only. That's the kind of intentional change you can make during a migration. Just make it on purpose, not by accident.

## Step 7: Add Structured Data

A migration is a great time to add something many builder sites don't do well: structured data, also called schema markup.

Structured data is code that tells Google, in a format it reads directly, facts about your business: legal name, phone, hours, service areas, logo and more.

On our own site, we added:

- Business schema (ProfessionalService) with legal name, hours, service areas, logo, founder, founding date and sameAs links, including a permanent Google Maps link
- WebSite schema
- Breadcrumbs on pages and posts
- Article schema on blog posts
- FAQ schema on service pages

Google's Rich Results Test and the Schema.org validator returned zero errors.

We explain each type in plain English in [Schema Markup for Local Service Businesses](/blog/schema-markup-for-local-service-businesses/).

## Step 8: Plan the Domain and DNS Switch

Your domain name, like yourcompany.com, is separate from your website platform. That's good news. You can usually keep the same domain and point it at the new site.

But this step has a few traps.

### Know where your domain is registered

Some owners bought their domain through Wix or Squarespace. Others bought it through a separate registrar years ago and forgot. Find out before launch day, and make sure you have the login.

### Know what else uses the domain

This one catches people. Your domain's DNS settings may also control:

- **Business email.** If your email runs on the same domain, changing DNS carelessly can break it.
- **Verification records** for Google or other services.

Before changing anything, write down the current DNS records. Change only what's needed to point the website to the new host. Leave email records alone unless you're intentionally moving email too.

### Don't cancel the old platform too early

Keep the old site's subscription active until the new site is live, redirects are tested and email is confirmed working. A few extra weeks of overlap is cheap insurance.

## Step 9: Submit Your Sitemap and Use Search Console

Once the new site is live:

1. **Make sure your domain property is verified in Google Search Console.** If you verified with a DNS record, confirm it survived the switch.
2. **Submit the new sitemap.** This gives Google a clean list of your new pages.
3. **Use URL Inspection on your most important pages** and request indexing for them.
4. **Watch the Pages report** over the following weeks for errors, like pages returning "not found."

Search Console is your early warning system. If something broke, this is usually where you'll see it first.

## Step 10: Update Your Google Business Profile Link

This is the step that gets forgotten most often, and for a home-service business it may be one of the most important.

Your Google Business Profile has a website link. Many profiles also have links for booking or specific services.

If any of those links point to an old URL that no longer exists, you're sending Google Maps customers to a dead end, or at best through a redirect.

After launch:

- **Update the website link** on your GBP to the correct new URL.
- **Check any other links** on the profile.
- **Confirm your name, phone, hours and service areas still match the new site exactly.**

That last point matters. When we updated our own website, we matched it to our GBP precisely: the legal name Knoxline Systems, LLC, the same phone number, the same hours, the same 20 service areas and services that line up with our categories. Consistency tells Google you are exactly who you say you are. We wrote about that in detail in [Why Your Website Should Match Your Google Business Profile 100%](/blog/match-website-to-google-business-profile/).

## Step 11: Update Other Links You Control

Beyond your GBP, think about everywhere you've posted your website:

- Facebook and other social profiles
- Directory listings
- Email signatures
- Invoices and estimate templates
- Truck wraps and yard signs with a specific page URL
- QR codes on review cards or flyers

Redirects should catch most of these. But updating the ones you control directly is cleaner, and a QR code pointing to a dead page is an easy way to lose a customer.

## Step 12: Monitor for the Next Few Months

Don't launch and walk away.

Some movement in rankings after a migration is normal while Google processes the changes. What you're watching for is something that clearly isn't recovering, like a key page that has vanished or a batch of "not found" errors.

Things to check:

- **Weekly for the first month:** Search Console errors, redirects, contact forms and phone links.
- **Monthly after that:** impressions and positions for your important pages.
- **Calls and form submissions.** Rankings are useful, but leads are what matter.

Organic SEO takes time. Around six months is a fair window to judge whether a new site is building on what the old one had.

## The Migration Checklist

Here's the whole thing on one page.

1. Inventory every old URL
2. Identify the pages that get impressions and clicks
3. Keep the content that's working
4. Map every old URL to its closest new URL
5. Set up and test 301 redirects
6. Carry over and improve titles, descriptions and headings
7. Add structured data and validate it
8. Plan the domain and DNS switch, protecting email
9. Submit the sitemap and request indexing in Search Console
10. Update your Google Business Profile links
11. Update every other link you control
12. Monitor for several months

## Frequently Asked Questions

### Will I lose my Google rankings if I switch from Wix?

Not necessarily. Rankings are most at risk when old URLs disappear without redirects, valuable content is removed or metadata is lost. A careful migration protects against those problems. Some short-term movement is normal.

### Can I keep my domain name when I leave Squarespace?

In most cases, yes. Your domain can usually be pointed to the new host. If you bought the domain through Squarespace, you may also be able to transfer it to another registrar. Check your account settings and plan ahead.

### Do I need to redirect old blog posts?

Yes, if they're moving or changing URLs. Old posts can have links and history attached to them. Redirect each one to its new version, or to the most relevant page.

### What happens to my reviews when I change websites?

Your Google reviews live on your Google Business Profile, not on your website. Changing your website doesn't remove them. Just make sure the profile's website link is updated.

### How long does a website migration take?

It depends on the size of the site. The planning, which means the URL inventory and redirect map, is where most of the care goes. Rushing that part is how rankings get lost.

## Switching Is Worth It When It's Done Right

Moving off a builder can give a home-service business a faster site, cleaner code, full control over metadata and structured data, and a website that matches its Google Business Profile exactly.

But the benefits only show up if the move protects what the old site already earned.

That's the part we take seriously.

If you're thinking about leaving Wix, Squarespace or an aging WordPress site, [contact Knoxline Systems](/contact.html). We'll inventory your current site, show you which pages matter, and plan a move that keeps your history intact. You can also read more about our [website design for home-service businesses](/websites.html).
