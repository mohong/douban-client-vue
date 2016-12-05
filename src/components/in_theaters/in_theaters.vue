<template>
    <div class="in_theaters">
        <ul class="movielist">
            <li class="movie-item" v-for="movie in movies"><movie :movie="movie"></movie></li>
            <div class="clearfix"></div>
        </ul>
    </div>
</template>

<script>
    import movie from '../movie/movie.vue';

    export default {
        data() {
          return {
              movies: []
          };
        },
        created() {
            this.$http.jsonp('https://api.douban.com//v2/movie/in_theaters').then((response) => {
                this.movies = response.body.subjects;
                console.log(this.movies);
            });
        },
        components: {
            movie
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .in_theaters
        .movielist
            width: 350px
            margin: 0 auto
            .movie-item
                float: left
                margin: 2px
            .clearfix
                clear: both
                width: 100%
                height: 20px
</style>