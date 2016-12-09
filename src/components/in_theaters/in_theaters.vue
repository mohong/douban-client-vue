<template>
    <div class="in_theaters">
        <div class="in_theaters-wrapper" v-el:in_theaters>
            <ul>
                <li @click="showMovie(movie)" v-for="movie in movies"><card :movie="movie"></card></li>
            </ul>
        </div>
        <movie :movie="selectMovie" v-ref:movie></movie>
    </div>
</template>

<script>
    import card from '../card/card.vue';
    import movie from '../movie/movie.vue';
    import BScroll from 'better-scroll';

    export default {
        data() {
          return {
              movies: [],
              selectMovie: {}
          };
        },
        created() {
            this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters').then((response) => {
                this.movies = response.body.subjects;
                this.$nextTick(() => {
                    this._initScroll();
                });
            });
        },
        methods: {
            _initScroll() {
                this.in_theaterScroll = new BScroll(this.$els.in_theaters, {
                    click: true
                });
            },
            showMovie(movie) {
                this.selectMovie = movie;
                this.$refs.movie.show();
            }
        },
        components: {
            card,
            movie
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .in_theaters
        .in_theaters-wrapper
            position: absolute
            display: block
            width: 100%
            top: 40px
            bottom: 10px
            overflow: hidden
</style>