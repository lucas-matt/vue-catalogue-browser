<template>
    <div class="card">
        <div class="head">
            <h3>{{content.name}}</h3>
        </div>
        <hr />
        <tabs>
            <tab name="Info">
                <div class="desc">
                    <img :src="content.image" />
                    <p>{{content.description}}</p>
                    <div class="clear" />
                </div>
            </tab>
        </tabs>
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
        width: 40%;
        float: left;
        margin-right: 1em;
    }

    .card .clear {
        clear: both;
    }
    
    .desc {
        padding: 1em;
        display: block;
    }

    .desc p {
        margin: 0;
    } 

    .head {
        text-align: center;
    }

</style>
