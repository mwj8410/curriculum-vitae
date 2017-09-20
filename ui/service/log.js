/* global module, require */

const levels = {
  silent: 0,
  error: 1,
  security: 2,
  warning: 3,
  notice: 4,
  info: 5,
  activity: 8,
  all: 10
};

let logLevel = 10;

const Log = {
  /**
   * Sets the log level to Activity messages and every Log level below.
   * @param {string} module Recognizable name for the reporting module.
   * @param {string} method Name of the method that experienced the error.
   * @param {string} message Short description of the error situation.
   */
  activity: (module, method, message) => {
    if (logLevel >= levels.activity) {
      console.log(
        `%cActivity: ${module} >> ${method}%c ${message}`,
        'color: blue', 'color: black'
      );
    }
  },

  /**
   * Sets the log level to Errors only.
   * This is the lowest level of Logs.
   * @param {string} module Recognizable name for the reporting module.
   * @param {string} method Name of the method that experienced the error.
   * @param {string} message Short description of the error situation.
   * @param {Error} error Error object
   */
  error: (module, method, message, error) => {
    if (logLevel >= levels.error) {
      console.log(
        `%cError: ${module} >> ${method}%c ${message}\n${error}`,
        'color: red', 'color: black'
      );
    }
  },

  /**
   * Sets the log level to Info messages and every Log level below.
   * @param {string} module Recognizable name for the reporting module.
   * @param {string} method Name of the method that experienced the log event.
   * @param {string} message Short description of the situation.
   */
  info: (module, method, message) => {
    if (logLevel >= levels.info) {
      console.log(
        `%cInformation: ${module} >> ${method}%c ${message}`,
        'color: cyan', 'color: black'
      );
    }
  },

  /**
   * Sets the log level to Notice messages and every Log level below.
   * @param {string} module Recognizable name for the reporting module.
   * @param {string} method Name of the method that experienced the log event.
   * @param {string} message Short description of the situation.
   */
  notice: (module, method, message) => {
    if (logLevel >= levels.notice) {
      console.log(
        `%cNotice: ${module} >> ${method}%c ${message}`,
        'color: green', 'color: black'
      );
    }
  },

  /**
   * Configures what level of messages to show.
   * @param {string} levelName
   */
  setLevel: (levelName) => {
    let levelCode = levels[levelName];
    if (typeof levelCode === 'undefined') {
      levelCode = levels['all'];
    }
    logLevel = levelCode;
  },

  /**
   * Sets the log level to Warning messages and every Log level below.
   * @param {string} module Recognizable name for the reporting module.
   * @param {string} method Name of the method that experienced the log event.
   * @param {string} message Short description of the situation.
   */
  warning: (module, method, message) => {
    if (logLevel >= levels.warning) {
      console.log(
        `%cWarning: ${module} >> ${method}%c ${message}`,
        'background: black; color: yellow;', 'color: black;'
      );
    }
  }
};

module.exports = Log;
