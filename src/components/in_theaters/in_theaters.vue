<template>
    <div class="in_theaters">
        <div class="in_theaters-wrapper" v-el:in_theaters>
            <ul>
                <li v-for="movie in movies"><card :movie="movie"></card></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import card from '../card/card.vue';
    import BScroll from 'better-scroll';

    export default {
        data() {
          return {
              movies: []
          };
        },
        created() {
            this.$http.jsonp('https://api.douban.com//v2/movie/in_theaters').then((response) => {
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
            }
        },
        components: {
            card
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