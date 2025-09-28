#!/usr/bin/env node

const commands = {
    github: {
      name: 'Git/GitHub Commands',
      commands: [
        { cmd: 'git init', desc: 'Initialize a new Git repository' },
        { cmd: 'git clone <url>', desc: 'Clone a repository' },
        { cmd: 'git status', desc: 'Check repository status' },
        { cmd: 'git add .', desc: 'Stage all changes' },
        { cmd: 'git add <file>', desc: 'Stage specific file' },
        { cmd: 'git commit -m "message"', desc: 'Commit staged changes' },
        { cmd: 'git push', desc: 'Push commits to remote' },
        { cmd: 'git push origin <branch>', desc: 'Push to specific branch' },
        { cmd: 'git pull', desc: 'Pull latest changes' },
        { cmd: 'git branch', desc: 'List all branches' },
        { cmd: 'git branch <name>', desc: 'Create new branch' },
        { cmd: 'git checkout <branch>', desc: 'Switch to branch' },
        { cmd: 'git checkout -b <branch>', desc: 'Create and switch to new branch' },
        { cmd: 'git merge <branch>', desc: 'Merge branch into current' },
        { cmd: 'git log', desc: 'View commit history' },
        { cmd: 'git diff', desc: 'Show unstaged changes' },
        { cmd: 'git stash', desc: 'Stash current changes' },
        { cmd: 'git stash pop', desc: 'Apply stashed changes' },
        { cmd: 'git remote -v', desc: 'View remote repositories' },
        { cmd: 'git reset --hard', desc: 'Reset to last commit (CAREFUL!)' }
      ]
    },
    npm: {
      name: 'NPM Commands',
      commands: [
        { cmd: 'npm init', desc: 'Initialize new package.json' },
        { cmd: 'npm init -y', desc: 'Initialize with defaults' },
        { cmd: 'npm install', desc: 'Install all dependencies' },
        { cmd: 'npm install <package>', desc: 'Install a package' },
        { cmd: 'npm install -D <package>', desc: 'Install as dev dependency' },
        { cmd: 'npm install -g <package>', desc: 'Install globally' },
        { cmd: 'npm uninstall <package>', desc: 'Remove a package' },
        { cmd: 'npm update', desc: 'Update all packages' },
        { cmd: 'npm run <script>', desc: 'Run package.json script' },
        { cmd: 'npm start', desc: 'Run start script' },
        { cmd: 'npm test', desc: 'Run test script' },
        { cmd: 'npm run build', desc: 'Run build script' },
        { cmd: 'npm list', desc: 'List installed packages' },
        { cmd: 'npm outdated', desc: 'Check for outdated packages' },
        { cmd: 'npm audit', desc: 'Check for vulnerabilities' },
        { cmd: 'npm audit fix', desc: 'Fix vulnerabilities automatically' },
        { cmd: 'npm cache clean --force', desc: 'Clear npm cache' },
        { cmd: 'npm publish', desc: 'Publish package to npm' }
      ]
    },
    pnpm: {
      name: 'PNPM Commands',
      commands: [
        { cmd: 'pnpm init', desc: 'Initialize new package.json' },
        { cmd: 'pnpm install', desc: 'Install all dependencies' },
        { cmd: 'pnpm add <package>', desc: 'Install a package' },
        { cmd: 'pnpm add -D <package>', desc: 'Install as dev dependency' },
        { cmd: 'pnpm add -g <package>', desc: 'Install globally' },
        { cmd: 'pnpm remove <package>', desc: 'Remove a package' },
        { cmd: 'pnpm update', desc: 'Update all packages' },
        { cmd: 'pnpm run <script>', desc: 'Run package.json script' },
        { cmd: 'pnpm start', desc: 'Run start script' },
        { cmd: 'pnpm test', desc: 'Run test script' },
        { cmd: 'pnpm list', desc: 'List installed packages' },
        { cmd: 'pnpm outdated', desc: 'Check for outdated packages' },
        { cmd: 'pnpm store prune', desc: 'Clean unused packages from store' },
        { cmd: 'pnpm import', desc: 'Import from package-lock.json' }
      ]
    },
    docker: {
      name: 'Docker Commands',
      commands: [
        { cmd: 'docker build -t <name> .', desc: 'Build image from Dockerfile' },
        { cmd: 'docker run <image>', desc: 'Run a container' },
        { cmd: 'docker run -d <image>', desc: 'Run container in background' },
        { cmd: 'docker run -p 8080:80 <image>', desc: 'Run with port mapping' },
        { cmd: 'docker ps', desc: 'List running containers' },
        { cmd: 'docker ps -a', desc: 'List all containers' },
        { cmd: 'docker stop <container>', desc: 'Stop a container' },
        { cmd: 'docker rm <container>', desc: 'Remove a container' },
        { cmd: 'docker images', desc: 'List all images' },
        { cmd: 'docker rmi <image>', desc: 'Remove an image' },
        { cmd: 'docker exec -it <container> bash', desc: 'Execute bash in container' },
        { cmd: 'docker logs <container>', desc: 'View container logs' },
        { cmd: 'docker-compose up', desc: 'Start services with compose' },
        { cmd: 'docker-compose down', desc: 'Stop services with compose' }
      ]
    },
    node: {
      name: 'Node.js Commands',
      commands: [
        { cmd: 'node <file.js>', desc: 'Run JavaScript file' },
        { cmd: 'node -v', desc: 'Check Node.js version' },
        { cmd: 'node --version', desc: 'Check Node.js version' },
        { cmd: 'node -e "code"', desc: 'Execute inline JavaScript' },
        { cmd: 'node inspect <file.js>', desc: 'Debug a file' },
        { cmd: 'npx <package>', desc: 'Execute package without installing' },
        { cmd: 'npx create-react-app <name>', desc: 'Create React app' },
        { cmd: 'npx create-next-app <name>', desc: 'Create Next.js app' },
        { cmd: 'npx tsc --init', desc: 'Initialize TypeScript config' }
      ]
    },
    yarn: {
      name: 'Yarn Commands',
      commands: [
        { cmd: 'yarn init', desc: 'Initialize new package.json' },
        { cmd: 'yarn install', desc: 'Install all dependencies' },
        { cmd: 'yarn add <package>', desc: 'Install a package' },
        { cmd: 'yarn add -D <package>', desc: 'Install as dev dependency' },
        { cmd: 'yarn remove <package>', desc: 'Remove a package' },
        { cmd: 'yarn upgrade', desc: 'Update all packages' },
        { cmd: 'yarn run <script>', desc: 'Run package.json script' },
        { cmd: 'yarn start', desc: 'Run start script' },
        { cmd: 'yarn test', desc: 'Run test script' }
      ]
    },
    python: {
      name: 'Python/Pip Commands',
      commands: [
        { cmd: 'python --version', desc: 'Check Python version' },
        { cmd: 'python <file.py>', desc: 'Run Python file' },
        { cmd: 'pip install <package>', desc: 'Install a package' },
        { cmd: 'pip install -r requirements.txt', desc: 'Install from requirements' },
        { cmd: 'pip uninstall <package>', desc: 'Remove a package' },
        { cmd: 'pip list', desc: 'List installed packages' },
        { cmd: 'pip freeze > requirements.txt', desc: 'Export dependencies' },
        { cmd: 'python -m venv venv', desc: 'Create virtual environment' },
        { cmd: 'venv\\Scripts\\activate', desc: 'Activate venv (Windows)' },
        { cmd: 'source venv/bin/activate', desc: 'Activate venv (Unix)' }
      ]
    },
    system: {
      name: 'System Commands',
      commands: [
        { cmd: 'cd <directory>', desc: 'Change directory' },
        { cmd: 'cd ..', desc: 'Go up one directory' },
        { cmd: 'dir (Windows) / ls (Unix)', desc: 'List files in directory' },
        { cmd: 'mkdir <name>', desc: 'Create new directory' },
        { cmd: 'rmdir <name>', desc: 'Remove directory' },
        { cmd: 'del <file> (Win) / rm <file> (Unix)', desc: 'Delete file' },
        { cmd: 'copy (Win) / cp (Unix)', desc: 'Copy files' },
        { cmd: 'move (Win) / mv (Unix)', desc: 'Move/rename files' },
        { cmd: 'cls (Win) / clear (Unix)', desc: 'Clear terminal' },
        { cmd: 'echo <text>', desc: 'Print text to console' }
      ]
    }
  };
  
  function displayHelp() {
    console.log('\nPrompto - Command Reference Tool\n');
    console.log('Usage: prompto [category]\n');
    console.log('Available categories:\n');
    
    Object.keys(commands).forEach(key => {
      console.log(`  prompto ${key.padEnd(12)} - ${commands[key].name}`);
    });
    
    console.log('\nExamples:');
    console.log('  prompto github    - Show Git/GitHub commands');
    console.log('  prompto npm       - Show NPM commands');
    console.log('  prompto           - Show this help message\n');
  }
  
  function displayCommands(category) {
    const cat = commands[category];
    if (!cat) {
      console.log(`\nUnknown category: ${category}`);
      console.log('Run "prompto" without arguments to see available categories.\n');
      return;
    }
  
    console.log(`\n${cat.name}\n`);
    console.log('─'.repeat(70));
    
    cat.commands.forEach((item, index) => {
      console.log(`\n${(index + 1).toString().padStart(2)}. ${item.cmd}`);
      console.log(`    ${item.desc}`);
    });
    
    console.log('\n' + '─'.repeat(70) + '\n');
  }
  
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    displayHelp();
  } else {
    const category = args[0].toLowerCase().replace('-', '');
    displayCommands(category);
  }