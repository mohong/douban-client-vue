<template>
    <div class="in_theaters">
        正在热播
    </div>
</template>

<script>
    export default {
        data() {
          return {
              movies: []
          };
        },
        created() {
            this.$http.jsonp('https://api.douban.com//v2/movie/in_theaters').then((response) => {
                this.movies = response.body.subjects;
            });
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>