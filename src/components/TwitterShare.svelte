<script>
  import Button from 'smelte/src/components/Button';
  import Fa from 'svelte-fa';
  import { faTwitter } from '@fortawesome/free-brands-svg-icons';

  export let text;
  export let url;
  export let hashtags;
  export let via;
  export let related;

  $: query = [
    text && `text=${encodeURIComponent(text)}`,
    url && `url=${encodeURIComponent(url)}`,
    hashtags && `hashtags=${hashtags}`,
    via && `via=${encodeURIComponent(via)}`,
    related && `related=${encodeURIComponent(related)}`,
  ]
    .filter(Boolean)
    .join('&');

  $: href = `https://twitter.com/intent/tweet?${query}`;

  function open(e) {
    e.preventDefault();
    window.open(href, '_blank');
  }
</script>

<Button
  color="white"
  remove="hover:bg-white rounded py-2 px-4"
  add="hover:bg-white-trans rounded-full py-4 px-4"
  text
  flat
  on:click="{open}"
>
  <Fa icon="{faTwitter}" style="height: 24px;" />
</Button>
