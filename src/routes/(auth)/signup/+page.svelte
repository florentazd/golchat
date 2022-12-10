<script lang="ts">
  import { fly } from "svelte/transition";
  import { enhance } from "$app/forms";
  export let form;
  let attr: string | null;
  let newUser = {
    name: null,
    email: null,
    username: null,
    password: null,
  };

  let errorNotif: boolean = false,
    successNotif = false;
  let progress: HTMLElement;
</script>

<div id="wp-container" class="h-hull bg-[#fff] flex flex-col justify-center">
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
  <h3 class="text-2xl font-bold py-4 pl-5">Créer un compte</h3>
  <form
    method="POST"
    class="w-full p-5 pt-0 flex flex-col items-center gap-1"
    use:enhance={({ form }) => {
      progress.style.visibility = "visible";
      return async ({ result, update }) => {
        progress.style.visibility = "hidden";
        if (result.type == "invalid") {
          successNotif = false;
          errorNotif = true;
          setTimeout(() => {
            errorNotif = false;
          }, 5000);
        } else {
          if (result.type == "success") {
            successNotif = true;
            errorNotif = false;
            setTimeout(() => {
              successNotif = false;
            }, 5000);
          }
        }
        newUser.name = null;
        newUser.email = null;
        newUser.username = null;
        newUser.password = null;
      };
    }}
  >
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text font-medium text-base">Nom Complet</span>
      </label>
      <input
        type="text"
        placeholder="Jean Djossou"
        name="name"
        bind:value={newUser.name}
        class="input input-bordered w-full bg-[#F7F7F8]"
      />
      <label class="label">
        <span class="label-text-alt">Le nom est invalide</span>
      </label>
    </div>
    <!-- Email -->
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text font-medium text-base">Adresse Email</span>
      </label>
      <input
        type="email"
        name="email"
        bind:value={newUser.email}
        placeholder="jean.djossou@chat.com"
        class="input input-bordered w-full bg-[#F7F7F8]"
      />
      <label class="label">
        <span class="label-text-alt">Adresse email invalide</span>
      </label>
    </div>
    <!-- Username -->
    <div class="form-control w-full">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="label">
        <span class="label-text font-medium text-base">Nom d'utilisateur</span>
      </label>
      <input
        autocomplete="username"
        type="text"
        name="username"
        bind:value={newUser.username}
        placeholder="jean_djossou"
        class="input input-bordered w-full bg-[#F7F7F8]"
      />
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="label">
        <span class="label-text-alt "
          >Nom d'utilisateur invalide ou indisponible</span
        >
      </label>
    </div>
    <!-- Mot de passe -->
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text font-medium text-base">Mot de passe</span>
      </label>
      <input
        autocomplete="current-password"
        type="password"
        placeholder="********"
        bind:value={newUser.password}
        name="password"
        class="input input-bordered w-full bg-[#F7F7F8]"
      />
      <label class="label">
        <span class="label-text-alt"
          >Le mot de passe doit contenir au moins 8 caractères</span
        >
      </label>
    </div>
    <div
      class="checkbox-container items-center grid grid-cols-[20px,1fr] justify-center gap-x-2"
    >
      <input type="checkbox" />
      <p class="text-sm">
        By creating an account you agree to the terms of use and our privacy
        policy.
      </p>
    </div>
    <div class="w-full mt-8 mb-3">
      <button
        class="btn hover:bg-[#605BFF] hover:border-[#605BFF] w-full bg-[#605BFF] border-[#605BFF]"
        >Ouvrir mon compte</button
      >
    </div>
    <div>
      <p class="text-sm">
        Vous avez déjà un compte ? <a
          href="/signin"
          class="btn-link cursor-pointer">Vous connecter</a
        >
      </p>
    </div>
    <progress
      bind:this={progress}
      class="progress progress-info w-56 invisible"
    />
  </form>
</div>

<style>
  .label-text-alt {
    display: none;
  }
</style>
