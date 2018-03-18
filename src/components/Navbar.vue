<template>
    <div id="navbar">
        <icon class="home" scale="2" name="home"></icon>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        components: {},
        props: {}
    }
</script>

<style>

    #navbar {
        width: 100%;
        height: 4em;
        background: linear-gradient(180deg, #555555, #000000);
        text-align: left;
        display: flex;
    }

    #navbar .home {
        margin-left: 3%;
        color: white;
        display: block;
        margin-top: auto;
        margin-bottom: auto;
    }

</style>