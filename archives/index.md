---
title: ARCHIVES
layout: page
permalink: /archives
---

<ul class="listing">
{% for post in site.posts %}
  {% capture y %}{{post.date | date:"%Y"}}{% endcapture %}
  {% if year != y %}
    {% assign year = y %}
    <li class="listing-seperator">{{ y }}</li>
  {% endif %}
  <li class="listing-item">
    <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
    <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>

<!-- <div id="post-pagination" class="paginator">

  {% if paginator.previous_page %}
    {% if paginator.previous_page == 1 %}
    <a href="/"><</a>
    {% else %}
    <a href="/page{{paginator.previous_page}}"><前页</a>
    {% endif %}
  {% else %}
    <span class="previous disabled"><前页</span>
  {% endif %}

      {% if paginator.page == 1 %}
      <span class="current-page">1</span>
      {% else %}
      <a href="/">1</a>
      {% endif %}

    {% for count in (2..paginator.total_pages) %}
      {% if count == paginator.page %}
      <span class="current-page">{{count}}</span>
      {% else %}
      <a href="/page{{count}}">{{count}}</a>
      {% endif %}
    {% endfor %}

  {% if paginator.next_page %}
    <a class="next" href="/page{{paginator.next_page}}">Prev></a>
  {% else %}
    <span class="next disabled" >Next></span>
  {% endif %}
  ({{ paginator.total_posts }} Total)
</div> -->