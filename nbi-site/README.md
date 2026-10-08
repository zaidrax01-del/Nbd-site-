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
in a separate terminal.

## Editing content

Content lives in `src/content/` and `src/data/`. The owner uses `/admin`.

- Business info: `src/data/settings.json`
- Services: `src/content/services/*.md`
- Before & after pairs: `src/content/beforeafter/*.md`
- Gallery photos: `src/content/gallery/*.md`
- Reviews: `src/content/reviews/*.md`
- FAQ: `src/content/faq/*.md`

## Adding a field

1. Add it to the collection in `src/content.config.ts`
2. Add the matching field in `public/admin/config.yml`
3. Use it in the component

Both files must agree or the build will fail.

## Deploy

Push to `main` on GitHub. Netlify builds and deploys automatically.
