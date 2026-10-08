# NBD – Nothing But Detailing

Static site built with Astro, edited via Decap CMS. Hosted on Netlify.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # preview the built site
```

## Admin

The CMS lives at `/admin`. In production it's gated by Netlify Identity —
only invited email addresses can log in. Locally, use `npx decap-server`
in a separate terminal to run the CMS against the filesystem.

## Editing content

Content lives in `src/content/`. The owner never edits these directly —
they use `/admin`. You should too, unless you're doing bulk changes.

- Business info: `src/data/settings.json`
- Services: `src/content/services/*.md`
- Gallery: `src/content/gallery/*.md`
- Reviews: `src/content/reviews/*.md`
- FAQ: `src/content/faq/*.md`

## Adding a field

1. Add it to the relevant collection in `src/content.config.ts`
2. Add the matching field in `public/admin/config.yml`
3. Use it in the component

Both files must agree or the build will fail.
