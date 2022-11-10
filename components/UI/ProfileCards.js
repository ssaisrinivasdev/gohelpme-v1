import React from 'react'

function ProfileCards(props) {
  return (
    <div>
      {/* <!--
  This component uses @tailwindcss/line-clamp

  yarn add @tailwindcss/line-clamp
  npm install @tailwindcss/line-clamp

  plugins: [require('@tailwindcss/line-clamp')]
--> */}

<article class="overflow-hidden rounded-lg border border-gray-100 shadow-sm mx-5 my-5">

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900">
        {props.title}
      </h3>
    </a>

    <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
      dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
      sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
      voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
      Molestias explicabo corporis voluptatem?
    </p>

    <a
      href="#"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Find out more

      <span
        aria-hidden="true"
        class="block transition group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </a>
  </div>
</article>

    </div>
  )
}

export default ProfileCards