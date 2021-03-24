<script>
  export let extraClasses;
  export let images;
</script>

<div
  class="grid-cols-2 absolute h-40 rounded-lg w-72 transform transition-all skew-x-12 -skew-y-12 {extraClasses}">
  {#each images as ic}<img alt="Card" src={ic.src} class={ic.class} />{/each}
</div>
