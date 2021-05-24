<script>
  export let dist;
</script>

<style>
  .animations-fixed {
    -webkit-transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
  }
</style>

<div
  style="transform: translate({(dist - 0.5) * 100}%) scale({5 / (5 + Math.abs(dist))}); filter: blur({Math.abs(dist) * 6}px)"
  class='absolute inset-0 flex items-center justify-center w-11/12 md:w-1/3 rounded-xl ease-in-out duration-1000 slide left-1/2 {Math.abs(dist) == 2 ? 'invisible' : Math.abs(dist) == 1 ? 'shadow-md backdrop-filter-blur' : 'shadow-lg'} mb-4 animations-fixed'>
  <slot />
</div>
