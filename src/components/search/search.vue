<template>
    <div class="search">
        <div class="input-wrapper">
            <input type="text" v-model="movieTitle" placeholder="输入电影名称">
            <div class="result">
                <ul>
                    <li @click="selectMovie($event,movie)" v-for="movie in result">{{movie.title}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                movieTitle: '',
                result: []
            };
        },
        watch: {
            'movieTitle' (val, oldVal) {
                if (val) {
                    this.searchMovie(val);
                } else {
                    this.result = [];
                }
            }
        },
        methods: {
            searchMovie(movieTitle) {
                this.$http.get('http://192.168.1.111:4000/api/movie/search/' + movieTitle).then((response) => {
                    if (response.body !== '无相关资源') {
                        this.result = response.body;
                    }
                });
            },
            selectMovie(event, movie) {
                console.log(movie.title);
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .search
        width: 100%
        .input-wrapper
            height: 50px
            text-align: center
            input
                margin: 10px
                width: 92%
                height: 100%
                font-size: 18px
                border-radius: 15px
                outline: none
            .result
                width: 92%
                text-align: center
                margin: 0 auto
                li
                    background: #fff
                    text-align: left
                    border-radius: 15px
                    margin: 10px 0
                    line-height: 30px
                    padding: 10px
                    white-space: nowrap
                    overflow: hidden
                    text-overflow: ellipsis
                    height: 30px
                    font-size: 14px
                    color: rgb(7, 17, 27, 0.1)
</style>