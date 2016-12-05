<template>
    <div class="movie">
        <div class="title">
            <h3>{{movie.title}}</h3>
        </div>
        <div class="post">
            <img width="100" height="140"  :src="movie.images.large">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            movie: {
                type: Object
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .movie
        position: relative
        .title
            width: 94px
            position: absolute
            bottom: 10px
            color: #fff
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            h3
                margin: 3px 10px
        .post
            img
                border: 6px solid #fff


</style>