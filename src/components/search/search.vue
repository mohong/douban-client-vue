<template>
    <div class="search">
        <input type="text" placeholder="输入电影名称" onfocus="false" v-model="movieTitle">
        <div class="result">
            <ul>
                <li v-for="movie in searchResult">{{movie.title}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                movieTitle: '',
                searchResult: ''
            };
        },
        watch: {
            'movieTitle'(val, oldVal) {
                this.searchResult = '';
                this.searchMovie(val);
            }
        },
        methods: {
            searchMovie(title) {
                if (title !== '') {
                    this.$http.get('http://192.168.1.111:4000/api/movie/search/' + title).then((response) => {
                        this.searchResult = response.body;
                    });
                }
            }
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
</style>