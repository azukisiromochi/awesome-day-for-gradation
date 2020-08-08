<script>
  import { stores } from '@sapper/app';
  import { fade } from 'svelte/transition';

  import ProgressLinear from 'smelte/src/components/ProgressLinear';

  import AppHeader from '../components/AppHeader.svelte';
  import AppFooter from '../components/AppFooter.svelte';

  const { preloading } = stores();
</script>

<svelte:head>
  <title>グラデーション日和</title>
</svelte:head>

{#if $preloading}
  <ProgressLinear app />
{/if}

<AppHeader />

<main class="container relative p-8 mx-auto h-screen" transition:fade="{{ duration: 300 }}">
  <slot />
</main>

<AppFooter />
