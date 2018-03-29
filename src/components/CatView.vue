<template>
    <div id="catview">
        <div v-for="subcat in catalogues" v-bind:key="subcat.name">
            <CatRow :catalogue="subcat"></CatRow>
        </div>
    </div>
</template>

<script>
    import CatRow from './CatRow.vue';

    export default {
        name: 'CatView',
        components: {
            CatRow
        },
        props: {
            catalogues: Array
        }
    }
</script>

<style>

    #catview {
        margin-bottom:2%;
    }

</style>
