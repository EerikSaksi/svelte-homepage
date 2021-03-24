<style>
  @keyframes slideInFromLeft {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
  .ball {
    animation: slideInFromLeft 1s forwards;
  }
</style>

<div class="flex flex-row ">
  <div class="relative flex items-center justify-center">
    <div
      class="absolute flex items-center w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-pink-100" />
  </div>
  <div
    class="h-3 rounded ball ease-in-out transition-all bg-gradient-to-r from-pink-100 via-green-500 to-pink-100 animate-pulse" />
  <div class="relative flex items-center justify-center">
    <div
      class="absolute flex items-center w-6 h-6 rounded-full bg-gradient-to-r from-pink-100 to-green-500 " />
  </div>
</div>
