<script>
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";
</script>

<section id="home" class="flex h-full w-full">
  <div class="w-16 pt-5 h-full bg-[#605bff] flex flex-col gap-16">
    <div class="h-16 w-full avatar flex items-center justify-center">
      <div class="h-[50px] w-[50px] rounded-full ring ring-white">
        <label for="profile">
          <img
            class="h-full w-full cursor-pointer"
            src="https://avatars.githubusercontent.com/u/76594818?v=4"
            alt="profile"
          />
        </label>
      </div>
    </div>
    <ul
      class="menu text-[#fff] w-16 pt-2 grid grid-rows-3 justify-center items-center gap-y-4"
    >
      <li class:active={$page.url.pathname == "/messages"} class="rounded-xl">
        <a
          href="/messages"
          class="focus:bg-transparent active:bg-transparent hover:bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
        </a>
      </li>
      <!--  -->
      <li class:active={$page.url.pathname == "/contacts"} class="rounded-xl ">
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
          href="/contacts"
          class="focus:bg-transparent active:bg-transparent hover:bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
        </a>
      </li>
      <!--  -->
      <li class:active={$page.url.pathname == "/add"} class="rounded-xl ">
        <a
          href="/add"
          class="focus:bg-transparent active:bg-transparent hover:bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
            />
          </svg>
        </a>
      </li>
    </ul>

    <form
      method="POST"
      action="/signout"
      class="absolute h-16 w-16 bottom-0 text-[#fff] flex items-center justify-center"
    >
      <button type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
      </button>
    </form>
  </div>
  <!--  -->
  <div id="section-content">
    <slot />
  </div>
</section>

<!-- modal profile -->
<input type="checkbox" id="profile" class="modal-toggle" />
<label for="profile" class="modal cursor-pointer">
  <div
    class="modal-box relative h-[540px] grid grid-rows-[40px,1fr,60px] p-4 cursor-default"
  >
    <h3 class="flex items-center font-medium text-xl">Mon profile</h3>
    <form action="" method="post" class="grid grid-rows-[100px,60px,60px,60px]">
      <div class="w-full flex  justify-center items-center">
        <img src="" class="h-[100px] w-[100px] rounded-full" alt="" />
      </div>
    </form>
  </div>
</label>

<style>
  section {
    display: grid;
    grid-template-columns: 64px 1fr;
  }
  .active {
    color: #202020;
    background-color: #fff;
  }
</style>
