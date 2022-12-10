<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div id="wp-container" class="h-hull bg-[#fff] flex flex-col justify-center">
  <h3 class="text-2xl font-bold py-4 pl-5">Connexion au compte</h3>
  <form action="" class="w-full p-5 pt-0 flex flex-col items-center gap-1">
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
        placeholder="jean.djossou@chat.com"
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
        placeholder="********"
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
