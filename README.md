<div align="center">

# Prompto CLI

### Your Ultimate Command Reference Companion
**Instantly access command references for Git, NPM, Docker, and more—right in your terminal.**

[Installation](#installation) • [Usage](#usage) • [Features](#features) • [Contributing](#contributing)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Available Commands](#available-commands)
- [Examples](#examples)
- [Development](#development)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)
- [Support](#support)

---

## Overview

**Prompto CLI** is a lightweight, cross-platform command-line tool designed to help developers quickly reference commonly used commands without leaving the terminal or opening a browser. Whether you're working with Git, NPM, Docker, or Python, Prompto provides instant access to essential commands with clear descriptions.

### Why Prompto?

- **Instant Access**: No more context switching to search online
- **Organized**: Commands grouped by category for easy navigation
- **Universal**: Works on Windows, macOS, and Linux
- **Lightweight**: Zero dependencies, minimal footprint
- **Extensible**: Easy to add your own command categories

---

## Features

| Feature | Description |
|---------|-------------|
| **Multi-Category Support** | Git, NPM, PNPM, Yarn, Docker, Node.js, Python, and System commands |
| **Cross-Platform** | Compatible with cmd, PowerShell, Bash, Zsh, and Fish |
| **Clean Interface** | Numbered lists with clear descriptions |
| **No Dependencies** | Pure Node.js, no external packages required |
| **Offline Ready** | Works without internet connection |
| **Fast Lookup** | Instant command reference retrieval |
| **Easy Extension** | Simple JSON-like structure for adding commands |

---

## Installation

### Global Installation (Recommended)

Install Prompto globally to use it from anywhere in your terminal:

```bash
npm install -g prompto-cli
```

### Verify Installation

```bash
prompto --version
```

### Alternative: Local Installation

```bash
npm install prompto-cli
npx prompto
```

### From Source

```bash
git clone https://github.com/yourusername/prompto.git
cd prompto
npm install -g .
```

### Requirements

- **Node.js**: Version 12.0.0 or higher
- **npm**: Version 6.0.0 or higher

---

## Usage

### Basic Usage

Display all available command categories:

```bash
prompto
```

### View Specific Category

Display commands for a specific category:

```bash
prompto <category>
```

Replace `<category>` with any of the available categories listed below.

---

## Available Commands

Prompto currently supports the following command categories:

### Core Development

| Command | Category | Commands Included |
|---------|----------|-------------------|
| `prompto github` | **Git/GitHub** | init, clone, commit, push, pull, branch, merge, stash, etc. |
| `prompto node` | **Node.js** | Running scripts, version checks, NPX commands |

### Package Managers

| Command | Category | Commands Included |
|---------|----------|-------------------|
| `prompto npm` | **NPM** | install, init, update, publish, audit, scripts |
| `prompto pnpm` | **PNPM** | install, add, remove, update, store management |
| `prompto yarn` | **Yarn** | install, add, remove, upgrade, scripts |

### DevOps & Containers

| Command | Category | Commands Included |
|---------|----------|-------------------|
| `prompto docker` | **Docker** | build, run, ps, stop, logs, compose, exec |

### Languages & Tools

| Command | Category | Commands Included |
|---------|----------|-------------------|
| `prompto python` | **Python/Pip** | pip install, virtual environments, requirements |
| `prompto system` | **System** | Navigation, file operations, directory management |

---

## Examples

### Example 1: Git Commands

```bash
$ prompto github

Git/GitHub Commands

──────────────────────────────────────────────────────────────────────

 1. git init
    Initialize a new Git repository

 2. git clone <url>
    Clone a repository

 3. git status
    Check repository status

 4. git add .
    Stage all changes

 5. git commit -m "message"
    Commit staged changes
...
```

### Example 2: NPM Commands

```bash
$ prompto npm

NPM Commands

──────────────────────────────────────────────────────────────────────

 1. npm init
    Initialize new package.json

 2. npm install
    Install all dependencies

 3. npm install <package>
    Install a package
...
```

### Example 3: Docker Commands

```bash
$ prompto docker

Docker Commands

──────────────────────────────────────────────────────────────────────

 1. docker build -t <n> .
    Build image from Dockerfile

 2. docker run <image>
    Run a container

 3. docker ps
    List running containers
...
```

---

## Development

### Setup Development Environment

Clone and set up the project:

```bash
# Clone the repository
git clone https://github.com/yourusername/prompto.git
cd prompto

# Install as global package for testing
npm install -g .

# Test the CLI
prompto
prompto github
```

### Project Structure

```
prompto/
├── index.js          # Main CLI application
├── package.json      # Package configuration
├── README.md         # Documentation
├── LICENSE           # MIT License
└── .gitignore        # Git ignore rules
```

### Adding New Commands

To add a new command category, edit `index.js`:

```javascript
commands.yourcategory = {
  name: 'Your Category Name',
  commands: [
    { cmd: 'your command', desc: 'Description of what it does' },
    { cmd: 'another command', desc: 'Another description' }
  ]
};
```

### Testing

```bash
# Run the CLI locally
node index.js

# Test specific category
node index.js github
```

---

## Contributing

Contributions are welcome and appreciated! Here's how you can help:

### Ways to Contribute

- Report bugs and issues
- Suggest new command categories
- Improve documentation
- Add new features
- Fix bugs and issues

### Contribution Guidelines

1. **Fork the repository**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make your changes**
   - Follow existing code style
   - Add clear command descriptions
   - Test your changes locally

4. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

5. **Push to your branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open a Pull Request**
   - Provide clear description of changes
   - Reference any related issues

### Code Style

- Use consistent indentation (2 spaces)
- Add descriptive comments for complex logic
- Keep command descriptions concise and clear
- Test on multiple platforms if possible

### Suggesting New Categories

When suggesting new command categories, please include:
- Category name
- At least 10 commonly used commands
- Clear, concise descriptions for each command
- Use cases or target audience

---

## Changelog

### v1.0.0 (2025-01-XX)

**Initial Release**

- Added Git/GitHub commands (20 commands)
- Added NPM commands (18 commands)
- Added PNPM commands (14 commands)
- Added Docker commands (14 commands)
- Added Node.js commands (9 commands)
- Added Yarn commands (9 commands)
- Added Python/Pip commands (10 commands)
- Added System commands (10 commands)
- Clean, numbered command output
- Cross-platform support
- Zero dependencies

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software")...
```

---

## Support

### Get Help

- [Read the Documentation](https://github.com/yourusername/prompto#readme)
- [Report Issues](https://github.com/yourusername/prompto/issues)
- [Start a Discussion](https://github.com/yourusername/prompto/discussions)

### Show Your Support

If Prompto has helped you, please consider:

- **Star this repository** on GitHub
- **Share it** on social media
- **Write a blog post** about it
- **Buy me a coffee** (if you'd like to add donation link)

### Connect

- **Author**: Your Name
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Twitter**: [@yourtwitter](https://twitter.com/yourtwitter)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **Website**: [yourwebsite.com](https://yourwebsite.com)

---

## Acknowledgments

- Inspired by the need for quick command references
- Built with care for the developer community
- Thanks to all contributors and users

---

## Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/prompto?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/prompto?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/prompto)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/prompto)

---

<div align="center">

**Made with care by developers, for developers**

[Back to Top](#prompto-cli)

</div>