<script>
  export let dist;
</script>

<div
  style="transform: translate({(dist - 0.5) * 100}%) scale({3 / (3 + Math.abs(dist))})"
  class="absolute inset-0 flex items-center justify-center text-5xl text-white w-full md:w-1/2 h-128 rounded-xl transition-all ease-in-out duration-1000 transform slide left-1/2 {Math.abs(dist) == 2 ? 'invisible': Math.abs(dist) == 1 ? 'shadow-md' : 'shadow-lg'} ease-in-out bg-blue-500">
  <slot />
</div>
