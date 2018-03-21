<template>
    <div class="card">
        <div class="head">
            <h3>{{content.name}}</h3>
        </div>
        <hr />
        <div class="desc">
            <img :src="content.image" />
        </div>

    </div>
</template>

<script>
    import { Content } from '../data/Model.js';

    export default {
        name: 'Card',
        props: {
            content: Content
        }
    }
</script>

<style scoped>

    .card {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
    }

    .card img {
        width: 40%
    }

    .desc {
        padding: 1em;
    }

    .head {
        text-align: center;
    }

</style>