<script>
  import { spring } from "svelte/motion";

  let width = spring(0, {
    stiffness: 0.1,
    damping: 0.25,
  });

</script>

<div class="flex flex-row items-center">
  <div class="relative flex items-center justify-center animate-pulse">
    <div
      class="absolute flex items-center w-4 h-4 rounded-full bg-gradient-to-r from -green-500 to-pink-100" />
  </div>
  <div
    style="width: {width}%"
    class="h-2 rounded transition bg-gradient-to-r from-pink-100 via-green-500 to-pink-100" />
  <div class="relative flex items-center justify-center">
    <div
      class="flex items-center w-4 h-4 rounded-full bg-gradient-to-r from-pink-100 to-green-500 animate-pulse" />
  </div>
</div>
