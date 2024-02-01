<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { AlignRight } from "lucide-svelte";
    import { page } from '$app/stores';
  
    let showNav = false;
    let activeNavLink = `${$page.url.pathname}`;
  
    function toggleNav() {
      showNav = !showNav;
    }
  
    onMount(() => {
      // Check if running on the client side before calling goto
      if (import.meta.env.browser) {
        goto(activeNavLink);
      }
    });
  </script>
  
  <div class="flex justify-between px-5 lg:px-[80px] py-4 fixed top-0 right-0 w-full max-w-full z-40 bg-white">
    <img class="h-[33px]" src="/assets/logo.png" alt="havilla logo" />
  
    <ul class={`fixed top-0 left-0 h-full w-[70%] lg:w-min bg-white z-30 lg:relative lg:flex items-center lg:space-x-8 pt-10 lg:pt-0 transition-all ` + `${!showNav && "w-0 overflow-hidden lg:w-full"}`}>
      {#each [
        { href: '/home', text: 'Home' },
        { href: '/about', text: 'About' },
        { href: '/booking', text: 'Booking' }
      ] as { href, text }}
        <a href={href}>
          <button on:click={() => (activeNavLink = href)}><li
            class={`text-lg px-8 lg:px-0 py-2 ${activeNavLink === href && 'font-bold text-brand-light'} border-t lg:border-t-0 lg:py-0`}
            
          >
            <p class="text-lg">{text}</p>
          </li></button>
        </a>
      {/each}
      <div class="w-full flex justify-center lg:hidden">
        <button class="btn-primary mt-8 bg-brand-light">Book a call</button>
      </div>
    </ul>
  
    <button class="btn-primary bg-brand-light hidden lg:flex">Book a call</button>
    <button class="lg:hidden" on:click={toggleNav}>
      <AlignRight class="text-gray-600" />
    </button>
  </div>
  