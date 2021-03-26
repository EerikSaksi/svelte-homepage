<script>
  export let hidden = true;
</script>

<style>
  @keyframes slideInFromLeft {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
  .pic {
    animation: slideInFromLeft 2s forwards;
  }
</style>

<div class="flex flex-col items-center {hidden ? 'hidden' : ''}">
  <div class="flex flex-col items-center m-4 pic transition-all">
    <img
      class="mb-4 xs:w-full"
      alt="University of Glasgow"
      src="media/uni.webp" />
    <p class="text-2xl text-center md:text-4xl">MSci in Computing</p>
  </div>
</div>
