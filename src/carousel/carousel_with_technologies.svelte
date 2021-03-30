<script>
  import Carousel from './carousel.svelte'
  let technologies = [
    {
      extraClasses: "grid-rows-1 grid-cols-2",
      images: [
        {
          src: "media/reactnative.webp",
        },
        {
          src: "media/expo.webp",
        },
      ],
    },
    {
      extraClasses: "grid-cols-2 grid-rows-2",
      images: [
        {
          src: "media/postgres.webp",
        },
        {
          src: "media/sequelize.webp",
        },
        {
          src: "media/typeorm.webp",
        },
        {
          src: "media/sqlalchemy.webp",
        },
      ],
    },
    {
      extraClasses: "grid-rows-2 grid-cols-2",
      images: [
        {
          src: "media/apollo.webp",
        },

        {
          src: "media/postgraphile.webp",
          extraClasses: "col-span-full",
        },
      ],
    },
    {
      extraClasses: "grid-cols-2 grid-rows-2",
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
      extraClasses: "grid-cols-2 grid-rows-2",
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

</script>
<Carousel {technologies}/>
