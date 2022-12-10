<div id="wp-container" class="h-hull bg-[#fff] flex flex-col justify-center">
  <h3 class="text-2xl font-bold py-4 pl-5">Créer un compte</h3>
  <form action="" class="w-full p-5 pt-0 flex flex-col items-center gap-1">
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text font-medium text-base">Nom Complet</span>
      </label>
      <input
        type="text"
        placeholder="Jean Djossou"
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
        type="text"
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
  </form>
</div>

<style>
  .label-text-alt {
    display: none;
  }
</style>
