# Immutable builds using AWS S3, Cloudfront and Github actions

- Releases are built and deployed using Github Actions workflows
- Builds are served from S3 bucket through Cloudfront CDN
- Builds are immutable - meaning easy to cache (don't need cache invalidations - cost less) and easy to revert

## Setup

AWS Setup:
- AWS S3 Bucket
- AWS Cloudfront distribution that:
  - Points to the S3 bucket
  - Has `Default Root Object` set to `index.html` (placeholder, will be overwritten by actual index.html in the first github workflow)
  - Has 403 and 404 error pages setup to point to `index.html` - needed for client-side routing to work. (placeholder, will be overwritten by actual `index.html` in the first github workflow)

Secrets needed for the workflow:

```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_BUCKET_ID
AWS_CLOUDFRONT_DISTRIBUTION_ID
```

## Running release workflow locally

Requires Docker and https://github.com/nektos/act to be installed locally
- Setup secrets file `.github/.secrets` in a `.env` style format
- `npm run act`
