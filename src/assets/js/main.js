// Mobile nav drawer toggle
(function () {
  const burger = document.getElementById("burger");
  const drawer = document.getElementById("nav-drawer");
  if (!burger || !drawer) return;

  function closeDrawer() {
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    drawer.classList.remove("open");
    document.body.style.overflow = "";
  }

  burger.addEventListener("click", () => {
    const isOpen = drawer.classList.toggle("open");
    burger.classList.toggle("open", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  document.addEventListener("click", (e) => {
    if (drawer.classList.contains("open") && !drawer.contains(e.target) && !burger.contains(e.target)) {
      closeDrawer();
    }
  });

  drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeDrawer));
})();

// Blog tag filter (progressive enhancement - all posts are visible without JS)
(function () {
  const filterBar = document.querySelector("[data-blog-filters]");
  if (!filterBar) return;

  const items = document.querySelectorAll("[data-blog-item]");

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-tag]");
    if (!btn) return;
    const tag = btn.dataset.tag;

    filterBar.querySelectorAll("[data-tag]").forEach((b) => b.classList.toggle("active", b === btn));
    items.forEach((item) => {
      const tags = (item.dataset.tags || "").split("|");
      item.hidden = tag !== "all" && !tags.includes(tag);
    });
  });
})();

// Projects status filter
(function () {
  const filterBar = document.querySelector("[data-proj-filters]");
  if (!filterBar) return;

  const items = document.querySelectorAll("[data-proj-item]");

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-status]");
    if (!btn) return;
    const status = btn.dataset.status;

    filterBar.querySelectorAll("[data-status]").forEach((b) => b.classList.toggle("active", b === btn));
    items.forEach((item) => {
      item.hidden = status !== "all" && item.dataset.status !== status;
    });
  });
})();

// Table of contents scroll-spy on blog posts
(function () {
  const tocList = document.getElementById("toc-list");
  const tocCard = document.getElementById("toc-card");
  const headings = document.querySelectorAll(".post-content h2");
  if (!tocList || !tocCard || !headings.length) return;

  const NAV_H = 90;
  const links = [];

  headings.forEach((h, i) => {
    h.id = h.id || "s" + i;
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = h.textContent;
    a.href = "#" + h.id;
    a.addEventListener("click", (ev) => {
      ev.preventDefault();
      const top = h.getBoundingClientRect().top + window.scrollY - NAV_H;
      window.scrollTo({ top, behavior: "smooth" });
    });
    li.appendChild(a);
    tocList.appendChild(li);
    links.push(a);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = [...headings].indexOf(entry.target);
          links.forEach((a, i) => a.classList.toggle("toc-active", i === idx));
        }
      });
    },
    { rootMargin: `-${NAV_H}px 0px -60% 0px` }
  );
  headings.forEach((h) => observer.observe(h));
})();
