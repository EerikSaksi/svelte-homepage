<script>
  import Ball from "./ball.svelte";
  import Explanation from "./explanation.svelte";
  export let colors = [
    "from-green-200",
    "via-green-500",
    "to-green-200",
    "from-green-500",
    "to-green-500",
    "ring-green-500",
    "text-green-500",
  ];
  export let src;
  export let explanationOnTop = true;
  export let explanationText = "MSci in Computing";
  export let widths = "w-2/3 md:w-full";
  export let dates = ["2018", "2022"];
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

<div class="flex flex-col items-center justify-center flex-1 m-4">
  {#if explanationOnTop}
    <Explanation {src} {colors} {explanationText} />
  {/if}
  <div class="flex flex-row {widths}">
    <Ball {colors} date={dates[0]} />
    <div
      class="h-3  rounded bar ease-in-out transition-all bg-gradient-to-r {colors[0]} {colors[1]} {colors[2]}" />
    <Ball isRight={true} {colors} date={dates[1]} />
  </div>
  {#if !explanationOnTop}
    <Explanation {src} {colors} explanationOnTop={false} {explanationText} />
  {/if}
</div>
