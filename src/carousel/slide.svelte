<script>
  export let dist;
</script>

<div
  style="transform: translate({dist}00%) scale({3 / (Math.abs(dist) + 3)});"
  class="absolute inset-0 flex items-center justify-center h-64 text-5xl text-white border rounded-xl w-96 transition-all ease-in-out duration-1000 transform slide ">
  <slot />
</div>
