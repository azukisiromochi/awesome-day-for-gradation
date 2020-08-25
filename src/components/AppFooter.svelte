<footer class="pa-2 bg-dark-transDark">
  <span>
    Designed & Developed By
    <a target="_blank" rel="noopener" href="https://twitter.com/azukisiromochi">@azukisiromochi</a>
  </span>
  <span>©azukisiromochi</span>
</footer>

<style lang="scss">
  @import 'static/style/mixin.scss';

  footer {
    z-index: 30;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    width: 100vw;
    padding: 0.5em;
    padding-top: 1em;
    color: white;
    font-family: 'Pompiere', 'Roboto', sans-serif;
  }

  @include mq(xsmall) {
    footer {
      font-size: small;
    }
  }

  @include mq(small) {
    footer {
      font-size: medium;
    }
  }
</style>
