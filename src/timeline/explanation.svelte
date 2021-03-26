<script>
  import Bar from "./bar.svelte";
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

<div class="flex flex-col items-center">
  <div class="flex flex-col w-1/4 m-4 pic transition-all place-content-center">
    <img class="xs:w-full" alt="University of Glasgow" src="media/uni.webp" />
    <p class="h-16 text-4xl text-center">MSci in Computing</p>
  </div>
  <Bar />
</div>
