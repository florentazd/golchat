<svelte:head>
  <title>Mes Contacts</title>
</svelte:head>
<div
  class="h-screen max-h-screen w-full bg-[#FAFAFB] grid grid-rows-[60px,1fr] px-10 py-5 gap-y-3"
>
  <div class="contacts-list-header w-full flex justify-between items-center">
    <h3 class="text text-lg font-semibold">Mes Contacts</h3>
    <div id="search-container" class="flex gap-x-6">
      <input
        class="input input-bordered"
        placeholder="Chercher un contact..."
        type="search"
        name=""
        id=""
      />
      <button
        class="btn bg-[#605bff] border-[#605bff] hover:bg-[#605bff] hover:border-[#605bff] flex gap-x-1"
        ><svg
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
            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
          />
        </svg>
        <span class="normal-case">Nouveau contact</span></button
      >
    </div>
  </div>

  <div class="h-full contacts-list grid grid-rows-[40px,1fr] overflow-auto">
    <div class="contact-list-title w-full px-2">
      <ul
        class="h-full w-full grid grid-cols-[80px,1fr,1fr,1fr] text-[#A4A4A4] text-sm"
      >
        <li>N°</li>
        <li>Nom Complet</li>
        <li>Email</li>
        <li>Que faire ?</li>
      </ul>
    </div>
    <div
      class="contacts-list-body w-full h-full max-h-full flex flex-col gap-y-4 "
    >
      {#each Array(33) as _, id}
        <div
          class="contact-row w-full h-[70px] bg-white rounded-xl shadow-sm hover:shadow-xl cursor-pointer"
        >
          <ul
            class="h-full w-full grid grid-cols-[80px,1fr,1fr,1fr] text-md items-center"
          >
            <li class="px-4">{id + 1}</li>
            <li class="flex gap-4 items-center">
              <div class="avatar online">
                <div class="w-12 rounded-full">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <span>Paul Arthur</span>
            </li>
            <li class="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span>paularthur@gmail.com</span>
            </li>
            <li class="flex gap-2 items-center ">
              <button class="btn btn-warning btn-outline "
                >Bloquer le compte</button
              >
              <button class="btn btn-error text-white">Supprimer</button>
            </li>
          </ul>
        </div>
      {/each}
    </div>
  </div>
</div>
