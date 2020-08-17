<script>
  import AppBar from 'smelte/src/components/AppBar';
  import Button from 'smelte/src/components/Button';
  import Snackbar from 'smelte/src/components/Snackbar';
  import { Spacer } from 'smelte/src/components/Util';
  import TwitterShare from './TwitterShare.svelte';
  import Fa from 'svelte-fa';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { hueStore, gradationStore } from '../store/stores.js';
  import Utils from '../plugins/utils.js';

  let showSnackbar = false;
  let hue;
  let gradation;

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
    <img src="/logo.png" alt="Smelte logo" width="44" />
    <h6 class="pl-3 text-white tracking-widest font-thin text-lg">グラデーション日和</h6>
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
  <TwitterShare text="わたしのお気に入りのグラデーションは……" url="{Utils.makeShareUrl(hue, gradation)}" />
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
