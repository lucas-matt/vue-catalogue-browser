<template>
    <div id="catview">
        <div v-for="subcat in catalogue.catalogues" v-bind:key="subcat.name">
            {{subcat.name}}
            <CatRow :catalogue="subcat"></CatRow>
        </div>
    </div>
</template>

<script>
    import CatRow from './CatRow.vue';
    import { Catalogue } from '../data/Model.js';

    export default {
        name: 'CatView',
        components: {
            CatRow
        },
        props: {
            catalogue: Catalogue
        }
    }
</script>

<style>

</style>