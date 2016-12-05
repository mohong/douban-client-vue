<template>
    <div class="movie">
        <div class="post">
            <img :src="movie.post">
        </div>
        <div class="title">
            {{movie.title}}
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

</style>