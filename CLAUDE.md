# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is Omar Dulaimi's personal GitHub profile repository, containing a comprehensive README.md that showcases his open source projects and contributions. The repository serves as a personal portfolio displaying projects primarily focused on Prisma generators, tRPC utilities, Firebase tools, and GraphQL/TypeScript libraries.

## Structure

- **README.md**: Main profile page with project showcases, statistics, and blog posts
- **.github/workflows/blog-post-workflow.yml**: GitHub Action that automatically updates the README with latest blog posts from dev.to feed

## Key Features

### Automated Blog Post Updates
The repository uses a GitHub Action workflow that:
- Runs daily at midnight UTC
- Fetches the latest 20 blog posts from https://dev.to/feed/omardulaimi
- Updates the README.md automatically with new content

### Project Categories
The README showcases projects in two main categories:
1. **Open Source Projects**: Personal projects with download statistics
2. **Contributions**: Contributions to other open source projects

Main project themes include:
- Prisma ecosystem tools (schema sorters, generators for Joi/Yup/Zod/tRPC)
- Firebase and Firestore utilities
- GraphQL and tRPC tooling
- VS Code extensions

## Development Notes

This is primarily a showcase repository without build/test commands. Changes are typically limited to:
- Updating project information in README.md
- Modifying the blog post workflow configuration
- Adding new project entries to the showcase tables

The repository focuses on presentation rather than code execution, so there are no package.json, build scripts, or testing frameworks to consider.