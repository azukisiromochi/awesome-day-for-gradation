<script>
  import { stores } from '@sapper/app';
  import { fade } from 'svelte/transition';

  import ProgressLinear from 'smelte/src/components/ProgressLinear';

  import AppHeader from '../components/AppHeader.svelte';
  import AppFooter from '../components/AppFooter.svelte';
  import { urlStore } from '../store/stores.js';

  const { preloading, page } = stores();
  const host = $page.host;

  let url = 'http://localhost:3000/';
  if (!host.startsWith('localhost')) {
    url = 'https://' + host;
  }

  urlStore.set(url);

  const ogp = {
    url,
    type: 'website',
    title: '今日の気分は何色？',
    description: 'CSS のグラデーションをクリックだけでかんたんに生成する Web サービスです。',
    site_name: 'グラデーション日和',
    image: 'logo.png',
  };
</script>

<svelte:head>
  <title>グラデーション日和</title>
  <meta property="og:url" content="{ogp.url}" />
  <meta property="og:type" content="{ogp.type}" />
  <meta property="og:title" content="{ogp.title}" />
  <meta property="og:description" content="{ogp.description}" />
  <meta property="og:site_name" content="{ogp.site_name}" />
  <meta property="og:image" content="{ogp.image}" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

{#if $preloading}
  <ProgressLinear app />
{/if}

<AppHeader />

<main class="container relative p-8 pt-16 pb-12 mx-auto h-screen" transition:fade="{{ duration: 300 }}">
  <slot />
</main>

<AppFooter />
