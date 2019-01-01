#!/usr/bin/env node
const meow = require('meow');

const start = require('../src/commands/start');
const build = require('../src/commands/build');
const validateCommand = require('./extensions/validateCommand');

function run(argv) {
  const cli = meow(
    `
    Usage
      $ electron-scripts <input>
 
    Examples
      Start the script in development mode.
      $ electron-scripts start

      Build the app into build targets
      $ electron-scripts build
  `,
    {
      flags: {},
    }
  );

  const command = cli.input[0];

  if (validateCommand(cli, command)) {
    switch (command) {
      case 'start':
        start(cli);
        break;
      case 'build':
        build(cli);
        break;
    }
  }
}

module.exports = { run };
