<template>
   <div>
	 <NowPlaying />
     <PopularMovies />
	 <TopRated />
     <UpcomingMovies />
   </div>
</template>

<script>

import NowPlaying from '../components/NowPlaying.vue' 
import PopularMovies from '../components/PopularMovies.vue'
import TopRated from '../components/TopRated.vue'
import UpcomingMovies from '../components/UpcomingMovies.vue'

  export default {
    name: 'HomeView',
    components: {
	NowPlaying,
    PopularMovies,
	TopRated,
	UpcomingMovies,
    }
  }
</script>
