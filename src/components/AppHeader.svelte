<script>
  import AppBar from 'smelte/src/components/AppBar';
  import Button from 'smelte/src/components/Button';
  import Snackbar from 'smelte/src/components/Snackbar';
  import { Spacer } from 'smelte/src/components/Util';
  import { gradation } from '../store/stores.js';

  let showSnackbar = false;
  let _gradation;
  gradation.subscribe((value) => {
    _gradation = value;
  });

  function copyColor() {
    if (_gradation && navigator.clipboard) {
      navigator.clipboard.writeText(_gradation);
      showSnackbar = true;
    }
  }
</script>

<AppBar class="{(i) => i.replace('primary-300', 'dark-transDark')}">
  <a href="." class="px-2 md:px-8 flex items-center">
    <img src="/logo-192.png" alt="Smelte logo" width="44" />
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
    on:click="{copyColor}" />
</AppBar>

<Snackbar top bind:value="{showSnackbar}">
  <div>Copied the gradation 🎉</div>
  <div slot="action">
    <Button text on:click="{() => (showSnackbar = false)}">dummy</Button>
  </div>
</Snackbar>
