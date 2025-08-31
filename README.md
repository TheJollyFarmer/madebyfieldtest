# Interview boilerplate (August 2025)

Thank you for your applying for a Shopify Developer position at Field. We have put together the following task. You are among the first to be receiving this, so please let us know if you think it is unrealistic.

This repo is a trimmed down version of what we would typically start with for a new Shopify build. It has TailwindCSS setup and should have all the relevant fonts etc. required for the Figma design.

The task is to build a product component. The below Figma links will take you to desktop version which is static and a mobile version which is a slider. You can ignore the sections above and below, they are there for context and to illustrate the section spacing.

Here are the Figma links:

- [Desktop](https://www.figma.com/design/4CBdp9txCTQfF4SNXfdYhM/Interview-task?node-id=1-695&t=j68MKfnjj9gYQ6Ny-4)
- [Mobile](https://www.figma.com/design/4CBdp9txCTQfF4SNXfdYhM/Interview-task?node-id=13-466&t=j68MKfnjj9gYQ6Ny-4)

## Notes and hints for the build

- Product imagery is in the `assets` folder.
- The product badge, wishlist icon number of colours and sizes/variants should appear on hover
- The `+ 6 Colours` can be hardcoded
- The section is static on desktop and a slider on mobile
- The title and CTA that sit above the slider should be sticky and aligned/"stuck" to the bottom of the viewport in scroll

It would also be great if you have a rough idea on how long it takes you.

---

## Requirements

- nodejs
- npm
- [shopify-cli](https://github.com/Shopify/shopify-cli)

## Usage

| Command       | Usage                                                            |
| ------------- | ---------------------------------------------------------------- |
| `npm install` | Setup environment.                                               |
| `npm run dev` | Builds and watches project, syncs to Shopify then opens preview. |

---

## Best practice

The following is copied from our base Shopify boilerplate and helps us to be efficient, performant and collaborative. It's only included here for completeness.

### Branches

Firstly, we should never push to `main`. The `main` branch should also be protected. We will use pull requests to merge code into `main`.

Use `kebab-case` for branch names.

| Format        | Example                | Usage                                                         |
| ------------- | ---------------------- | ------------------------------------------------------------- |
| `/dev[/name]` | `/dev[/dave]`          | Development branches (could be user-specific)                 |
| `/staging`    | `/staging`             | A place to merge multiple features or branches for QA and UAT |
| `/feature/*`  | `/feature/hero-banner` | New features for the store                                    |
| `/bugfix/*`   | `/bugfix/typo`         | Bugfixes for issues with the store                            |
| `/test/*`     | `/test/pdp-update`     | For a CRO test                                                |
| `/stores/*`   | `/stores/uk`           | Store-specific branches to link to Shopify                    |

### Compliance

During project development and/or at the end of each sprint, ensure that the following has been checked:

- Image factors (i.e. the `factor` param on the `image` snippet)
- Performance scores/metrics (use [PageSpeed Insights](https://pagespeed.web.dev))
- Accessibility scores/metrics (use [PageSpeed Insights](https://pagespeed.web.dev) and [accessiBe](https://accessibe.com/accessscan))

### Variables and spacing

Use `rem` values instead of `px`

### Responsiveness

Build desktop-first and then use `tablet:` overrides for mobile. For anything desktop-specific (i.e. that aren't simple modified for mobile) can use `desktop:`

For elements that affect hover/touch behaviour on mobile—for example a `:hover` event on a product card may result in a double tap on tablet to access the product—use the `supports-hover:` directive.
