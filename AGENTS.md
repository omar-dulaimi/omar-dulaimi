# AGENTS.md

This file provides guidance for agentic coding agents working in this repository.

## Repository Overview

This is Omar Dulaimi's personal GitHub profile repository - a showcase/portfolio site displaying open source projects, statistics, and blog posts. It focuses on presentation rather than code execution.

## Build/Lint/Test Commands

**Note:** This is primarily a documentation repository without traditional build/test commands.

### Available Commands
- **Update blog posts:** `pnpm run update-blog` (via GitHub Actions workflow)
- **Update download stats:** `pnpm run update-stats` (via GitHub Actions workflow)
- **Manual workflow trigger:** Use GitHub UI to trigger workflows manually

### Git Operations
- **Single test file:** N/A (no test files)
- **Lint check:** N/A (no linting configured)
- **Type check:** N/A (no TypeScript compilation)
- **Build:** N/A (no build process)

## Code Style Guidelines

### File Structure
- `README.md`: Main portfolio page with project showcases
- `.github/workflows/`: GitHub Actions for automation
- `download_count.txt`: Tracks total npm package downloads
- `CLAUDE.md`: Claude-specific guidance
- `AGENTS.md`: This file for agent guidance

### Markdown Formatting
- Use consistent header hierarchy (H1 → H2 → H3)
- Tables for project listings with consistent column structure
- Badges and shields for visual consistency
- Code blocks with proper language specification
- Consistent emoji usage for visual appeal

### Content Organization
- **Projects section:** Group by category (Prisma, tRPC, Firebase, etc.)
- **Statistics:** Use shields.io badges for metrics
- **Blog posts:** Auto-updated via workflow, maintain chronological order
- **Links:** Use descriptive anchor text, consistent formatting

### Naming Conventions
- **Files:** kebab-case for workflows, PascalCase for documentation
- **Branches:** descriptive names for any changes
- **Commits:** Clear, descriptive messages (e.g., "Update download statistics to 878K+ total downloads")

### Error Handling
- Workflow failures: Check GitHub Actions logs for debugging
- API failures: Retry mechanism built into workflows
- Data validation: Manual review of generated content

### Import/Dependencies
- No package.json or dependencies (documentation-only repo)
- External services: dev.to RSS feed, npm API, shields.io
- GitHub integrations: Actions, releases, statistics

## Development Workflow

1. **Content Updates:** Edit README.md directly for project additions
2. **Statistics:** Automated via weekly workflow (Mondays 6AM UTC)
3. **Blog Posts:** Automated daily update (midnight UTC)
4. **Manual Triggers:** Use GitHub UI for immediate workflow execution

## Commit Guidelines

- **Message format:** "Update [what] to [value]" (e.g., "Update download statistics to 878K+")
- **Atomic commits:** One logical change per commit
- **Descriptive:** Include specific numbers/values changed
- **No sensitive data:** Never commit API keys or personal information

## Testing Strategy

- **Manual verification:** Review README.md rendering after changes
- **Workflow testing:** Test GitHub Actions via manual triggers
- **Link validation:** Ensure all project links are functional
- **Badge accuracy:** Verify shield URLs return correct data

## Deployment

- **Automatic:** Via GitHub Actions workflows
- **Manual:** Direct commits to main branch
- **No build step:** Changes deploy immediately on commit

## Security Notes

- No secrets management needed (public portfolio)
- API calls use public endpoints only
- No user data processing
- Safe for public repository operations