<script lang="ts">
  import type { LayoutData } from "./$types";
  import { fly } from "svelte/transition";

  import { onMount } from "svelte";

  export let data: LayoutData;
</script>

<div class="h-full w-full grid grid-cols-[1fr,448px]">
  <div
    id="form-container"
    class="bg-[#F5F5F5] h-full flex items-center justify-center"
  >
    <img class="h-[45vw] w-[45vw]" src="/images/login.png" alt="" />
  </div>
  <!--  -->
  <slot />
</div>
