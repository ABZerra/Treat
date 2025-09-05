# Treat

Repo for Treat app.

## Preview

This repository includes GitHub Pages workflows to publish the site.
Enable GitHub Pages in the repository settings and the deployed site will be
available at https://abzerra.github.io/Treat/ after pushing to `main`.

## Deployment

Changes are developed on feature branches and merged into the `staging` branch.
Pushing to `staging` triggers a staging Pages deployment whose URL appears in the
workflow run summary. Once reviewed, merge `staging` into `main` to deploy to the
production site above.
