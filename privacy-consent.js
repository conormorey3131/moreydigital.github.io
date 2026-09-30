/* Morey Digital: optional measurement loads only after an explicit choice. */
(function () {
  'use strict';

  var STORAGE_KEY = 'morey-digital-cookie-choice-v1';
  var MAX_AGE = 180 * 24 * 60 * 60 * 1000;
  var GA_ID = 'G-36R7DYFRZD';
  var ADS_ID = 'AW-18064156365';
  var tagsLoaded = false;
  var returnFocus = null;

  function readChoice() {
    try {
      var value = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (value && value.version === 1 &&
          typeof value.analytics === 'boolean' && typeof value.advertising === 'boolean' &&
          typeof value.savedAt === 'number' && value.savedAt <= Date.now() &&
          Date.now() - value.savedAt < MAX_AGE) return value;
    } catch (error) { /* A blocked or malformed store must never enable tags. */ }
    try { localStorage.removeItem(STORAGE_KEY); } catch (error) { /* Optional storage may be unavailable. */ }
    return null;
  }

  var choice = readChoice();
  window['ga-disable-' + GA_ID] = !choice || !choice.analytics;

  function clearMeasurementCookies(preferences) {
    if (!preferences.advertising) {
      // Google's conversion linker can also retain ad-click data in local storage.
      try { localStorage.removeItem('_gcl_ls'); } catch (error) { /* Storage may be unavailable. */ }
    }
    var names = document.cookie ? document.cookie.split(';').map(function (cookie) {
      return cookie.split('=')[0].trim();
    }) : [];
    var domains = [''];
    var parts = window.location.hostname.split('.');
    for (var i = 0; i < parts.length - 1; i++) {
      var domain = parts.slice(i).join('.');
      domains.push(domain, '.' + domain);
    }
    names.forEach(function (name) {
      var analytics = /^(?:_ga(?:_|$)|_gid$|_gat(?:_|$))/.test(name);
      var advertising = /^(?:_gcl_|_gac_|__gads$|__gpi$|__eoi$)/.test(name);
      if ((!preferences.analytics && analytics) || (!preferences.advertising && advertising)) {
        domains.forEach(function (domain) {
          document.cookie = name + '=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' +
            (domain ? '; domain=' + domain : '') + '; SameSite=Lax';
        });
      }
    });
  }

  function loadAllowedTags(preferences) {
    if (tagsLoaded || (!preferences.analytics && !preferences.advertising)) return;
    tagsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    // Queue consent before any library, config or measurement request exists.
    window.gtag('consent', 'default', {
      analytics_storage: 'denied', ad_storage: 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied'
    });
    window.gtag('consent', 'update', {
      analytics_storage: preferences.analytics ? 'granted' : 'denied',
      ad_storage: preferences.advertising ? 'granted' : 'denied',
      ad_user_data: preferences.advertising ? 'granted' : 'denied',
      ad_personalization: preferences.advertising ? 'granted' : 'denied'
    });
    window.gtag('set', 'ads_data_redaction', !preferences.advertising);
    window.gtag('set', 'url_passthrough', false);
    window.gtag('js', new Date());
    if (preferences.analytics) {
      window['ga-disable-' + GA_ID] = false;
      window.gtag('config', GA_ID, {
        allow_google_signals: preferences.advertising,
        allow_ad_personalization_signals: preferences.advertising
      });
    }
    if (preferences.advertising) window.gtag('config', ADS_ID);
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' +
      encodeURIComponent(preferences.analytics ? GA_ID : ADS_ID);
    document.head.appendChild(script);
  }

  var panel = document.createElement('section');
  panel.className = 'md-consent';
  panel.setAttribute('aria-labelledby', 'md-consent-title');
  panel.hidden = true;
  panel.innerHTML =
    '<div class="md-consent-inner">' +
      '<div class="md-consent-heading"><h2 id="md-consent-title" tabindex="-1">Your cookie choices</h2>' +
      '<button type="button" class="md-consent-close" aria-label="Close cookie preferences" hidden>Close</button></div>' +
      '<p>We use essential storage to remember your choices for 180 days. With your permission, we also use Google tools for the purposes below. You can use the website and contact us without accepting optional cookies.</p>' +
      '<div class="md-consent-options">' +
        '<label><input type="checkbox" id="md-consent-analytics"><span><strong>Analytics</strong>Help us understand visits and improve the website using Google Analytics.</span></label>' +
        '<label><input type="checkbox" id="md-consent-advertising"><span><strong>Advertising</strong>Measure our Google ads and support personalised advertising using Google Ads.</span></label>' +
      '</div>' +
      '<div class="md-consent-actions">' +
        '<button type="button" data-consent-action="reject">Reject optional</button>' +
        '<button type="button" data-consent-action="accept">Accept all</button>' +
        '<button type="button" data-consent-action="save">Save my choices</button>' +
        '<a href="privacy-policy.html">Read our privacy policy</a>' +
      '</div>' +
      '<p class="md-consent-note">Change or withdraw your permission at any time using Cookie preferences in the footer. Changing a saved choice may refresh this page.</p>' +
    '</div>';
  document.body.appendChild(panel);
  var analyticsInput = panel.querySelector('#md-consent-analytics');
  var advertisingInput = panel.querySelector('#md-consent-advertising');
  var closeButton = panel.querySelector('.md-consent-close');

  function openPreferences(event) {
    returnFocus = event && event.currentTarget ? event.currentTarget : document.activeElement;
    analyticsInput.checked = !!(choice && choice.analytics);
    advertisingInput.checked = !!(choice && choice.advertising);
    closeButton.hidden = !choice;
    panel.hidden = false;
    panel.querySelector('#md-consent-title').focus();
  }

  function hidePreferences() {
    panel.hidden = true;
    if (returnFocus && typeof returnFocus.focus === 'function') returnFocus.focus();
  }

  function saveChoice(analytics, advertising) {
    var changed = !choice || choice.analytics !== analytics || choice.advertising !== advertising;
    choice = { version: 1, analytics: analytics, advertising: advertising, savedAt: Date.now() };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(choice)); } catch (error) { /* Apply for this page when storage is unavailable. */ }
    window['ga-disable-' + GA_ID] = !analytics;
    clearMeasurementCookies(choice);
    hidePreferences();
    if (tagsLoaded && changed) {
      // Remove the already-running library by refreshing. The next page loads only
      // the allowed products, or no tag at all. Do not send cookieless denial pings.
      window.location.reload();
      return;
    }
    loadAllowedTags(choice);
  }

  panel.querySelector('[data-consent-action="reject"]').addEventListener('click', function () { saveChoice(false, false); });
  panel.querySelector('[data-consent-action="accept"]').addEventListener('click', function () { saveChoice(true, true); });
  panel.querySelector('[data-consent-action="save"]').addEventListener('click', function () { saveChoice(analyticsInput.checked, advertisingInput.checked); });
  closeButton.addEventListener('click', hidePreferences);
  panel.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && choice) { event.preventDefault(); hidePreferences(); }
  });
  document.querySelectorAll('[data-cookie-preferences]').forEach(function (button) {
    button.addEventListener('click', openPreferences);
  });
  // Apply choices changed in another tab to this tab as well.
  window.addEventListener('storage', function (event) {
    if (event.key !== STORAGE_KEY && event.key !== null) return;
    var updated = readChoice();
    if (tagsLoaded && (!updated || !choice || updated.analytics !== choice.analytics || updated.advertising !== choice.advertising)) {
      window['ga-disable-' + GA_ID] = true;
      clearMeasurementCookies(updated || { analytics: false, advertising: false });
      window.location.reload();
      return;
    }
    choice = updated;
    clearMeasurementCookies(choice || { analytics: false, advertising: false });
    if (choice) { panel.hidden = true; loadAllowedTags(choice); }
    else { analyticsInput.checked = false; advertisingInput.checked = false; closeButton.hidden = true; panel.hidden = false; }
  });

  clearMeasurementCookies(choice || { analytics: false, advertising: false });
  if (choice) loadAllowedTags(choice);
  else panel.hidden = false;
})();
