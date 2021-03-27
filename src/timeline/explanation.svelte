<script>
  export let invisible = true;
  export let src;
  export let colors;
  export let explanationOnTop = true;
  export let explanationText
</script>

<style>
  @keyframes slideInFromLeft {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
  .pic {
    animation: slideInFromLeft 2s forwards;
  }
</style>

<div
  class="flex ease-in-out flex-col items-center {invisible ? 'opacity-0' : 'opacity-100'} transition-all pic">
  {#if !explanationOnTop}
    <div
      class="text-3xl {colors[6]} stroke-current c-triangle-left rotate-180 transform" />
  {/if}
  <div class="flex flex-col items-center p-2 rounded-lg ring {colors[5]}">
    <img
      class="h-24 mb-4 object-fit xs:w-full"
      alt="University of Glasgow"
      {src} />
    <p class="text-2xl text-center md:text-4xl">{explanationText}</p>
  </div>
  {#if explanationOnTop}
    <div class="text-3xl {colors[6]} stroke-current c-triangle-left" />
  {/if}
</div>
