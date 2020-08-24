<script>
  import { stores } from '@sapper/app';
  import { fade } from 'svelte/transition';

  import ProgressLinear from 'smelte/src/components/ProgressLinear';

  import AppHeader from '../components/AppHeader.svelte';
  import AppFooter from '../components/AppFooter.svelte';
  import { urlStore } from '../store/stores.js';

  const { preloading, page } = stores();

  const host = $page.host;

  if (!host.startsWith('localhost')) {
    urlStore.set('https://' + host);
  }
</script>

<svelte:head>
  <title>グラデーション日和</title>
</svelte:head>

{#if $preloading}
  <ProgressLinear app />
{/if}

<AppHeader />

<main class="container relative p-8 pt-16 pb-12 mx-auto h-screen" transition:fade="{{ duration: 300 }}">
  <slot />
</main>

<AppFooter />
