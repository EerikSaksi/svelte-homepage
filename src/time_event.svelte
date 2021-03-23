<script>
  export let role;
  export let src;
  export let alt;
  export let timeRange;

</script>

<div
  class="max-w-md p-2 mx-auto mb-6 overflow-hidden bg-white shadow-md rounded-xl md:max-w-3xl">
  <p class="text-2xl text-center sm:text-3xl">{timeRange}</p>
  <div class="items-center justify-center md:flex">
    <div class="justify-center md:flex-shrink-0">
      <img class="object-cover w-2/3 md:w-48" {src} {alt} />
    </div>
    <div class="items-center justify-center p-8">
      <p class="text-3xl text-center xs:text-sm">{role}</p>
    </div>
  </div>
</div>
