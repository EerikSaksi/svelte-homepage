<script>
  export let extraClasses = "grid-rows-1 grid-cols-2";
  export let images = [
    {
      src: "media/reactnative.webp",
    },
    {
      src: "media/expo.webp",
    },
  ];
</script>

<div class="grid  {extraClasses} divide-black">
  {#each images as ic}
    <img
      alt="Technology"
      src={ic.src}
      class="p-8 object-fill max-w-full place-self-center {ic.extraClasses ? ic.extraClasses : ''}" />
  {/each}
</div>
