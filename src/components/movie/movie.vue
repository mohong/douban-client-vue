<template>
    <div v-show="showFlag" class="movie" transition="move">
        <div class="movie-wrapper">
            {{id}}
            <button @click="show">返回</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            id: {
                type: String
            }
        },
        data() {
            return {
                showFlag: false
            };
        },
        created() {
            console.log(this.id);
        },
        methods: {
            show() {
                this.showFlag = !this.showFlag;
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .movie
        position: absolute
        left: 0
        top: 0
        width: 100%
        height: 100%
        background: #f8f8f8
        &.move-transition
            transition: all 0.2s linear
            transform: translate3d(0, 0, 0)
        &.move-enter,&.move-leave
            transform: translate3d(100%, 0, 0)
</style>