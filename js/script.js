// Theme toggle
const themeToggleBtn = document.getElementById('themeToggle');

function setTheme(isDark) {
  if (isDark) {
    document.body.classList.add('dark-theme');
    themeToggleBtn.textContent = '☀️ Light Mode';
    localStorage.setItem('darkMode', 'true');
  } else {
    document.body.classList.remove('dark-theme');
    themeToggleBtn.textContent = '🌙 Dark Mode';
    localStorage.setItem('darkMode', 'false');
  }
}

// On page load, check localStorage and apply saved theme
let darkMode = localStorage.getItem('darkMode') === 'true';
setTheme(darkMode);

themeToggleBtn.addEventListener('click', () => {
  darkMode = !darkMode;
  setTheme(darkMode);
});


// Show/hide Back to Top button
window.onscroll = function () {
  const btn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}



function updateTime() {
  const now = new Date();
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  document.getElementById("current-time").textContent = now.toLocaleTimeString([], options);
}
setInterval(updateTime, 1000);
updateTime();



  const cookieBanner = document.getElementById('cookieConsent');
  const acceptBtn = document.getElementById('acceptCookiesBtn');

  // Check if cookie consent was previously given
  if(localStorage.getItem('cookiesAccepted') === 'true') {
    cookieBanner.style.display = 'none';
  }

  // When user clicks accept
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.style.display = 'none';
  });
