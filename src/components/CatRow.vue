<template>
    <div class="catrow">
      <div class="title">
          {{catalogue.name}}
      </div>
      <div class="list">
          <span v-for="content in catalogue.contents" v-bind:key="content.name">
            <img @click="show(content)" class="grow" :src="content.image"/>
          </span>
      </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Card from './Card.vue';
    import { Catalogue } from '../data/Model.js';

    let CardComponent = Vue.extend(Card);

    export default {
        name: 'CatRow',
        components: {
            Card
        },
        props: {
            catalogue: Catalogue
        },
        methods: {
            show(content) {
                console.log(content);
                let c = new CardComponent({
                    propsData: {
                        content: content
                    }
                });
                c.$mount();
                this.$swal({
                    content: c.$el,
                    buttons: {
                        confirm: {
                            value: 0
                        }
                    }
                })
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .catrow {
        margin: 2% 10%;
        text-align: left;
    }

    .catrow .list {
        background: linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0 ));
    }

    .catrow .title {
        font-size: 125%;
        font-weight: bold;
        padding: 1%;
        color: white;
        background: linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
    }

    .catrow img {
        padding: 1%;
        width: 7em;
    }

    .grow { transition: all .2s ease-in-out; }

    .grow:hover { transform: scale(1.25) }

</style>
