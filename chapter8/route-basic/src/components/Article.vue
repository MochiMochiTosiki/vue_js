<template>
<div>
    <div>記事コード：{{ aid }}</div>
    <span><router-link v-bind:to="'/article/'+ aid + 'pages/1'">Page : 1</router-link></span>
    <span><router-link v-bind:to="'/article/'+ aid + 'pages/2'">Page : 2</router-link></span>
    <hr />
    <router-view />
</div>
</template>

<script>
let timeGuard = function(to, from, next) {
    let data = {
        13: new Date(2019, 10, 30),
        108: new Date(2018, 10, 30)
    }

    let limit = data[to.params.aid] ? data[to.params.aid]: new Date(2999, 12, 31)

    let current = new Date()

    if (limit && limit.getTime() > current.getTime()) {
        next()
    } else {
        window.alert('記事の公開期限が過ぎています')
        next(false)
    }
}

export default {
    name: 'Article',
    beforeRouteEnter: timeGuard,
    beforeRouteUpdate: timeGuard
    props: {
        aid: String
    }
}
</script>