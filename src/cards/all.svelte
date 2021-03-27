<script>
  import OneCard from "./one_card.svelte";

  let index = 4;
  let cardData = [
    {
      extraClasses: "bg-indigo-400 grid-rows-1 grid-cols-2",
      images: [
        {
          src:
            "res.cloudinary.com.webp",
        },
        {
          src:
            "pagepro.co",
        },
      ],
    },
    {
      extraClasses: "bg-yellow-400 -top-4 md:-left-4 grid-cols-2 grid-rows-2",
      images: [
        {
          src:
            "innerlife.io.webp",
        },
        {
          src: "img.stackshare.io.webp",
        },
        {
          src:
            "cdn.iconscout.com.webp",
        },
        {
          src:
            "www.vitoshacademy.com.webp",
        },
      ],
    },
    {
      extraClasses: "bg-red-400 -top-8 md:-left-8 grid-rows-2 grid-cols-2",
      images: [
        {
          src:
            "montykamath.files.wordpress.com.webp",
        },

        {
          src:
            "user-images.githubusercontent.com.webp",
        },

        {
          src: "media/postgraphile.webp",
          extraClasses: "col-span-full",
        },
      ],
    },
    {
      extraClasses: "bg-black -top-12 md:-left-12 grid-cols-2 grid-rows-2",
      images: [
        { src: "media/materialui.webp" },
        {
          src: "media/bootstrap.webp",
        },
        {
          src: "media/tailwind.webp",
          extraClasses: "col-span-full",
        },
      ],
    },

    {
      extraClasses: "bg-purple-400 -top-16 md:-left-16 grid-cols-2 grid-rows-2",
      images: [
        {
          src: "media/react.webp",
        },
        {
          src: "media/svelte.webp",
        },
        {
          src: "media/django.webp",
        },
        {
          src: "media/jquery.webp",
        },
      ],
    },
  ];

  let clear;
  const nextCard = () => {
    console.log("ran");
    cardData[index].extraClasses += " opacity-0";
    index--;
    if (index === -1) {
      clearInterval(clear);
    }
  };

  $: {
    clear = setInterval(nextCard, 3000);
  }
</script>

<div class="flex items-center justify-center h-48 fade-in ease-in-out">
  <div class="relative flex">
    {#each cardData as cd, i}
      <OneCard
        extraClasses={cd.extraClasses}
        images={cd.images}
        showImgs={index - 1 <= i} />
    {/each}
  </div>
</div>
