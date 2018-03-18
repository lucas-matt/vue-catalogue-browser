<template>
    <div id="navbar">
        <button class="home">
            <span class="glyphicons glyphicons-home"></span>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        components: {
        },
        props: {
        }
    }
</script>

<style>

    #navbar {
        width: 100%;
        height: 4em;
        background: linear-gradient(180deg, #555555, #000000);
        text-align: left;
    }

    #navbar .home {
        margin-left: 3%;
    }

</style>