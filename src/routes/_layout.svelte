<script>
  import GoogleAnalytics from "sapper-google-analytics/GoogleAnalytics.svelte";
  import { stores } from "@sapper/app";
  import AppMeta from '../components/AppMeta.svelte';
  import AppHeader from '../components/AppHeader.svelte';
  import AppFooter from '../components/AppFooter.svelte';

  const ga_measurment_id = "UA-132964682-4";
</script>

<AppMeta />
<AppHeader />

<main class="container relative p-8 pt-16 pb-12 mx-auto h-screen">
  <slot />
</main>

<AppFooter />

<GoogleAnalytics {stores} id={ga_measurment_id}/>
