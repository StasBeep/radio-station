<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about" id="about">About</router-link> |
      <router-link to="/semantica">Semantica</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
