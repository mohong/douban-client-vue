<template>
    <div class="nowplaying">
        <div class="nowplaying-wrapper" v-el:nowplaying>
            <ul>
                <li @click="showMovie(movie)" v-for="movie in movies">
                    <card :movie="movie"></card>
                </li>
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
            this.$http.get('http://192.168.1.111:4000/api/movie/nowplaying').then((response) => {
                this.movies = response.body;
                this.$nextTick(() => {
                    this._initScroll();
                });
            });
        },
        methods: {
            _initScroll() {
                this.nowplayingcroll = new BScroll(this.$els.nowplaying, {
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
    .nowplaying
        .nowplaying-wrapper
            position: absolute
            display: block
            width: 100%
            top: 40px
            bottom: 10px
            overflow: hidden
</style>