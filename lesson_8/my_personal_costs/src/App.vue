<template>
  <v-app>
    <v-app-bar app flat fixed>
      <v-btn :ripple="false" plain to="/dashboard">Dashboard</v-btn>
      <v-btn :ripple="false" plain to="/about">About</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
