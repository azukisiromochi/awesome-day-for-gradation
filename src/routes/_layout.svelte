<script>
  import { stores } from '@sapper/app';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  import AppBar from 'smelte/src/components/AppBar';
  import Tabs from 'smelte/src/components/Tabs';
  import Button from 'smelte/src/components/Button';
  import { Spacer } from 'smelte/src/components/Util';
  import ProgressLinear from 'smelte/src/components/ProgressLinear';
  import { writable } from 'svelte/store';

  const right = writable(false);
  const persistent = writable(true);
  const elevation = writable(false);
  const showNav = writable(true);

  const { preloading, page } = stores();

  let selected = '';

  $: path = $page.path;

  const menu = [
    { to: '/about', text: 'About' },
    { to: '/blog', text: 'Blog' },
  ];

  const topMenu = [
    { to: '/about', text: 'About' },
    { to: '/blog', text: 'Blog' },
  ];
</script>

{#each menu as link}
  <a href="{link.to}" class="hidden">{link.text}</a>
{/each}

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
  <Tabs navigation items="{topMenu}" bind:selected="{path}" />
  <div class="md:hidden">
    <Button
      icon="menu"
      small
      flat
      add="text-white"
      remove="p-1 h-4 w-4"
      iconClasses="{(i) => i.replace('p-4', 'p-3').replace('m-4', 'm-3')}"
      text
      on:click="{() => showNav.set(!$showNav)}"
    />
  </div>
</AppBar>

<main class="container relative p-8 mx-auto h-screen" transition:fade="{{ duration: 300 }}">
  <slot />
</main>
