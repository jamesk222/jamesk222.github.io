# Jamal Shah — Portfolio Website

A static, no-build-tool website: plain HTML, CSS and vanilla JS. No React,
no npm install, no server required. That's deliberate — it means GitHub
Pages (free, forever, no credit card) can host it exactly as-is.

## File map

```
index.html         Home
about.html          About
experience.html     Experience timeline
projects.html       Projects (sourced from github.com/jamesk222)
skills.html         Skills
blog.html           Blog listing (reads data/posts.json)
blog/*.html         Individual blog posts
cv.html             CV page with embedded PDF + downloads
contact.html        Contact page + message form
css/style.css       All styling (one file, CSS variables at the top)
js/main.js          Nav behaviour + blog list rendering
data/posts.json     Blog post index — edit this to publish
assets/Jamal_Shah_CV.pdf / .docx   Combined CV, downloadable
```

## How to preview locally before publishing

Browsers block `fetch()` calls to local JSON files opened directly from
disk (`file://`), which breaks the blog list. Run a tiny local server
instead, from inside this folder:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Publishing a new blog post (do this weekly / daily)

1. Duplicate `blog/genai-as-a-reporting-layer.html` and rename it,
   e.g. `blog/my-new-post.html`.
2. Edit the `<h1>`, meta date/tags line, and the content inside
   `<div class="post-body">`.
3. Open `data/posts.json` and add a new object at the top of the array:
   ```json
   {
     "title": "My New Post Title",
     "date": "2026-08-09",
     "url": "blog/my-new-post.html",
     "excerpt": "One or two sentences that sell the click.",
     "tags": ["BI"]
   }
   ```
4. Commit and push. The blog page picks it up automatically — no rebuild
   step, no CMS login.

## Hosting — recommended: GitHub Pages (free, and you already use GitHub)

1. Create a new **public** repository, e.g. `jamalshah222/portfolio`
   (or use a repo named `jamesk222.github.io` for a shorter free URL —
   see step 4).
2. Push everything in this folder to that repo's `main` branch.
3. In the repo: **Settings → Pages → Source → Deploy from a branch →
   `main` / root**. Save.
4. Your site goes live at:
   - `https://jamesk222.github.io/portfolio/` (repo named `portfolio`), or
   - `https://jamesk222.github.io/` (repo named exactly
     `jamesk222.github.io` — this is GitHub's special "user site" repo
     name and gives you the shortest free URL).
   Either way, this is genuinely free hosting, forever, with automatic
   HTTPS and no bandwidth bill for a site this size.

### Alternative free hosts (same static files, no changes needed)
- **Cloudflare Pages** — unlimited bandwidth on the free tier, connects
  directly to your GitHub repo, auto-deploys on every push.
- **Netlify** — same workflow, plus free-tier **Netlify Forms**, which
  can replace the Formspree-based contact form with zero extra sign-up.
- All three (GitHub Pages, Cloudflare Pages, Netlify) support a custom
  domain on their free plan — the hosting itself never has a fee.

## About `jamalshah.com` / `jamalshah.me`

Important to be upfront about: **the domain name itself is never free**
on any of the hosts above — only the *hosting* is free. Registering
`jamalshah.com` or `jamalshah.me` costs roughly:

| Registrar | `.com`/yr | `.me`/yr |
|---|---|---|
| Cloudflare Registrar (at-cost, no markup) | ~$10 | ~$18 |
| Namecheap | ~$10–13 | ~$20 |
| Google Domains successor (Squarespace Domains) | ~$12 | ~$20 |

Workflow once you buy one: point the domain's DNS at your chosen host
(GitHub Pages / Cloudflare Pages / Netlify all publish exact instructions
— add a `CNAME` file with your domain name to the repo root for GitHub
Pages, or add the domain in the host's dashboard). Propagation takes
minutes to a few hours.

Until you're ready to buy a domain, `https://jamesk222.github.io/` (or
your Cloudflare Pages/Netlify subdomain) is a completely free, permanent,
professional-looking URL you can put on your CV and LinkedIn today.

## Contact form

The form on `contact.html` posts to Formspree (`https://formspree.io`),
which has a free tier (50 submissions/month, no backend required).
Sign up free, create a form, and replace `your-form-id` in
`contact.html` with your real endpoint. If you host on Netlify instead,
you can swap this for Netlify Forms by adding `data-netlify="true"` to
the `<form>` tag — no third-party sign-up needed at all.
