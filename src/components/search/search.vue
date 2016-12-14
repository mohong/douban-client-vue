<template>
    <div class="search">
        <input type="text" placeholder="输入电影名称" onfocus="false" v-model="movieTitle">
        <ul v-show="searchResult==''?false:true">
            <li @click="selectMovie(movie)" v-for="movie in searchResult">{{movie.title}}</li>
        </ul>
    </div>
    <movie v-if="selectedMovie !== ''" :movie="selectedMovie" v-ref:movie></movie>
</template>

<script>
    import movie from '../movie/movie.vue';

    export default {
        data() {
            return {
                movieTitle: '',
                searchResult: '',
                selectedMovie: ''
            };
        },
        watch: {
            'movieTitle'(val, oldVal) {
                val === '' ? this.searchResult = '' : this.searchMovie(val);
            }
        },
        methods: {
            searchMovie(title) {
                if (title !== '') {
                    this.$http.get('http://192.168.1.111:4000/api/movie/search/' + title).then((response) => {
                        if (response.body === '无相关资源') {
                            this.searchResult = '';
                        } else {
                            this.searchResult = response.body;
                        }
                    });
                }
            },
            selectMovie(movie) {
                this.selectedMovie = movie;
                this.$refs.movie.show();
            }
        },
        components: {
            movie
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .search
        text-align: center
        input
            margin: 10px
            width: 94%
            height: 50px
            border-radius: 20px
            outline: none
            &::-webkit-input-placeholder
                text-align: center
        ul
            width: 86%
            height: 100%
            margin: 0 auto
            padding: 10px
            border-bottom: 1px solid rgba(7, 17, 27, 0.1)
            border-radius: 20px
            background-color: #fff
            transition: all 1s
        li
            text-align: left
            padding: 6px
</style>