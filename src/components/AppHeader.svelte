<script>
  import AppBar from 'smelte/src/components/AppBar';
  import Button from 'smelte/src/components/Button';
  import Snackbar from 'smelte/src/components/Snackbar';
  import { Spacer } from 'smelte/src/components/Util';
  import breakpoints from 'smelte/src/breakpoints';
  import TwitterShare from './TwitterShare.svelte';
  import Fa from 'svelte-fa';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { urlStore, hueStore, gradationStore } from '../store/stores.js';
  import Utils from '../plugins/utils.js';

  const bp = breakpoints((width) => {
    if (width > 1279) {
      return 'xl';
    }
    if (width > 1023) {
      return 'lg';
    }
    if (width > 767) {
      return 'md';
    }
    if (width > 350) {
      return 'sm';
    }
    return 'xs';
  });
  $: mobile = $bp === 'xs';

  let showSnackbar = false;
  let url;
  let hue;
  let gradation;

  urlStore.subscribe((value) => {
    url = value;
  });
  hueStore.subscribe((value) => {
    hue = value;
  });
  gradationStore.subscribe((value) => {
    gradation = value;
  });

  function copyColor() {
    if (gradation && navigator.clipboard) {
      navigator.clipboard.writeText(gradation);
      showSnackbar = true;
    }
  }
</script>

<AppBar class="{(i) => i.replace('primary-300', 'dark-transDark')}">
  <a href="." class="px-2 md:px-8 flex items-center">
    {#if !mobile}
      <img src="/logo.png" alt="Smelte logo" width="44" class="mr-4" />
      <img src="/title.png" alt="Smelte logo" width="200" />
    {/if}
    {#if mobile}
      <img src="/title.png" alt="Smelte logo" width="150" />
    {/if}
  </a>
  <Spacer />
  <Button
    color="white"
    remove="hover:bg-white"
    add="hover:bg-white-trans"
    icon="content_copy"
    text
    flat
    on:click="{copyColor}"
  />
  <TwitterShare text="わたしのお気に入りのグラデーションは……" url="{Utils.makeShareUrl(url, hue, gradation)}" />
  <Button
    color="white"
    remove="hover:bg-white rounded py-2 px-4"
    add="hover:bg-white-trans rounded-full py-4 px-4"
    href="https://github.com/azukisiromochi/awesome-day-for-gradation"
    text
    flat
  >
    <Fa icon="{faGithub}" style="height: 24px;" flip="vertical" />
  </Button>
</AppBar>

<Snackbar top bind:value="{showSnackbar}">
  <div>Copied the gradation 🎉</div>
  <div slot="action">
    <Button text on:click="{() => (showSnackbar = false)}">dummy</Button>
  </div>
</Snackbar>
