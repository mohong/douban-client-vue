<template>
    <div class="comingsoon">
        <div class="comingsoon-wrapper" v-el:comingsoon>
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
            this.$http.get('http://192.168.1.111:4000/api/movie/comingsoon').then((response) => {
                this.movies = response.body;
                this.$nextTick(() => {
                    this._initScroll();
                });
            });
        },
        methods: {
            _initScroll() {
                this.comingsooncroll = new BScroll(this.$els.comingsoon, {
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
    .comingsoon
        .comingsoon-wrapper
            position: absolute
            display: block
            width: 100%
            top: 40px
            bottom: 10px
            overflow: hidden
</style>