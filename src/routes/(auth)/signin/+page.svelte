<script lang="ts">
  import { enhance } from "$app/forms";
  import type { PageData } from "./$types";
  import { fly } from "svelte/transition";
  import { redirect } from "@sveltejs/kit";
  import { goto } from "$app/navigation";
  let errorNotif: boolean = false;
  let guest = {
    email: null,
    password: null,
  };
</script>

{#if errorNotif}
  <div
    transition:fly={{ x: -200, duration: 1000 }}
    class="toast toast-top toast-start"
  >
    <div class="alert alert-error">
      <div>
        <span class="text-[#fff]">Adresse email ou mot de passe incorrect.</span
        >
      </div>
    </div>
  </div>
{/if}

<div id="wp-container" class="h-hull bg-[#fff] flex flex-col justify-center">
  <h3 class="text-2xl font-bold py-4 pl-5">Connexion au compte</h3>
  <form
    method="POST"
    action="?/signin"
    class="w-full p-5 pt-0 flex flex-col items-center gap-1"
    use:enhance={() => {
      return async ({ result }) => {
        if (result.type == "invalid") {
          errorNotif = true;
          setTimeout(() => (errorNotif = false), 5000);
        }
        if (result.type == "success") {
          goto("/messages");
        }
      };
    }}
  >
    <!-- Email -->
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text font-medium text-base"
          >Votre adresse email:</span
        >
      </label>
      <input
        autocomplete="username"
        type="text"
        name="email"
        placeholder="jean.djossou@chat.com"
        bind:value={guest.email}
        class="input input-bordered w-full  bg-[#F7F7F8]"
      />
      <label class="label">
        <span class="label-text-alt">Adresse email invalide</span>
      </label>
    </div>
    <!-- Mot de passe -->
    <div class="form-control w-full ">
      <label class="label">
        <span class="label-text font-medium text-base">Votre mot de passe:</span
        >
      </label>
      <input
        autocomplete="current-password"
        type="password"
        name="password"
        placeholder="********"
        bind:value={guest.password}
        class="input input-bordered w-full  bg-[#F7F7F8]"
      />
      <label class="label">
        <span class="label-text-alt"
          >Le mot de passe doit contenir au moins 8 caractères</span
        >
      </label>
    </div>
    <div class="w-full mt-3 mb-3">
      <button
        class="btn hover:bg-[#605BFF] hover:border-[#605BFF] w-full bg-[#605BFF] border-[#605BFF]"
        >Connexion</button
      >
    </div>
    <div>
      <p class="text-sm">
        Vous avez déjà un compte ? <a
          href="/signup"
          class="btn-link cursor-pointer">Vous connecter</a
        >
      </p>
    </div>
  </form>
</div>

<style>
  .label-text-alt {
    display: none;
  }
</style>
