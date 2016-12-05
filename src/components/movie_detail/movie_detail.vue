<template>
    <div v-show="showFlag" class="movie-detail" transition="move">
        <h1 @click="show"><</h1>
        {{movie.title}}
    </div>
</template>

<script>
    export default {
        props: {
          movie: {
              type: Object
          }
        },
        data() {
            return {
                showFlag: false
            };
        },
        methods: {
            show() {
                this.showFlag = !this.showFlag;
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .movie-detail
        top: 0
        left: 0
        position: absolute
        width: 100%
        height: 100%
        overflow: hidden
        background: #fff
        &.move-transition
            transition: all 0.2s linear
            transform: translate3d(0, 0, 0)
        &.move-enter,&.move-leave
            transform: translate3d(100%, 0, 0)
</style>