<script lang="ts">
  import type { LayoutData } from "./$types";
  import { fly } from "svelte/transition";

  import { onMount } from "svelte";

  let errorNotif: boolean = false,
    successNotif = false;

  export let data: LayoutData;
</script>

<!-- <Toaster /> -->
<div class="h-full w-full grid grid-cols-[1fr,448px]">
  <div
    id="form-container"
    class="bg-[#F5F5F5] h-full flex items-center justify-center"
  >
    <img class="h-[45vw] w-[45vw]" src="/images/login.png" alt="" />
  </div>
  <!--  -->
  <slot />

  <!-- Signup succes message -->
  {#if successNotif}
    <div
      transition:fly={{ x: -200, duration: 1000 }}
      class="toast toast-top toast-start"
    >
      <div class="alert alert-success">
        <div>
          <span class="text-[#fff]"
            >Votre Inscription a été éffectuée avec succès.<br />Veuillez vous
            <a
              href="/signin"
              class="underline"
              on:click={() => (successNotif = false)}>connecter</a
            ></span
          >
        </div>
      </div>
    </div>
  {/if}
  <!--  -->
  <!-- Signup error message -->
  {#if errorNotif}
    <div
      transition:fly={{ x: -200, duration: 1000 }}
      class="toast toast-top toast-start"
    >
      <div class="alert alert-error">
        <div>
          <span class="text-[#fff]"
            >Inscription échouée, <br />veuillez rentrer des informations
            valides.</span
          >
        </div>
      </div>
    </div>
  {/if}
  <!--  -->
</div>
