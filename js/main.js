// ============================================================
// Jamal Shah Portfolio — shared behaviour
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  // Active nav link based on current file name
  const current = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Duplicate KPI ticker content for seamless infinite scroll
  document.querySelectorAll('.kpi-track').forEach(track => {
    track.innerHTML += track.innerHTML;
  });

  // Blog listing (reads /data/posts.json — add a new object to that file
  // and it appears here automatically, no rebuild step needed)
  const blogList = document.querySelector('[data-blog-list]');
  if (blogList) {
    fetch('data/posts.json')
      .then(r => r.json())
      .then(posts => {
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        blogList.innerHTML = posts.map(p => `
          <article class="post-card">
            <div class="post-date">${formatDate(p.date)}</div>
            <div>
              <h3><a href="${p.url}">${p.title}</a></h3>
              <p>${p.excerpt}</p>
              <div class="post-meta">
                ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
              </div>
            </div>
          </article>
        `).join('');
      })
      .catch(() => {
        blogList.innerHTML = '<p>Posts could not be loaded. If you are viewing this file directly from disk, run a local server (see README) — browsers block JSON fetches from file:// URLs.</p>';
      });
  }

  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  }
});
