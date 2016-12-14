<template>
    <div>
        <div class="tab">
            <div class="tab-item">
                <a v-link="{path: '/nowplaying'}">热播</a>
            </div>
            <div class="tab-item">
                <a v-link="{path: '/comingsoon'}">期待</a>
            </div>
            <div class="tab-item">
                <a v-link="{path: '/review'}">影库</a>
            </div>
        </div>
        <router-view keep-alive></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                movies: []
            };
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