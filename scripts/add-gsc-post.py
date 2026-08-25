#!/usr/bin/env python3
"""Insert the Search Console platform-properties guide into the blog.

Posts live in two places: the card list in app/blog/page.jsx and the full body
in app/blog/[slug]/page.jsx. Individual posts were also missing from the
sitemap, so this wires those up too.

    python3 scripts/add-gsc-post.py
"""
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SLUG = 'google-search-console-instagram-tiktok'
TITLE = 'Google Search Console Now Tracks Instagram, TikTok, X and YouTube'
EXCERPT = ('Google opened Search Console to social platforms in July 2026. See the exact '
           'search terms bringing people to your posts, what the reports show, and what '
           'connecting an account does and does not change.')
CATEGORY = 'Instagram'
DATE = '2026-08-25'
READ = 9

CONTENT = r'''
On 7 July 2026, Google added a new property type to Search Console called **platform properties**. It lets you connect a social account and see how your posts perform in Google Search and Discover.

Until now, Search Console was for people who owned a website. If your audience lived on Instagram or TikTok, none of that data was available to you. That changed.

## What it actually does

Once you connect an account, you get three reports covering your posts on Google Search and Discover.

**Performance.** Total clicks, impressions and related metrics. You can filter and sort to see which individual posts and which queries drive the most traffic, and export the data if you would rather analyse it elsewhere.

**Insights.** A higher level view of recent traffic trends, your best performing posts, and how people are discovering your account on Google.

**Achievements.** Milestone tracking, such as passing a new threshold for total clicks from Search in the last 28 days.

The useful part is the query data. You can finally see the words somebody typed into Google immediately before they landed on one of your posts.

## Which platforms are supported

Four at launch:

- Instagram
- TikTok
- X
- YouTube

Facebook and LinkedIn are not supported yet.

## How to set it up

1. Open Search Console.
2. Go to the verification page, or open the property selector dropdown anywhere in Search Console and click **Add property**.
3. Choose one of the four platforms.
4. Follow the on screen steps to authorise the connection.

It takes about a minute per account. **You do not need to own a website**, which is the part most people miss. This is the first time Search Console has been available to accounts with no site attached.

Platform properties rolled out gradually, so if the option is not in your account yet, it is on its way.

## What it does not do

Worth being clear, because this gets misreported.

Connecting a platform property **does not affect your ranking**. It does not change how your posts are indexed, and it does not make them more likely to appear in Search or Discover. Google has never used Search Console as a ranking input, and this is no different.

It is a reporting tool. Your posts were already being surfaced in Google Search. The only thing that changed is that you can now see it.

That is still significant, because you cannot optimise for something you cannot measure.

## Why the query data matters more than the clicks

Most people will open the Performance report, look at the click count, and close it. The queries are the valuable part.

Hashtags stopped being the main discovery mechanism on social platforms some time ago. Search took over, and it behaves much the way search on the open web always has: somebody types a phrase describing what they want, and the platform matches it against your words.

Which means the query list in Search Console is a content brief. It tells you:

- which phrases already bring people to you
- which of those are growing
- which specific post each search landed on

You stop guessing what to post next and make more of whatever is already pulling.

## The connection to AI answers

There is a second reason this data is worth watching.

AI assistants that answer with current information are grounded in a search index. When somebody asks one for a recommendation rather than a link, the answer is assembled from content that system can find and read.

Your social posts are part of what is out there. Search Console now shows which of them Google surfaces and for which phrases, which is the closest proxy available for how discoverable your content is to anything reading that index.

To be precise: Google has not said platform properties feed AI answers, and connecting an account does not change how any assistant treats you. What you get is visibility into the same surface those systems draw from.

## What to do with it in the first week

**Connect every account you actually post on.** It costs a minute each, and the data only starts accumulating once connected.

**Read the query list, not the totals.** Sort by impressions and look for phrases you did not expect.

**Find the gap.** Queries with high impressions and low clicks mean people are seeing you and not choosing you. That is usually a hook or thumbnail problem, not a reach problem.

**Make more of what is climbing.** The Insights report flags rising trends. That is your next post.

## Frequently asked questions

**Do I need a website?**
No. Platform properties work for accounts with no site attached, which is new for Search Console.

**Does connecting improve my ranking?**
No. It is reporting only. Nothing about your visibility changes when you connect.

**Which platforms work?**
Instagram, TikTok, X and YouTube. Facebook and LinkedIn are not supported at launch.

**Is it free?**
Yes. Search Console has always been free.

**Why can I not see the option?**
It rolled out gradually. If the property type is not in your selector yet, it should appear.
'''.strip()


def patch(path, marker, block, label):
    src = open(path).read()
    if SLUG in src:
        print(f'  {label}: already present, skipped')
        return
    i = src.index(marker) + len(marker)
    open(path, 'w').write(src[:i] + block + src[i:])
    print(f'  {label}: inserted')


index_entry = f"""
  {{
    slug: '{SLUG}',
    title: '{TITLE}',
    excerpt: '{EXCERPT}',
    category: '{CATEGORY}',
    author: 'WellPlan Team',
    date: '{DATE}',
    readTime: {READ},
    image: '/blog/search-console-social.jpg',
    featured: true,
  }},"""
patch(os.path.join(ROOT, 'app/blog/page.jsx'),
      'const blogPosts = [', index_entry, 'blog index')

detail_entry = f"""
  '{SLUG}': {{
    title: '{TITLE}',
    excerpt: '{EXCERPT}',
    category: '{CATEGORY}',
    author: 'WellPlan Team',
    date: '{DATE}',
    readTime: '{READ} min read',
    content: `
{CONTENT}
`,
  }},"""
patch(os.path.join(ROOT, 'app/blog/[slug]/page.jsx'),
      'export const blogPosts = {', detail_entry, 'post body')

sm_path = os.path.join(ROOT, 'app/sitemap.js')
sm = open(sm_path).read()
if 'blogPostPages' not in sm:
    sm = sm.replace(
        "import { industries } from './lib/industries';",
        "import { industries } from './lib/industries';\n"
        "import { blogPosts } from './blog/[slug]/page';", 1)
    sm = sm.replace(
        "  // Glossary detail pages",
        """  // Blog posts: /blog was listed but individual posts never were
  const blogPostPages = Object.keys(blogPosts).map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Glossary detail pages""", 1)
    sm = sm.replace("    ...staticPages,", "    ...staticPages,\n    ...blogPostPages,", 1)
    open(sm_path, 'w').write(sm)
    print('  sitemap: blog posts added')
else:
    print('  sitemap: already wired, skipped')

print(f'\nslug: /blog/{SLUG}')
