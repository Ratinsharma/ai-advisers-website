# Validation

The source website passed TypeScript, lint, production build, three enquiry encoding checks and 78 HTTP/source checks on 29 September 2026. Browser review covered all 14 routes at 390, 768, 1280 and 1440 pixels, navigation/refresh/Back, mobile focus containment and empty-form validation. This is not WCAG certification or product-performance validation.

The exported copy has a self-contained public policy fixture. With a local development server running, use `BASE_URL=http://127.0.0.1:5173 bun run verify` on a POSIX shell. In PowerShell, set `$env:BASE_URL="http://127.0.0.1:5173"`, then run `bun run verify`. The verifier does not run compiler, lint, browser or email delivery tests.

The standalone export was also checked after a frozen dependency installation: TypeScript, lint, production build, three enquiry checks and all 78 HTTP/source checks passed. HTTP checks used the existing matching local website preview; no duplicate preview server or external submission was created.

Run `bun scripts/enquiry.test.ts` for the enquiry tests. Native 200% zoom, OS reduced motion, successful email-client handoff, external form delivery and production hosting remain untested.

## GitHub Actions template

[validate-workflow.yml](validate-workflow.yml) contains the prepared validation workflow. It is stored as documentation and is **not active CI**. The connected GitHub integration rejected the workflow-file write with HTTP 403 (resource not accessible by integration); the CLI credential does not advertise workflow scope. No account or integration permissions were expanded.

A repository owner can activate it by placing it at `.github/workflows/validate.yml` through an authorised GitHub workflow editor. Its actions are pinned to verified official commit SHAs. The workflow grants read-only repository access and has no deployment, secret or external enquiry step. The local checks above actually ran; a GitHub Actions pass is not claimed.
