(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var browser = document.querySelector('[data-project-browser]');
    if (!browser) return;

    var toggle = browser.querySelector('[data-county-toggle]');
    var panel = browser.querySelector('[data-county-panel]');
    var county = browser.querySelector('[data-county-select]');
    var search = browser.querySelector('[data-project-search]');
    var reset = browser.querySelector('[data-filter-reset]');
    var status = browser.querySelector('[data-filter-status]');
    var empty = browser.querySelector('[data-filter-empty]');
    var state = browser.querySelector('[data-filter-state]');
    var groups = Array.from(document.querySelectorAll('[data-county-group]'));
    var projects = Array.from(document.querySelectorAll('[data-county-project]'));
    if (!toggle || !panel || !county || !search || !reset || !status || !empty || !state || !projects.length) return;

    var counties = {};
    projects.forEach(function (project) {
      var name = project.dataset.county;
      if (name) counties[name] = (counties[name] || 0) + 1;
    });
    county.options[0].textContent = 'All counties (' + projects.length + ')';
    Object.keys(counties).sort(function (a, b) { return a.localeCompare(b, 'en-IE'); }).forEach(function (name) {
      var option = document.createElement('option');
      option.value = name;
      option.textContent = name + ' (' + counties[name] + ')';
      county.appendChild(option);
    });

    function applyFilters() {
      var enabled = toggle.checked;
      var selected = enabled ? county.value : '';
      var query = enabled ? search.value.trim().toLocaleLowerCase('en-IE') : '';
      var matches = 0;

      projects.forEach(function (project) {
        var title = project.querySelector('h3').textContent.toLocaleLowerCase('en-IE');
        var show = (!selected || project.dataset.county === selected) && (!query || title.includes(query));
        project.hidden = !show;
        if (show) matches += 1;
      });
      groups.forEach(function (group) {
        group.hidden = !Array.from(group.querySelectorAll('[data-county-project]')).some(function (project) { return !project.hidden; });
      });

      panel.hidden = !enabled;
      empty.hidden = !enabled || matches !== 0;
      state.textContent = enabled ? 'On' : 'Off';
      reset.disabled = !county.value && !search.value;
      status.textContent = 'Showing ' + matches + ' of ' + projects.length + ' active sites' + (selected ? ' in ' + selected : ' across Ireland') + '.';
    }

    toggle.addEventListener('change', function () {
      if (!toggle.checked) {
        county.value = '';
        search.value = '';
      }
      applyFilters();
    });
    county.addEventListener('change', applyFilters);
    search.addEventListener('input', applyFilters);
    reset.addEventListener('click', function () {
      county.value = '';
      search.value = '';
      applyFilters();
      county.focus();
    });

    // Every visit starts with all projects visible and filtering switched off.
    toggle.checked = false;
    county.value = '';
    search.value = '';
    applyFilters();
    browser.querySelector('[data-county-toggle-wrap]').hidden = false;
  });
})();
