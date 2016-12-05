<template>
    <div class="in_theaters">
        <ul class="movielist">
            <li @click="showDetail(movie,$event)" class="movie-item" v-for="movie in movies"><movie :movie="movie"></movie></li>
            <div class="clearfix"></div>
        </ul>
    </div>
    <div class="detail-wrapper">
        <movie-detail :movie="selectMovie" v-ref:detail></movie-detail>
    </div>
</template>

<script>
    import movie from '../movie/movie.vue';
    import movieDetail from '../movie_detail/movie_detail.vue';

    export default {
        data() {
          return {
              movies: [],
              selectMovie: {}
          };
        },
        created() {
            this.$http.jsonp('https://api.douban.com//v2/movie/in_theaters').then((response) => {
                this.movies = response.body.subjects;
            });
        },
        methods: {
            showDetail(movie, event) {
                this.selectMovie = movie;
                this.$refs.detail.show();
            }
        },
        components: {
            movie,
            movieDetail
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .in_theaters
        position: absolute
        left: 0
        top: 240px
        bottom: 0
        overflow: hidden
        .movielist
            width: 350px
            height: 100%
            margin: 0 auto
            .movie-item
                float: left
                margin: 2px
            .clearfix
                clear: both
                width: 100%
                height: 20px
        movie-detail
            color: red
    .fade-transition
        opacity: 1

</style>