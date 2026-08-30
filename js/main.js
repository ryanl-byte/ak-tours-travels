/* =========================================================================
   MAIN — small glue script. On every page load it re-renders the text from
   js/content.js, so editing that one file updates the whole site.
   If JavaScript ever fails, the page still shows the same words baked into
   the HTML — nothing breaks, it just stops auto-updating.
   ========================================================================= */

(function () {
  "use strict";
  if (typeof CONTENT === "undefined" || typeof RENDER === "undefined") return;

  var body = document.body;
  var base = body.getAttribute("data-base") || "";
  var slug = body.getAttribute("data-tour");

  function lookup(path) {
    return path.split(".").reduce(function (o, k) {
      return o == null ? o : o[k];
    }, CONTENT);
  }

  try {
    if (slug) {
      /* ---- tour detail page: rebuild the whole <main> from content.js ---- */
      var tour = CONTENT.tours.filter(function (t) { return t.slug === slug; })[0];
      if (tour) {
        var main = document.querySelector("main");
        if (main) main.innerHTML = RENDER.tourPage(CONTENT, tour, base);
      }
    } else {
      /* ---- homepage: swap each rendered section ---- */
      var sections = {
        "tours": function () { return RENDER.toursGrid(CONTENT, base); },
        "pooja": function () { return RENDER.pooja(CONTENT, base); },
        "why": function () { return RENDER.whyUs(CONTENT); },
        "testimonials": function () { return RENDER.testimonials(CONTENT); },
        "faq": function () { return RENDER.faq(CONTENT); },
        "contact": function () { return RENDER.contact(CONTENT); }
      };
      Object.keys(sections).forEach(function (key) {
        var el = document.querySelector('[data-render="' + key + '"]');
        if (el) el.innerHTML = sections[key]();
      });
    }

    /* ---- simple text bindings (hero, headings, footer…) ---- */
    var binds = document.querySelectorAll("[data-bind]");
    for (var i = 0; i < binds.length; i++) {
      var v = lookup(binds[i].getAttribute("data-bind"));
      if (typeof v === "string") binds[i].textContent = v;
    }
  } catch (e) {
    /* Baked HTML keeps the site readable even if rendering fails. */
  }

  /* ---- keep every WhatsApp / phone / email link true to content.js ---- */
  var links = document.querySelectorAll("a[data-wa], a[data-tel], a[data-mail]");
  for (var j = 0; j < links.length; j++) {
    var a = links[j];
    if (a.hasAttribute("data-wa")) {
      a.href = RENDER.waLink(CONTENT, a.getAttribute("data-wa-msg") || null);
      a.target = "_blank";
      a.rel = "noopener";
    } else if (a.hasAttribute("data-tel")) {
      a.href = "tel:" + CONTENT.phone;
      if (!a.children.length) a.textContent = CONTENT.phone;
    } else if (a.hasAttribute("data-mail")) {
      a.href = "mailto:" + CONTENT.email;
      if (!a.children.length) a.textContent = CONTENT.email;
    }
  }

  /* ---- footer year ---- */
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
