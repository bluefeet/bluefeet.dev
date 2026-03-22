## Task-Specific Prompts

This repository includes two task-specific prompt files that should be treated
as active instructions when their task category applies:

- `RESUME_WRITER_PROMPT.md`
- `SOFTWARE_ENGINEER_PROMPT.md`

Use them as follows:

1. For resume-writing work, first read `RESUME_WRITER_PROMPT.md` and follow it
   as the primary task-specific instruction. This includes:
   - editing or reviewing `app/resume.ts`
   - rewriting resume copy, summaries, bullets, skills, or testimonials
   - improving resume positioning, tone, or targeting
   - other work where the main goal is resume quality rather than application
     engineering

2. For software-engineering work, first read `SOFTWARE_ENGINEER_PROMPT.md` and
   follow it as the primary task-specific instruction. This includes:
   - implementing features or fixes
   - refactoring
   - debugging
   - code review
   - tests, validation, and maintenance
   - UI, component, data-flow, and architectural changes
   - any repository work whose main goal is improving the application or codebase

3. If a task spans both categories, apply both prompts, but let the primary goal
   determine precedence:
   - if the main task is improving resume content, prioritize
     `RESUME_WRITER_PROMPT.md`
   - otherwise prioritize `SOFTWARE_ENGINEER_PROMPT.md`

4. Unless the task is clearly resume-specific, default to
   `SOFTWARE_ENGINEER_PROMPT.md`.

Read the relevant prompt file before making substantive recommendations, edits,
or reviews.

## Project Overview

This repository is a single-package Next.js 16 app using the App Router.
It builds as a static export, so prefer changes that remain compatible with
`next build` output unless a task explicitly changes the deployment model.

The main code lives in `app/`. Static assets live in `public/`.

## Content And Data

Most site content is defined in `app/resume.ts`. When changing resume content,
prefer editing that data file instead of hardcoding text in components.

Components read resume data through `app/resumeContext.ts`. Preserve the
existing pattern of handling optional fields defensively.

Markdown content is rendered through `app/RenderMarkdown.tsx`. Treat that path
as trusted local content and do not extend it to render untrusted input without
an explicit sanitization step.

## Validation

Use the project scripts in `package.json` as the source of truth for checks:

- `npm run format`
- `npm run lint`
- `npm run check-types`
- `npm test`
- `npm run test-update-snapshots`
- `npm run preflight`

Run `npm run format` before committing code changes so formatting drift is
fixed locally instead of surfacing later in `preflight` or CI.

For focused changes, run `lint`, `check-types`, and `test`. Before finishing
broader work, prefer `npm run preflight`.

## Testing Notes

The test suite uses Vitest with snapshot-heavy component tests. Content changes,
especially in `app/resume.ts`, often require `npm run test-update-snapshots`.

When making a change that is expected to alter rendered output, first determine
whether the change should affect snapshots. If it should, run
`npm run test-update-snapshots` before `npm test` so the normal test run is a
validation pass rather than a discovery pass.

Do not accept snapshot updates blindly. After updating snapshots, inspect the
snapshot diff and verify that the changed output matches the intended behavior
and contains no accidental regressions before considering the update valid.

Coverage expectations are strict. New rendering branches or logic should
usually come with test updates in the corresponding `app/*.test.tsx` files.

## Styling And UI

Styling uses Tailwind CSS v4. Formatting is handled by Prettier with import
sorting and Tailwind class sorting plugins, so prefer running the formatter
instead of hand-tuning import order or class order.

Preserve responsive behavior and print-specific styling when editing layout
components. This site is designed for both on-screen viewing and printed/PDF
output.

## Runtime Constraints

`app/page.tsx` is a client component and contains browser-only behavior such as
audio playback and scroll interactions. Be careful when changing code that uses
browser APIs, and keep those changes compatible with the existing test setup.

## Environment Notes

Node version files currently differ. Do not change `.nvmrc` or
`.tool-versions` unless the task explicitly asks for environment updates.

## Commit Messages

When drafting, reviewing, or creating a commit message, first inspect the
relevant diff. Choose the commit type based on the change's primary effect, not
the file extension or amount of prose. Use `docs` only when the main change is
human-facing documentation; prefer `feat`, `fix`, or `chore` when those better
match the actual change.

Write the header as `<type>(<scope>): <summary>` in imperative mood. Validate
with shell commands that the header is 50 characters or fewer before committing.

Before creating the commit, run `npm run format` if the diff includes files
that Prettier manages.

Add a body only when context is useful. Use it to explain why the change was
made, not to restate implementation details already obvious from the diff. Treat
the body as one or more paragraphs, and wrap each paragraph to 72 columns with
shell commands before passing it to `git commit -m`.

Prefer repeated `git commit -m` flags: one for the header and one for each body
paragraph. If a wrapped paragraph contains line breaks, pass those as real
newline characters inside that single `-m` argument. Do not use literal `\n`
escapes inside `-m` arguments.
