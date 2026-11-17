# Tonyapps website

Static GitHub Pages directory of Tonyapps Magento modules.

## Structure

- `index.html` contains the module list, featured product links, and links to GitHub and Packagist.
- `email-designer/index.html` is the Visual Email Designer product page.
- `b2b/index.html` is the B2B Company Accounts product page, with the four optional add-ons.
- `assets/site.css` contains the responsive styles.
- `assets/tonyapps-logo.jpg` is the GitHub organization avatar used as the logo and favicon.

## Preview

Serve this directory with any static HTTP server, for example:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

GitHub Pages serves the `main` branch from the repository root. Pushing changes to `main` publishes the site.

The product pages use labelled CSS illustrations. Add verified product screenshots and demos when they are ready.
