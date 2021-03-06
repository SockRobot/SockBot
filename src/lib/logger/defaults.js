'use strict'

module.exports = {
  OPTIONS: {
    level: 'info',
    inspect: true
  },

  LOGLEVELS: {
    silly: 0,
    verbose: 1,
    log: 2,
    info: 2,
    blank: 2,
    debug: 3,
    warn: 4,
    error: 5,
    critical: 6,
    silent: 7
  },

  PREFIXES: {
    silly: 'Silly',
    verbose: 'Verbose',
    log: 'Info',
    info: 'Info',
    debug: 'Debug',
    warn: 'Warn',
    error: 'ERROR',
    critical: 'CRITICAL'
  },

  COLORS: {
    silly: 'black',
    input: 'black',
    verbose: 'cyan',
    prompt: 'grey',
    log: 'green',
    info: 'green',
    blank: 'white',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red',
    critical: 'red'
  },

  METHODS: [
    'critical',
    'error',
    'warn',
    'debug',
    'info',
    'log',
    'blank',
    'verbose',
    'silly'
  ]
}
