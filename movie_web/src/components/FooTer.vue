<template>
   <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="purple white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
	  <v-card-text class="black--text pt-0">
	  About Us
	  </v-card-text>
      <v-card-text class="white--text pt-0">
		The Movie Database (TMDB) is a popular,user editable database for movies and TV shows.TMDB's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Sylvi Zistiani</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    data: () =>({
        icons:[
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram'
        ]
    })
}
</script>
