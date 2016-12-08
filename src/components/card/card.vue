<template>
    <div class="card">
        <div class="images">
            <img width="65" height="100" :src="movie.images.small">
        </div>
        <div class="info">
            <div class="title">{{movie.title}}</div>
            <div class="rate">评分：{{movie.rating.average}}分</div>
            <div class="type">
                类型：<span v-for="type in movie.genres">{{type}}、</span>
            </div>
            <div class="cast">
                主演：<span v-for="cast in movie.casts">{{cast.name}}&nbsp;</span>
            </div>

        </div>
    </div>
    <movie></movie>
</template>

<script>
    import movie from '../movie/movie.vue';

    export default {
        props: {
            movie: {
                type: Object
            }
        },
        components: {
            movie
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .card
        display: flex
        height: 100px
        margin: 10px
        padding: 10px
        background: #fff
        border-radius: 6px
        .images
            flex: 0 0 65px
        .info
            flex: 1
            margin-left: 10px
            overflow: hidden
            div
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis
                width: 100%
                font-size: 12px
                color: rgb(7, 17, 27, 0.1)
                line-height: 20px
            .title
                font-size: 18px
                margin-bottom: 10px

</style>