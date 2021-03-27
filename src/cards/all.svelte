<script>
  import OneCard from "./one_card.svelte";

  let index = 4;
  let cardData = [
    {
      extraClasses: "bg-indigo-400 grid-rows-1 grid-cols-2",
      images: [
        {
          src:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--5N472VlU--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://repository-images.githubusercontent.com/65750241/79017180-d4ce-11e9-9955-3f0a7be00c7a",
        },
        {
          src:
            "https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png",
        },
      ],
    },
    {
      extraClasses: "bg-yellow-400 -top-4 md:-left-4 grid-cols-2 grid-rows-2",
      images: [
        {
          src:
            "http://innerlife.io/wp-content/uploads/2019/04/postgresql-logo.png",
        },
        {
          src: "https://img.stackshare.io/service/7419/20165699.png",
        },
        {
          src:
            "https://cdn.iconscout.com/icon/free/png-256/sequelize-3-1175091.png",
        },
        {
          src:
            "https://www.vitoshacademy.com/wp-content/uploads/2015/05/sqlalchemy-logo1.png",
        },
      ],
    },
    {
      extraClasses: "bg-red-400 -top-8 md:-left-8 grid-rows-2 grid-cols-2",
      images: [
        {
          src:
            "https://montykamath.files.wordpress.com/2018/02/graphql.png?w=210&h=210",
        },

        {
          src:
            "https://user-images.githubusercontent.com/841294/53402609-b97a2180-39ba-11e9-8100-812bab86357c.png",
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
