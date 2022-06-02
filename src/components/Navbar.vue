<template>
  <nav class="nav">
    <div class="container flex items-center justify-between h-16 md:h-20">
      <h1 class="relative z-30 font-semibold text-2xl">
        <a href="#home">Dylan Corroyer</a>
      </h1>
      <div class="flex items-center flex-flow-reverse md:flex-row gap-3 md:gap-12">

        <!-- Menu list -->
        <ul id="menu" class="nav-menus translate-y-[-200%] md:translate-y-0">
          <a class="nav-link" href="#home">Home</a>
          <a class="nav-link" href="#about">About</a>
          <a class="nav-link" href="#portfolio">Portfolio</a>
          <a class="nav-link" href="#contact">Contact</a>
        </ul>

        <!-- Toggle theme -->
        <button id="toggle-theme" class="relative z-30 dark:invert">
          <img
            class="md:opacity-70 w-7 md:-mt-1"
            src="../assets/images/icon-dark.svg" 
            alt="theme"
          />
        </button>

        <!-- Mobile menu button -->
        <button id="toggle-menu" class="relative z-30 p-2 md:hidden dark:invert">
          <img
            src="../assets/images/icon-menu.svg"
            alt="menu"
          />
        </button>

      </div>
    </div>
  </nav>
</template>
