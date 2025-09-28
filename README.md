<div align="center">

# Prompto

### Command Reference Tool for Developers
A lightweight command-line interface for instant access to commonly used development commands.

[Installation](#installation) • [Usage](#usage) • [Documentation](#documentation) • [Contributing](#contributing)

</div>

---

## Overview

Prompto is a developer productivity tool that provides quick command reference directly in your terminal. Access Git, NPM, Docker, Python, and other essential commands without leaving your workflow or searching documentation online.

### Key Benefits

- **Efficiency**: Eliminate context switching and browser searches
- **Organization**: Commands systematically categorized by tool and purpose  
- **Portability**: Cross-platform compatibility (Windows, macOS, Linux)
- **Simplicity**: Zero dependencies, minimal installation footprint
- **Extensibility**: Straightforward architecture for custom additions

---

## Features

| Feature | Description |
|---------|-------------|
| **Comprehensive Coverage** | Git, NPM, PNPM, Yarn, Docker, Node.js, Python, and System commands |
| **Shell Compatibility** | Works with cmd, PowerShell, Bash, Zsh, Fish, and other standard shells |
| **Clear Formatting** | Numbered command lists with concise descriptions |
| **Zero Dependencies** | Built with pure Node.js without external packages |
| **Offline Functionality** | Complete reference available without internet access |
| **Performance** | Instant command retrieval with minimal overhead |
| **Maintainability** | Simple data structure for easy updates and extensions |

---

## Installation

### Global Installation

Install Prompto globally for system-wide access:

```bash
npm install -g prompto
```

### Verification

Confirm successful installation:

```bash
prompto
```

### Local Installation

For project-specific usage:

```bash
npm install prompto
npx prompto
```

### Build from Source

Clone and install from repository:

```bash
git clone https://github.com/HirulaAbesignha/prompto.git
cd prompto
npm install -g .
```

### System Requirements

- Node.js 12.0.0 or higher
- npm 6.0.0 or higher

---

## Usage

### Display Available Categories

View all command categories:

```bash
prompto
```

### Access Specific Category

Display commands for a particular category:

```bash
prompto <category>
```

Replace `<category>` with any supported category name.

---

## Documentation

### Available Command Categories

#### Development Tools

| Command | Description | Total Commands |
|---------|-------------|----------------|
| `prompto github` | Git version control and GitHub operations | 20 |
| `prompto node` | Node.js runtime and NPX utilities | 9 |

#### Package Management

| Command | Description | Total Commands |
|---------|-------------|----------------|
| `prompto npm` | Node Package Manager operations | 18 |
| `prompto pnpm` | Performant NPM alternative | 14 |
| `prompto yarn` | Facebook's package manager | 9 |

#### Containers & DevOps

| Command | Description | Total Commands |
|---------|-------------|----------------|
| `prompto docker` | Container management and orchestration | 14 |

#### Programming Languages

| Command | Description | Total Commands |
|---------|-------------|----------------|
| `prompto python` | Python interpreter and pip package manager | 10 |

#### Operating System

| Command | Description | Total Commands |
|---------|-------------|----------------|
| `prompto system` | File system and directory operations | 10 |

---

## Command Examples

### Git Commands Reference

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

 6. git push
    Push commits to remote repository
```

### NPM Commands Reference

```bash
$ prompto npm

NPM Commands

──────────────────────────────────────────────────────────────────────

 1. npm init
    Initialize new package.json

 2. npm install
    Install all dependencies

 3. npm install <package>
    Install a specific package

 4. npm install -D <package>
    Install as development dependency
```

### Docker Commands Reference

```bash
$ prompto docker

Docker Commands

──────────────────────────────────────────────────────────────────────

 1. docker build -t <name> .
    Build image from Dockerfile

 2. docker run <image>
    Run a container from image

 3. docker ps
    List running containers

 4. docker stop <container>
    Stop a running container
```

---

## Development

### Environment Setup

Initialize development environment:

```bash
git clone https://github.com/HirulaAbesignha/prompto.git
cd prompto
npm install -g .
```

### Project Architecture

```
prompto/
├── index.js          # Main application entry point
├── package.json      # Package metadata and dependencies
├── README.md         # Project documentation
├── LICENSE           # MIT License text
└── .gitignore        # Git exclusion rules
```

### Extending Command Categories

Add new categories by modifying the commands object in `index.js`:

```javascript
commands.categoryname = {
  name: 'Category Display Name',
  commands: [
    { cmd: 'command syntax', desc: 'Brief description of functionality' },
    { cmd: 'another command', desc: 'Another command description' }
  ]
};
```

### Local Testing

Test modifications locally:

```bash
node index.js
node index.js <category>
```

### Code Standards

- Maintain 2-space indentation
- Document complex logic with inline comments
- Ensure descriptions are clear and concise
- Test across multiple operating systems when possible

---

## Contributing

### Contribution Types

- Bug reports and issue documentation
- New command category suggestions
- Documentation improvements
- Feature implementations
- Bug fixes and optimizations

### Submission Process

**Step 1: Fork Repository**
```bash
# Use GitHub's fork functionality
```

**Step 2: Create Feature Branch**
```bash
git checkout -b feature/descriptive-name
```

**Step 3: Implement Changes**
- Follow established code patterns
- Maintain consistent formatting
- Test thoroughly before committing

**Step 4: Commit Changes**
```bash
git commit -m 'Brief description of changes'
```

**Step 5: Push to Remote**
```bash
git push origin feature/descriptive-name
```

**Step 6: Submit Pull Request**
- Provide detailed description of modifications
- Link related issues if applicable
- Respond to review feedback promptly

### Category Proposal Guidelines

When proposing new command categories, include:

- Precise category name and scope
- Minimum of 10 frequently used commands
- Clear, actionable descriptions for each command
- Target user base and use cases
- Justification for inclusion

---

## Version History

### Version 1.0.0

**Release Date**: September 2025

**Initial Release Features**:

- Git/GitHub command reference (20 entries)
- NPM package manager commands (18 entries)
- PNPM package manager commands (14 entries)
- Docker container commands (14 entries)
- Node.js runtime commands (9 entries)
- Yarn package manager commands (9 entries)
- Python/Pip commands (10 entries)
- System operation commands (10 entries)
- Formatted command output with numbering
- Full cross-platform support
- Zero external dependencies

---

## License

This project is released under the MIT License. See the [LICENSE](LICENSE) file for complete terms.

---

## Support & Resources

### Documentation

- [Complete Documentation](https://github.com/HirulaAbesignha/prompto#readme)
- [Issue Tracker](https://github.com/HirulaAbesignha/prompto/issues)
- [Discussion Forum](https://github.com/HirulaAbesignha/prompto/discussions)

### Community

- **Repository**: [github.com/HirulaAbesignha/prompto](https://github.com/HirulaAbesignha/prompto)
- **Package Registry**: [npmjs.com/package/prompto](https://www.npmjs.com/package/prompto)
- **Author**: [Your Name]
- **Email**: your.email@example.com
- **Website**: [yourwebsite.com](https://yourwebsite.com)

### Recognition

If you find Prompto useful, please consider:

- Starring the repository on GitHub
- Sharing with fellow developers
- Contributing improvements or new features
- Providing feedback and suggestions

---

## Acknowledgments

This project was developed to address the common challenge of command recall in modern software development workflows. Special thanks to the open-source community for inspiration and support.

---

<div align="center">

**Prompto** - Streamline your development workflow

[Back to Top](#prompto)

</div>