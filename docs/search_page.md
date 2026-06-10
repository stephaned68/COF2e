---
layout: default
title: Search
permalink: /search/
---

<div id="search" data-baseurl="{{ site.baseurl }}">
  <input type="text" id="search-input" placeholder="Rechercher...">
</div>

<ul>
{% for page in site.pages %}
<li>{{ page.name }}</li>
{%- endfor %}
</ul>


<script src="{{ site.baseurl }}/assets/js/search.js"></script>
