# Contributing to Amazonis

Thank you for contributing to the **Amazonis** website repository.

This repository is maintained by **Amazonis IT Services Pvt. Ltd.** and is intended for authorized internal development and approved contributors.

## Development Workflow

All development should follow this workflow:

```text
Feature Branch
      ↓
   Develop
      ↓
   Testing
      ↓
     Main
      ↓
 Production
```

Developers should create a separate branch for every feature, fix, or improvement.

Example:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/service-page
```

After completing the work:

```bash
git add .
git commit -m "feat: add service page"
git push origin feature/service-page
```

Then create a Pull Request from the feature branch into `develop`.

## Branch Rules

### `main`

The `main` branch contains production-ready code.

Developers should not directly push code to `main`.

Changes should only be merged into `main` after:

* Development is complete
* Code review is complete
* Testing has passed
* Pull Request has been approved
* Production build has passed
