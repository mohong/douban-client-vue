<template>
    <div v-show="showFlag" class="movie" transition="move">
        <div class="movie-wrapper">
            <div class="header">
                <div class="images">
                    <img width="96" height="150" :src="movie.post">
                </div>
                <div class="info">
                    <div class="title">{{movie.title}}</div>
                    <div class="rate">评分：{{movie.rate}}分</div>
                    <div class="type">
                        类型：<span v-for="type in movie.genre">{{type}}、</span>
                    </div>
                    <div class="cast">
                        主演：<span v-for="cast in movie.actors">{{cast.name}}&nbsp;</span>
                    </div>
                </div>
                <div class="back" @click="show"><span>＜ 返回</span></div>
                <div class="background">
                    <img :src="movie.post">
                </div>
            </div>
            <div class="description">
                <h3>剧情简介</h3>
                <p>
                    {{movie.related_info}}
                </p>
            </div>
            <div class="related_pic">
                <h3>剧照</h3>
                <div class="pics-wrapper" v-el:pics-wrapper>
                    <ul class="pics-list" v-el:pics-list>
                        <li class="pic-item" v-for="pic in movie.related_pic">
                            <img width="100" height="100" :src="pic">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';

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
        watch: {
            'movie'() {
                this._initPics();
            }
        },
        ready() {
            this._initPics();
        },
        methods: {
            show() {
                this.showFlag = !this.showFlag;
            },
            _initPics() {
                console.log(this.movie);
                if (this.movie.related_pic) {
                    let picWidth = 120;
                    let margin = 6;
                    let width = (picWidth + margin) * this.movie.related_pic.length - margin;
                    this.$els.picsList.style.width = width + 'px';
                    this.$nextTick(() => {
                        if (!this.picScroll) {
                            this.picScroll = new BScroll(this.$els.picsWrapper, {
                                scrollX: true,
                                eventPassthrough: 'vertical'
                            });
                        } else {
                            this.picScroll.refresh();
                        }
                    });
                }
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
                    height: 150px
                    overflow: hidden
                    text-overflow: ellipsis
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
            .related_pic
                margin-top: 20px
                padding: 20px
                background-color: #fff
                .pics-wrapper
                    margin-top: 13px
                    width: 100%
                    overflow: hidden
                    white-space: nowrap
                    .pics-list
                        font-size: 0
                        .pic-item
                            display: inline-block
                            margin-right: 6px
                            &:last-child
                                margin: 0
</style>