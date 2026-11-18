# diamond42474.github.io

Personal website. Content lives in `content/` (an Obsidian vault); [Quartz](https://quartz.jzhao.xyz/) turns it into the site.

## Publish

Edit notes in Obsidian, then run from this repo's root:

```
npx quartz sync
```

GitHub Actions builds and deploys to GitHub Pages on every push.

Preview locally with `npx quartz build --serve`.
