<script>
  import { stores } from '@sapper/app';
  import { urlStore } from '../store/stores.js';

  const { page } = stores();
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
    image: '/ogp.png',
  };
</script>

<svelte:head>
  <title>グラデーション日和</title>
  <meta name="description" content="{ogp.description}" />
  <meta property="og:url" content="{ogp.url}" />
  <meta property="og:type" content="{ogp.type}" />
  <meta property="og:title" content="{ogp.title}" />
  <meta property="og:description" content="{ogp.description}" />
  <meta property="og:site_name" content="{ogp.site_name}" />
  <meta property="og:image" content="{ogp.image}" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>
