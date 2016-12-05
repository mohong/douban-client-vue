<template>
    <div>
        <v-header></v-header>
        <div class="tab">
            <div class="tab-item">
                <a v-link="{path: '/in_theaters'}">热播</a>
            </div>
            <div class="tab-item">
                <a v-link="{path: '/coming_soon'}">期待</a>
            </div>
            <div class="tab-item">
                <a v-link="{path: '/top250'}">TOP250</a>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import header from './components/header/header';
    import movie from './components/movie/movie';

    export default {
        data() {
            return {
                movies: []
            };
        },
        created() {
            this.$http.get('http://127.0.0.1:4000/').then((response) => {
                this.movies = response.body;
                // console.log(this.movies);
            });
        },
        components: {
            movie,
            'v-header': header
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .tab
        display: flex
        width: 100%
        height: 40px
        line-height: 40px
        background: #fff
        .tab-item
            flex: 1
            text-align: center
            & > a
                display: block
                font-size: 14px
                color: rgb(77, 85, 93)
                &.active
                    color: rgb(240,20,20)
</style>