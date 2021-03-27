<script>
  export let isRight = false;
  export let colors;
  export let date;
</script>

<div class="flex flex-row">
  <div class="relative flex flex-row items-center justify-center">
    <div class="absolute flex {isRight ? '-left-4' : '-right-4'}">
      {#if isRight}
        <div
          class="w-6 h-6 rounded-full bg-gradient-to-r {colors[0]} {colors[4]}" />
        <p class="ml-1">{date}</p>
      {:else}
        <p class="mr-1">{date}</p>
        <div
          class="w-6 h-6 rounded-full bg-gradient-to-r {colors[3]} {colors[2]}" />
      {/if}
    </div>
  </div>
</div>
