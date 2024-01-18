class Worker {
  constructor(workerScript) {
    // Simulate the behavior of the Worker constructor
    this.workerScript = workerScript;
    this.listeners = {};

    // Simulate the behavior of the postMessage method
    this.postMessage = (message) => {
      if (this.listeners.message) {
        this.listeners.message({ data: message });
      }
    };

    // Simulate the behavior of the addEventListener method
    this.addEventListener = (eventName, callback) => {
      this.listeners[eventName] = callback;
    };

    // Simulate the behavior of the terminate method
    this.terminate = () => {
      // Additional cleanup if needed
    };

    // Simulate the behavior of starting the worker immediately
    this.postMessage('start');
  }
}

// Export the Worker class to simulate worker-loader behavior
module.exports = Worker;
