<header>
  <nav
    class="flex flex-col sm:flex-row justify-between sm:pb-8 pt-8 sm:pt-8"
    role="navigation"
  >
    <a
      href="{{ site.github.url }}/"
      title="{{site.description}}"
      class="flex mt-2 sm:mt-0 space-x-2 items-center self-center no-underline hover:no-underline"
    >
      <img src="{{ site.github.url }}/assets/icon/logo.svg" class="w-9, h-9">
      <h1 class="link-pill text-gray-900 text-2xl font-extrabold">{{site.title}}</h1>
    </a>
    <ul class="flex mt-8 sm:mt-0 space-x-4 items-center self-center">
      {% for item in site.data.navigation %}
      <li>
        <a
          href="{{ site.github.url }}{{item.url}}"
          title="{{item.title}}"
          class="capitalize py-1 text-blue-500 hover:text-blue-700 no-underline hover:underline"
          >{{item.name}}</a
        >
      </li>
      {% endfor %}
    </ul>
  </nav>
</header>
