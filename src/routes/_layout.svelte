<script>
  import AppMeta from '../components/AppMeta.svelte';
  import AppHeader from '../components/AppHeader.svelte';
  import AppFooter from '../components/AppFooter.svelte';
</script>

<AppMeta />
<AppHeader />

<main class="container relative p-8 pt-16 pb-12 mx-auto h-screen">
  <slot />
</main>

<AppFooter />
