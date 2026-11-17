# Tonyapps website

Static GitHub Pages site for Tonyapps Magento Open Source extensions.

## Structure

- `index.html` contains the landing page and extension catalog.
- `assets/site.css` contains the responsive styles.
- `assets/site.js` handles category filters and search; there are no runtime dependencies.
- `assets/mark.svg` is the favicon.

## Preview

Serve this directory with any static HTTP server, for example:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

GitHub Pages serves the `main` branch from the repository root. Pushing changes to `main` publishes the site.
