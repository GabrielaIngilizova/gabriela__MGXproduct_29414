// Handle uncaught exceptions in the application
Cypress.on('uncaught:exception', (err) => {
  // Ignore common application errors
  if (
    err.message.includes('postMessage') || 
    err.message.includes('null') ||
    err.message.includes('predefined') ||
    err.message.includes('Cannot read properties of undefined') ||
    err.message.includes('status code 412') ||
    err.message.includes('Request failed')
  ) {
    return false;
  }
  return true;
});
