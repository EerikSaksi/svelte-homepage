<script>
  export let isRight = false;
</script>

<div class="flex flex-row">
  <div class="relative flex flex-row items-center justify-center">
    <div class="absolute flex {isRight ?  '-left-4' : '-right-4'}">
      {#if isRight}
        <div
          class="w-6 h-6 rounded-full bg-gradient-to-r from-green-200 to-green-500" />
        <p class="ml-1">2018</p>
      {:else}
        <p class="mr-1">2018</p>
        <div
          class="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-green-200" />
      {/if}
    </div>
  </div>
</div>
