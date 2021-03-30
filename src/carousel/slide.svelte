<script>
  export let dist;
</script>

<div
  style="transform: translate({dist}00%)"
  class="absolute inset-0 flex items-center justify-center text-5xl text-white border w-96 h-128 rounded-xl transition-all ease-in-out duration-1000 transform slide">
  <slot />
</div>
