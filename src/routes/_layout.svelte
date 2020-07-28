<script>
  import { stores } from '@sapper/app';
  import { fade } from 'svelte/transition';

  import AppBar from 'smelte/src/components/AppBar';
  import { Spacer } from 'smelte/src/components/Util';
  import ProgressLinear from 'smelte/src/components/ProgressLinear';

  import AppFooter from '../components/AppFooter.svelte';

  const { preloading, page } = stores();

  $: path = $page.path;
</script>

<svelte:head>
  <title>Smelte: Material design using Tailwind CSS for Svelte</title>
</svelte:head>

{#if $preloading}
  <ProgressLinear app />
{/if}

<AppBar class="{(i) => i.replace('primary-300', 'dark-600')}">
  <a href="." class="px-2 md:px-8 flex items-center">
    <img src="/logo-192.png" alt="Smelte logo" width="44" />
    <h6 class="pl-3 text-white tracking-widest font-thin text-lg">グラデーション日和</h6>
  </a>
  <Spacer />
</AppBar>

<main class="container relative p-8 mx-auto h-screen" transition:fade="{{ duration: 300 }}">
  <slot />
</main>

<AppFooter />
