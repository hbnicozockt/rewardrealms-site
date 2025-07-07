document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.replace(/^\/|\/$/g, ''); // z.B. "roblox"
  
  document.querySelectorAll('.tab-button').forEach(button => {
    const tabId = button.getAttribute('aria-controls');
    
    if (tabId === currentPath) {
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
    } else {
      button.classList.remove('active');
      button.setAttribute('aria-selected', 'false');
    }

    button.addEventListener('click', () => {
      window.location.href = '/' + tabId + '/';
    });
  });
});
