# Treat

Repo for Treat app.

## Customization

The app includes a Settings page where you can change small, medium, and large cheat values as well as the daily recovery amount. The recovery cycle remains daily and the 80% health threshold is fixed. Recovery changes apply only to future days and do not alter past records.

## Preview

This repository includes GitHub Pages workflows to publish the site.
Enable GitHub Pages in the repository settings and pushing to `main` publishes
the production site at https://abzerra.github.io/Treat/. Staging previews are
built from the `staging` branch.

## Deployment

Changes are developed on feature branches and merged into the `staging` branch.
Pushing to `staging` triggers a staging Pages deployment whose URL appears in the
workflow run summary. Once reviewed, merge `staging` into `main` to deploy to the
production site above.
