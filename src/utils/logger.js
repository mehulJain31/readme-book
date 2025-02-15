const logger = {
  info: (...args) => {
    console.log(new Date().toISOString(), '[INFO]', ...args);
  },
  error: (...args) => {
    console.error(new Date().toISOString(), '[ERROR]', ...args);
  },
  debug: (...args) => {
    console.log(new Date().toISOString(), '[DEBUG]', ...args);
  }
};

export default logger; 