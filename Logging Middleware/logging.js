function logEvent(eventType, message, meta = {}) {
  const timestamp = new Date().toISOString();
  const log = {
    timestamp,
    eventType,
    message,
    meta,
  };

  
  const existingLogs = JSON.parse(localStorage.getItem('logs') || '[]');
  existingLogs.push(log);
  localStorage.setItem('logs', JSON.stringify(existingLogs));
}

export default logEvent;
