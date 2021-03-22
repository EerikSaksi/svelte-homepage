<script>
  export let role;
  export let src;
  export let alt;
  export let timeRange;
</script>

<div
  class="max-w-md mx-auto mt-4 overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
  <p class="text-3xl text-center">{timeRange}</p>
  <div class="md:flex">
    <div class="md:flex-shrink-0 ">
      <img class="object-cover w-1/2 w-full md:w-48 m:4" {src} {alt} />
    </div>
    <div class="items-center justify-center p-8">
      <p class="text-3xl text-center">{role}</p>
    </div>
  </div>
</div>
