<script>
  export let invisible = true;
  export let src;
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
    animation: slideInFromLeft 1s forwards;
  }
</style>

<div
  class="flex ease-in-out flex-col items-center {invisible ? 'opacity-0' : 'opacity-100'} transition-all pic">
  <div class="flex flex-col items-center p-2 rounded-lg ring ring-green-500">
    <img
      class="h-24 mb-4 object-fit xs:w-full"
      alt="University of Glasgow"
      {src} />
    <p class="text-2xl text-center md:text-4xl">MSci in Computing</p>
  </div>
  <div class="text-3xl text-green-500 stroke-current c-triangle-left" />
</div>
