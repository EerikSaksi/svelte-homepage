<script>
  import Ball from "./ball.svelte";
  let a = Array(10);
  export let colors = [
    "from-green-200",
    "via-green-500",
    "to-green-200",
    "from-green-500",
    "to-green-500",
  ];
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
  <Ball {colors}/>
  <div
    class="h-3 rounded bar ease-in-out transition-all bg-gradient-to-r {colors[0] + ' ' + colors[1] + ' ' + colors[2]}" />
  <Ball isRight={true} {colors} />
</div>
