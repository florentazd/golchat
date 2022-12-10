<script>
  let viewIsSet = true;
</script>

<svelte:head>
  <title>Mes Messages</title>
</svelte:head>

<div
  id="messages-container"
  class="w-full max-h-screen grid grid-cols-[320px,1fr]"
>
  <div id="chat-container" class="h-screen bg-[#FAFAFA] ">
    <!--  -->
    <div class="chats-search-container p-4 bg-[#FAFAFA] shadow-sm">
      <input
        type="text"
        placeholder="Rechercher un discussion..."
        class="input input-bordered input-info w-full max-w-xs rounded-2xl"
      />
    </div>
    <div
      class="chats-list-container max-h-full overflow-y-auto overflow-x-hidden"
    >
      <!-- Le conteneur de la liste de chat disponible  -->
      {#each Array(21) as _}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          on:click={() => (viewIsSet = !viewIsSet)}
          class="grid grid-cols-[80px,1fr] h-[86px] cursor-pointer hover:bg-slate-100 border-b-[1px] border-slate-100"
        >
          <div
            id="profile-photo-container"
            class="flex items-center justify-center"
          >
            <div
              class="h-[56px] w-[56px] rounded-full flex items-center justify-center"
            >
              <img
                src="https://avatars.githubusercontent.com/u/76594818?v=4"
                alt=""
                class="rounded-full object-cover"
              />
            </div>
          </div>
          <div
            id="chat-details-container"
            class="grid grid-rows-[1fr,1fr] pr-[10px]"
          >
            <div class="flex items-end justify-between">
              <span class="font-semibold text-base">Paul arthur</span>
              <span class="text-xs bottom-1 relative text-[#A4A4A4]"
                >12/12/12 à 12:30</span
              >
            </div>
            <div class="flex items-start">
              <span class="text-sm text-[#7A858C]"
                >Je suis en bas de chez toi actu...</span
              >
            </div>
          </div>
        </div>
      {/each}
      <!-- Un chat de l'app -->
      <!-- <i class="text-sm text-center w-full block pt-5 text-[#A4A4A4]"
        >Aucune disucssion pour le moment</i
      > -->
    </div>
  </div>
  <!--  -->

  {#if viewIsSet}
    <div
      id="view-container"
      class="grid grid-rows-[80px,1fr,80px] w-full bg-[#fff]"
    >
      <div class="h-20 p-4 bg-[#fff] shadow-sm flex justify-between px-8">
        <div class="name-status-container grid grid-rows-[3fr,1fr]">
          <span class="font-semibold text-base">George Washington</span>
          <span class="text-sm text-[#A4A4A4]">En ligne</span>
        </div>
        <div class="actions-container h-full flex items-center gap-8">
          <div>
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </div>
          <div>
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
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
        </div>
      </div>
      <!--  -->
      <div
        id="view"
        class="bg-slate-100 p-4 max-h-full overflow-y-scroll h-[calc(100vh-160px)]"
      >
        <!-- Chat content -->
        {#each Array(20) as _}
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div class="chat-header">
              Obi-Wan Kenobi
              <time class="text-xs opacity-50">12:45</time>
            </div>
            <div class="chat-bubble">You were the Chosen One!</div>
            <div class="chat-footer opacity-50">Delivered</div>
          </div>
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div class="chat-header">
              Anakin
              <time class="text-xs opacity-50">12:46</time>
            </div>
            <div class="chat-bubble">I hate you!</div>
            <div class="chat-footer opacity-50">Seen at 12:46</div>
          </div>
        {/each}
      </div>
      <!--  -->
      <div
        class="form-container h-20 items-center px-8 grid grid-cols-[40px,1fr]"
      >
        <div id="emoji-container" class="cursor-pointer">
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
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
        </div>
        <form action="" class="items-center grid grid-cols-[1fr,40px,60px]">
          <textarea
            class="h-full w-full px-2 text-lg outline-none resize-none placeholder:relative placeholder:top-3 focus:placeholder:top-0 transition-all duration-1000"
            placeholder="Entrer votre message..."
            name=""
            id=""
          />
          <!--  -->
          <div id="file-picket-container">
            <label for="picker">
              <input class="absolute hidden" type="file" id="picker" />
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
                  d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                />
              </svg>
            </label>
          </div>
          <!--  -->

          <div
            class="rounded-full flex justify-center  items-center h-12 cursor-pointer bg-[#ea4b4b] text-[#fff]"
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
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </div>
        </form>
      </div>
    </div>
  {:else}
    <div
      class="h-full w-full flex justify-center items-center flex-col bg-[#F5F5F5] text-[#A4A4A4]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-20 h-20"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
      <p>Veuillez cliquer sur une discussion pour voir les messages</p>
    </div>
  {/if}
</div>
