# Aditya Kapoor - Portfolio

My personal portfolio site. A single statically rendered page built with
Next.js (App Router, JavaScript) and hand-written CSS. No Tailwind, no UI kit,
no backend.

## Run it locally (Windows)

You need [Node.js](https://nodejs.org) 20.9 or newer. Open PowerShell in this
folder and run:

```powershell
npm install
npm run dev
```

Then open <http://localhost:3000>. The page reloads when you save a file.

To check the production build:

```powershell
npm run build
npm run start
```

## Project structure

```
portfolio/
├── app/
│   ├── globals.css          design tokens (colours, spacing, radii) and resets
│   ├── layout.js            fonts, metadata, theme script
│   ├── page.js              puts the sections together
│   ├── icon.svg             favicon
│   ├── opengraph-image.js   preview image for link sharing
│   ├── robots.js
│   └── sitemap.js
├── components/              one folder per component: Name.js + Name.module.css
│   ├── Header/  ThemeToggle/  Hero/  TypedText/
│   ├── Section/  Reveal/
│   ├── About/  Education/
│   └── Timeline/  Skills/  Awards/  Contact/  Footer/
├── data/
│   └── content.js           ALL of the site's text
├── public/
│   └── profile-placeholder.svg
├── next.config.mjs
├── jsconfig.json
└── package.json
```

## Editing the content

Everything you read on the site comes from [`data/content.js`](data/content.js).
You do not need to touch a component to change wording.

| Export       | What it controls                                             |
| ------------ | ------------------------------------------------------------ |
| `site`       | Site URL, page title and description (used for SEO)          |
| `profile`    | Name, hero title, intro, CV path, photo, the four hero stats |
| `about`      | About heading and paragraphs                                 |
| `education`  | Deakin and Year 12 cards, including the unit list            |
| `experience` | Timeline entries, in the order they appear                   |
| `skills`     | Skill groups and chips                                       |
| `awards`     | Awards and certificates                                      |
| `contact`    | Contact text, email, LinkedIn and GitHub links               |
| `navigation` | Links in the top menu                                        |

Search the project for `TODO` to find everything that still needs real content.

### Things to fill in

1. **Site URL.** Set `site.url` to your real address after deploying. It is
   `https://example.com` for now, and it feeds the sitemap, `robots.txt` and
   the Open Graph tags.
2. **Coursera credential.** Paste the credential URL into the `link` field of
   the first item in `awards`.

### Add your CV

Save your CV as a PDF named exactly `Aditya-Kapoor-CV.pdf` and put it in the
`public/` folder:

```
public/Aditya-Kapoor-CV.pdf
```

The "Download CV" button already points to it. Until the file is there, the
button leads to a 404 page.

The site deliberately leaves out your phone number and visa details. Your CV
PDF will be public once it is in `public/`, so consider removing them from the
PDF you upload too.

### Add your photo

1. Put your photo in `public/`, for example `public/profile.jpg`. A portrait
   crop of about 960 x 1120 pixels works well.
2. In `data/content.js`, update `profile.photo`:

   ```js
   photo: {
     src: "/profile.jpg",
     alt: "Aditya Kapoor",
     width: 960,
     height: 1120,
     isPlaceholder: false,
   },
   ```

   `width` and `height` should be the real pixel size of the image.
   `isPlaceholder: false` removes the "Photo placeholder" caption.

## Changing the look

- Colours, spacing, radii and font sizes are CSS custom properties at the top
  of [`app/globals.css`](app/globals.css). The dark theme is in `:root` and the
  light theme in `:root[data-theme="light"]`. Change `--color-accent` in both
  to change the accent colour. (The same light values are repeated once more in
  a `prefers-color-scheme` block for visitors with JavaScript turned off.)
- Fonts are loaded with `next/font` in [`app/layout.js`](app/layout.js):
  Montserrat for body text and headings, JetBrains Mono for labels, dates and
  tags.
- Each component's styles live next to it in a `*.module.css` file.

## Deploy to Vercel

1. Push this folder to a GitHub repository:

   ```powershell
   git add .
   git commit -m "Portfolio site"
   git remote add origin https://github.com/Darkshadow023/<your-repo-name>.git
   git push -u origin master
   ```

2. Go to <https://vercel.com>, sign in with GitHub and choose
   **Add New > Project**.
3. Import the repository. Vercel detects Next.js by itself, so leave every
   setting on its default and click **Deploy**.
4. When it finishes, copy the address Vercel gives you into `site.url` in
   `data/content.js`, then commit and push. Vercel redeploys on every push.

No environment variables are needed.
