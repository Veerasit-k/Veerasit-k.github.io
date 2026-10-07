/**
 * ACADEMIC PORTFOLIO SCRIPTS (LEAN & MINIMAL)
 * Veerasit Kaewbundit
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initPubTabs();
  initContactForm();
  initYearsExp();
});

/* Dynamic Years of Experience (start: Apr 2023) */
function initYearsExp() {
  const el = document.getElementById('years-exp');
  if (!el) return;
  const start = new Date(2023, 3); // Apr 2023 (month is 0-indexed)
  const diff = (Date.now() - start) / (1000 * 60 * 60 * 24 * 365.25);
  el.textContent = Math.round(diff);
}

/* Theme Toggle */
function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  applyTheme(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      showToast(`Switched to ${newTheme === 'light' ? 'Light' : 'Dark'} mode`);
    });
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeIcon) themeIcon.textContent = '🌙';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIcon) themeIcon.textContent = '☀️';
    }
    localStorage.setItem('portfolio-theme', theme);
  }
}

/* Mobile Menu */
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('nav-menu');
  const links = document.querySelectorAll('.nav-link');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', menu.classList.contains('open'));
    });

    links.forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
      });
    });
  }
}

/* Publication Tabs */
function initPubTabs() {
  const tabBtns = document.querySelectorAll('.pub-tab-btn');
  const tabPanels = document.querySelectorAll('.pub-tab-panel');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach((b) => b.classList.remove('active'));
      tabPanels.forEach((p) => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/* Contact Form & Clipboard */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const copyEmailBtn = document.getElementById('copy-email-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value;
      const email = document.getElementById('contact-email')?.value;
      const message = document.getElementById('contact-message')?.value;

      if (!name || !email || !message) {
        showToast('Please fill out all fields.');
        return;
      }

      const mailtoLink = `mailto:veerasit.k@example.com?subject=Academic Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;
      window.location.href = mailtoLink;
      showToast('Opening email client...');
      contactForm.reset();
    });
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = copyEmailBtn.getAttribute('data-email') || 'veerasit.k@example.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied ${email} to clipboard!`);
      }).catch(() => {
        showToast('Unable to copy.');
      });
    });
  }
}

/* Toast Notification Utility */
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2800);
}

window.showToast = showToast;
