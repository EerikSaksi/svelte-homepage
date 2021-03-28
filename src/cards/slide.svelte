<script>
  export let extraClasses;
</script>

<div
  class="rounded-xl absolute inset-0 flex items-center justify-center w-96 h-64 text-5xl text-white transition-all ease-in-out duration-1000 transform  slide {extraClasses}">
  <slot></slot>
</div>
