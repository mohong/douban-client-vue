<template>
    <div v-show="showFlag" class="movie" transition="move">
        <div class="movie-wrapper">
            <div class="header">
                <div class="images">
                    <img width="96" height="150" :src="movie.images.large">
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
                <div class="back" @click="show"><span>◁ 返回</span></div>
                <div class="background">
                    <img :src="movie.images.large">
                </div>
            </div>
            <div class="description">
                <h3>剧情简介</h3>
                <p>
                    暂无介绍
                </p>
            </div>
            <div class="director">
                <h3>导演</h3>
                <ul>
                    <li v-for="director in movie.directors">
                        <div class="avatar">
                            <img width="105" height="150" :src="director.avatars.large">
                        </div>
                        <div class="name">
                            <h3>{{director.name}}</h3>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
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
        .movie-wrapper
            .header
                position: relative
                display: flex
                padding: 45px 10px 20px 20px
                background-color: rgba(7, 17, 27, 0.1)
                color: #fff
                .images
                    flex: 0 0 96px
                    border: 2px solid #fff
                .info
                    flex: 1
                    margin-left: 10px
                    overflow: hidden
                    div
                        width: 100%
                        font-size: 12px
                        line-height: 20px
                    .title
                        font-size: 18px
                        margin-bottom: 10px
                .back
                    position:absolute
                    left: 10px
                    top: 10px
                    padding: 6px
                .background
                    position: absolute
                    left: 0
                    top: 0
                    width: 100%
                    height: 100%
                    overflow: hidden
                    filter: blur(10px)
                    z-index: -10
                    img
                        width: 100%
                        height: 100%
            .description
                padding: 20px
                background: #fff
                p
                    margin-top: 10px
                    text-indent: 2em
                    font-size: 12px
                    line-height: 20px
                    color: rgba(41, 41, 41, 0.7)
            .director
                margin-top: 20px
                padding: 20px
                background-color: #fff
                ul
                    display: flex
                    justify-content: flex-start
                    li
                        flex: 0 0 105px
                        width: 105px
                        margin: 10px 20px 0 0
                        position: relative
                        .avatar
                            width: 105px
                        .name
                            width: 105px
                            text-align: center
                            position: relative
                            h3
                                position: absolute
                                width: 100%
                                bottom: 3px
                                line-height: 30px
                                background-color: rgba(7, 17, 27, 0.7)
                                font-size: 12px
                                color: #fff
</style>