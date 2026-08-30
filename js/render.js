/* =========================================================================
   RENDER — turns the words in content.js into page markup.
   You should never need to edit this file to change what the site says:
   edit js/content.js instead.
   ========================================================================= */

var RENDER = (function () {

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* Keeps any X placeholders so an unconfigured number would produce an
     obviously broken link rather than a plausible-looking one. */
  function digits(phone) { return String(phone).replace(/[^0-9X]/gi, ""); }

  function waLink(content, message) {
    return "https://wa.me/" + digits(content.phone) +
      "?text=" + encodeURIComponent(message || content.whatsappGreeting);
  }

  function tourMessage(content, tour) {
    return "Hi Pooja! I'd like to ask about the " + tour.name + ".";
  }

  function picture(base, image, alt, cls, eager) {
    var p = base + "img/" + image;
    return '<picture class="' + cls + '">' +
      '<source type="image/webp" srcset="' + p + '-sm.webp 640w, ' + p + '.webp 1200w" ' +
        'sizes="(max-width: 700px) 94vw, 50vw">' +
      '<img src="' + p + '.jpg" alt="' + esc(alt) + '"' +
        (eager ? ' fetchpriority="high"' : ' loading="lazy"') + ' decoding="async">' +
      '</picture>';
  }

  function list(items) {
    return "<ul>" + items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
  }

  /* ---- homepage: one tour card ---- */
  function tourCard(content, tour, base) {
    var href = base + "tours/" + tour.slug + ".html";
    return '<article class="tour-card">' +
      '<a class="tour-card-media" href="' + href + '" aria-hidden="true" tabindex="-1">' +
        picture(base, tour.image, tour.imageAlt, "") + "</a>" +
      '<div class="tour-card-body">' +
        '<h3><a href="' + href + '">' + esc(tour.name) + "</a></h3>" +
        '<p class="tour-meta"><span>' + esc(tour.duration) + "</span>" +
          '<span class="tour-price">From <strong>' + esc(tour.priceFrom) + "</strong><!-- CONFIRM PRICE --></span></p>" +
        '<p class="tour-summary">' + esc(tour.card) + "</p>" +
        '<p class="tour-card-actions">' +
          '<a class="btn btn-small" data-wa data-wa-msg="' + esc(tourMessage(content, tour)) + '" href="' +
            waLink(content, tourMessage(content, tour)) + '">Enquire</a>' +
          '<a class="text-link" href="' + href + '">Full details</a>' +
        "</p>" +
      "</div></article>";
  }

  function toursGrid(content, base) {
    return content.tours.map(function (t) { return tourCard(content, t, base); }).join("\n");
  }

  /* ---- homepage: extras strip under the tours grid ---- */
  function extras(content) {
    var x = content.extras;
    if (!x) return "";
    return "<h3>" + esc(x.heading) + "</h3>" +
      '<p class="extras-sub">' + esc(x.sub) + "</p>" +
      '<div class="extras-grid">' +
      x.items.map(function (it) {
        var msg = "Hi Pooja! I'd like to ask about " + it.title + ".";
        return '<div class="extras-item"><h4>' + esc(it.title) + "</h4><p>" + esc(it.text) + "</p>" +
          '<a class="text-link" data-wa data-wa-msg="' + esc(msg) + '" href="' + waLink(content, msg) + '">Ask on WhatsApp</a></div>';
      }).join("") +
      "</div>";
  }

  /* ---- homepage: meet Pooja ---- */
  function pooja(content, base) {
    var p = content.pooja;
    return '<div class="pooja-photo" role="img" aria-label="' + esc(p.photoNote) + '">' +
        '<svg viewBox="0 0 96 96" aria-hidden="true" focusable="false">' +
          '<path d="M21 86 L21 47 C21 33.5 30 26.5 48 23 C66 26.5 75 33.5 75 47 L75 86" fill="none" stroke="currentColor" stroke-width="6.5"/>' +
          '<path d="M12 86 L84 86" fill="none" stroke="currentColor" stroke-width="6.5" stroke-linecap="round"/>' +
        "</svg>" +
        "<span>" + esc(p.photoNote) + "</span></div>" +
      '<div class="pooja-text">' +
        '<p class="kicker">' + esc(p.kicker) + "</p>" +
        "<h2>" + esc(p.heading) + "</h2>" +
        p.paragraphs.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") +
        '<dl class="pooja-facts">' +
          p.facts.map(function (f) {
            return "<div><dt>" + esc(f.label) + "</dt><dd>" + esc(f.value) + "</dd></div>";
          }).join("") +
        "</dl></div>";
  }

  /* ---- homepage: why us ---- */
  function whyUs(content) {
    return content.whyUs.points.map(function (pt, i) {
      return '<div class="why-item"><span class="why-num" aria-hidden="true">' +
        String(i + 1).padStart(2, "0") + "</span><h3>" + esc(pt.title) + "</h3><p>" +
        esc(pt.text) + "</p></div>";
    }).join("");
  }

  /* ---- homepage: testimonials ---- */
  function testimonials(content) {
    return content.testimonials.items.map(function (t) {
      return '<figure class="quote-card">' +
        (t.sample ? '<span class="sample-chip">Sample — real review coming</span>' : "") +
        "<!-- REPLACE with a real guest review -->" +
        "<blockquote>" + esc(t.quote) + "</blockquote>" +
        "<figcaption>" + esc(t.name) + " · " + esc(t.origin) + "</figcaption></figure>";
    }).join("\n");
  }

  /* ---- homepage: FAQ ---- */
  function faq(content) {
    return content.faq.items.map(function (f) {
      return "<details><summary>" + esc(f.q) + '<span class="faq-mark" aria-hidden="true"></span></summary><p>' +
        esc(f.a) + "</p></details>";
    }).join("\n");
  }

  /* ---- homepage: contact ---- */
  function contact(content) {
    var c = content.contact;
    return '<p class="kicker kicker-invert">' + esc(c.kicker) + "</p>" +
      "<h2>" + esc(c.heading) + "</h2>" +
      "<p>" + esc(c.text) + "</p>" +
      '<p class="contact-actions">' +
        '<a class="btn btn-big" data-wa href="' + waLink(content) + '">' + esc(c.whatsappLabel) + "</a></p>" +
      '<p class="contact-lines">' +
        esc(c.phoneLabel) + ' <a data-tel href="tel:' + esc(content.phone) + '">' + esc(content.phone) + "</a>" +
        " &nbsp;·&nbsp; " + esc(c.emailLabel) +
        ' <a data-mail href="mailto:' + esc(content.email) + '">' + esc(content.email) + "</a></p>" +
      '<p class="contact-note">' + esc(c.responseNote) + "</p>";
  }

  /* ---- tour detail page: everything inside <main> ---- */
  function tourPage(content, tour, base) {
    var wa = waLink(content, tourMessage(content, tour));
    var waBtn = '<a class="btn" data-wa data-wa-msg="' + esc(tourMessage(content, tour)) + '" href="' + wa + '">Enquire on WhatsApp</a>';

    var html = '<div class="wrap">' +
      '<nav class="crumbs" aria-label="Breadcrumb"><a href="' + base + 'index.html">Home</a> / ' +
        '<a href="' + base + 'index.html#tours">Tours</a> / <span aria-current="page">' + esc(tour.name) + "</span></nav>" +
      '<header class="tour-head">' +
        "<h1>" + esc(tour.name) + "</h1>" +
        '<p class="tour-tagline">' + esc(tour.tagline) + "</p>" +
        '<p class="tour-meta tour-meta-page"><span>' + esc(tour.duration) + "</span>" +
          '<span class="tour-price">From <strong>' + esc(tour.priceFrom) + "</strong><!-- CONFIRM PRICE --></span></p>" +
      "</header></div>" +
      '<div class="wrap">' + picture(base, tour.image, tour.imageAlt, "tour-hero-img", true) + "</div>" +
      '<div class="wrap tour-columns">' +
        '<div class="tour-body">' +
          tour.paragraphs.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") +
          "<h2>The day, stop by stop</h2>" +
          '<ol class="itinerary">' +
            tour.itinerary.map(function (s) {
              return "<li><strong>" + esc(s.title) + "</strong><span>" + esc(s.detail) + "</span></li>";
            }).join("") +
          "</ol>" +
          (tour.specialBox
            ? '<aside class="special-box"><h2>' + esc(tour.specialBox.title) + "</h2>" + list(tour.specialBox.items) + "</aside>"
            : "") +
          (tour.communityNote === null && tour.slug === "city-dharavi-tour"
            ? "<!-- CONFIRM WITH POOJA: if a share of the tour fee goes back into community projects, state exactly what here. Do not publish a vague claim. -->"
            : "") +
          '<div class="inc-exc">' +
            "<div><h2>Included</h2>" + list(tour.included) + "</div>" +
            "<div><h2>Not included</h2>" + list(tour.excluded) + "</div>" +
          "</div>" +
          "<h2>What to bring</h2>" + list(tour.bring) +
          "<h2>Good to know</h2>" + list(tour.goodToKnow) +
        "</div>" +
        '<aside class="tour-aside">' +
          '<div class="aside-card">' +
            '<p class="aside-price">From <strong>' + esc(tour.priceFrom) + "</strong><!-- CONFIRM PRICE --></p>" +
            '<p class="aside-duration">' + esc(tour.duration) + "</p>" +
            waBtn +
            '<p class="aside-note">Private by default — you book by chatting, not by paying online.</p>' +
          "</div>" +
        "</aside>" +
      "</div>" +
      '<div class="wrap tour-cta-strip"><div class="cta-panel">' +
        "<h2>Fancy this one?</h2>" +
        "<p>Message Pooja with your dates — she'll answer questions before you commit to anything.</p>" +
        waBtn +
      "</div></div>";

    if (tour.needsConfirmation && tour.needsConfirmation.length) {
      html += "\n<!-- CONFIRM WITH POOJA before promoting this page:\n" +
        tour.needsConfirmation.map(function (i) { return "  - " + i.replace(/--/g, "—"); }).join("\n") +
        "\n-->";
    }
    return html;
  }

  return {
    esc: esc, waLink: waLink, tourMessage: tourMessage, picture: picture,
    tourCard: tourCard, toursGrid: toursGrid, extras: extras, pooja: pooja, whyUs: whyUs,
    testimonials: testimonials, faq: faq, contact: contact, tourPage: tourPage
  };
})();

if (typeof module !== "undefined" && module.exports) { module.exports = RENDER; }
