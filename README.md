# AK Tours & Travels — website

This is the website for **AK Tours & Travels**, Pooja's Mumbai tour company.

- **Live site:** https://aktoursindia.com/
- It costs nothing to run. It is hosted free on GitHub Pages.
- It is plain HTML — no frameworks, no build tools, nothing to install.

**The golden rule: every word, price and photo name on the site lives in ONE
file — [`js/content.js`](js/content.js).** Edit that file, save, and the whole
site updates itself. You never need to touch the HTML.

---

## How to edit the site from a phone

1. Open **github.com/ryanl-byte/ak-tours-travels** in your phone's browser
   (log in to GitHub).
2. Tap the **`js`** folder, then **`content.js`**.
3. Tap the **pencil icon** (✏️, top right) to edit.
4. Change the text **between the quotation marks** — and only that.
5. Scroll up, tap the green **"Commit changes…"** button, then confirm.
6. Wait a minute or two, then refresh the live site. Done.

If the site ever looks broken after an edit, don't panic — see
["If something breaks"](#if-something-breaks) below. Nothing is ever lost.

---

## The three most common jobs

### 1. Change a price
In `js/content.js`, find the tour by name, then change its price line:

```
priceFrom: "₹X,XXX",
```
becomes, for example:
```
priceFrom: "₹4,500",
```
The site shows it as "From ₹4,500" everywhere automatically.

### 2. Change the phone number
Near the very top of `js/content.js`:

```
phone: "+918097004157",
```
Change the number in that one line (keep the `+91` format and the quotes).
Every WhatsApp button, phone link and contact line on the site follows it.

*(If the number ever changes, ask whoever helps technically to also run a
find-and-replace of the old number across all files — it is baked into a few
behind-the-scenes places search engines read.)*

### 3. Change any wording
Find the sentence in `js/content.js` (your browser's "find in page" works),
change it between the quotes, commit. Headings, tour descriptions, FAQ
answers, the bio — they all live there.

**Careful with:** quotes inside text. If you need an apostrophe, that's fine
(`it's`), but don't add extra `"` double quotes inside a sentence.

---

## Swapping a photo

Photos live in the **`img`** folder and are named after the tour, e.g. the
food tour picture is `mumbai-food-tour-1.jpg`.

Each photo exists three times (this keeps the site fast on slow connections):

| file | what it is |
|---|---|
| `mumbai-food-tour-1.jpg` | normal photo (about 1200px wide) |
| `mumbai-food-tour-1.webp` | same photo, modern compressed format |
| `mumbai-food-tour-1-sm.webp` | small version for phones (about 640px) |

**Easiest route:** send the new photo to whoever helps you technically and ask
them to "replace mumbai-food-tour-1" — it's a two-minute job (a free tool like
squoosh.app makes the `.webp` versions).

**Doing it yourself:** in the `img` folder on GitHub, tap **Add file →
Upload files**, and upload files with **exactly the same names** as the ones
you're replacing. Uploading just the `.jpg` is not enough — modern browsers
show the `.webp` ones, so replace all three.

The dashed "Photo of Pooja coming soon" box disappears the moment a real
photo is wired in — ask your helper to do that one, it's a one-line change.

---

## Adding real reviews

In `js/content.js`, find `testimonials`. Each review looks like:

```
{
  quote: "Sample review — replace me. …",
  name: "Guest name",
  origin: "Country",
  sample: true
},
```

Put the real words in `quote`, the guest's first name in `name`, their country
in `origin`, and change `sample: true` to `sample: false` — that removes the
"SAMPLE" badge. Please only use real reviews from real guests.

---

## Things marked CONFIRM

Some lines in `js/content.js` (and hidden notes in the pages) are marked
`CONFIRM` — they are honest placeholders for facts only Pooja knows: prices,
pickup areas, the cancellation policy, whether tastings are included, and the
Dharavi community-contribution question. Sweep through them before promoting
the site. Searching the project for the word `CONFIRM` finds every one.

---

## If something breaks

Every change is saved forever in GitHub's history, so the site can always be
put back exactly as it was:

1. On the repository page, tap the file you edited, then the **History**
   (clock) icon.
2. Open the last version that was good, tap the **`…`** menu → **View file**.
3. Copy its contents over the broken version (pencil → paste → commit).

Or simply ask your technical helper to "revert my last change" — it's one
command for them (`git revert`).

---

## Notes for the technical helper

- **No build step.** The deployed site is exactly what's in the repo. Push to
  `main` and GitHub Pages redeploys in ~1 minute.
- `js/content.js` = all data. `js/render.js` = pure HTML-string templates.
  `js/main.js` = on page load, re-renders every content section from
  `content.js`, so content edits apply without touching HTML. The baked HTML
  in `index.html` / `tours/*.html` is the no-JS and SEO fallback, generated
  from the same render functions — if you change `render.js` or add a tour,
  regenerate the baked pages (any Claude/LLM can do it from these files, or
  re-run the original generator script) so the fallback keeps matching.
- **Adding a tour:** add its object to `CONTENT.tours`, add its three images
  to `img/`, copy an existing `tours/*.html` file to the new slug, update that
  file's `<title>`, meta description, canonical, JSON-LD and `data-tour`
  attribute, and add the URL to `sitemap.xml`. The homepage grid picks it up
  automatically at runtime.
- Fonts are self-hosted Fraunces subsets (OFL licence) in `fonts/`.
- The logo system (all three explored directions and the contact sheet) lives
  in `brand/` — see `brand/contact-sheet.html`.
- Keep images **under 200KB each**; the whole first load is currently well
  under 500KB. Please keep it that way — the audience is on 3G.
