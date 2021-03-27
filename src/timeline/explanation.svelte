<script>
  export let invisible = true;
  export let src = "media/uni.webp";
  export let colors;
  export let explanationOnTop = true;
  export let explanationText;
  export let leftShift;
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
  class="w-96 {invisible ? 'opacity-0' : 'opacity-100'} transition-all pic relative  {leftShift ? leftShift : 'left-1/2'} transform -translate-x-1/2">
  {#if !explanationOnTop}
    <div class="flex flex-col items-center ">
      <div
        class="text-3xl {colors[6]} stroke-current c-triangle-left rotate-180 transform" />
    </div>
  {/if}
  <div class="flex flex-col items-center p-2 rounded-lg ring {colors[5]}">
    <img
      class="h-24 mb-2 object-fit xs:w-full"
      alt="University of Glasgow"
      {src} />
    <p class="text-xl text-center md:text-2xl">{explanationText}</p>
  </div>
  {#if explanationOnTop}
    <div class="flex flex-col items-center ">
      <div class="text-3xl  {colors[6]} stroke-current c-triangle-left" />
    </div>
  {/if}
</div>
