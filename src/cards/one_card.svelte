<script>
  export let extraClasses;
  export let images;
  export let showImgs;
</script>

<div
  class="grid absolute h-40 rounded-lg w-72 transform transition-all skew-x-12 -skew-y-12 -translate-x-1/2 {extraClasses}">
  {#if showImgs}
    {#each images as ic}
      <img
        alt="Card"
        src={ic.src}
        class="object-contain h-full place-self-center {ic.extraClasses ? ic.extraClasses : ''}" />
    {/each}
  {/if}
</div>
