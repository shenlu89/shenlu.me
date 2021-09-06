---
layout: default
---

<article class="w-full max-w-none py-8">
  <head>
    <h1 class="font-extrabold leading-tight text-2xl text-gray-900 mb-4">
      {{ page.title | escape }}
    </h1>
    <time class="text-gray-500 text-sm">
      Posted on {{page.date | date: '%b %d, %Y'}}
    </time>
  </head>
  <div class="prose mt-4 max-w-none leading-6">
    {% if page.image %}
    <img
      class="object-cover w-full h-80 rounded"
      src="{{site.baseurl}}{{page.image}}"
    />

    {% endif %}
    <div class="mt-4 text-justify">{{ content }}</div>
  </div>
</article>
{% include disqus.md %}
