<script>
  import Ball from "./ball.svelte";
  let a = Array(10);
</script>

<style>
  @keyframes slideInFromLeft {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
  .bar {
    animation: slideInFromLeft 1s forwards;
  }
</style>

<div class="flex flex-row w-2/3 md:w-full ">
  <Ball />
  <div
    class="h-3 rounded bar ease-in-out transition-all bg-gradient-to-r from-green-200 via-green-500 to-green-200" />
  <Ball isRight={true} />
</div>

