<template>
    <div class="wrapper" v-cloak>
        <div class="content">
            <Sidebar 
                class="content__sidebar" 
                :items="items"
                :param="$route.params.id"
                />
            <main class="content__main">
                <router-view />
            </main>
        </div>
    </div>
</template>

<script>
    import Sidebar from './components/Sidebar';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        components: {
            Sidebar,
        },
        computed: {
            ...mapGetters([
                'items'
            ])
        },
        methods: {
            ...mapActions([
                'fetchItems'
            ])
        },
        mounted(){
            this.fetchItems();
        },
    }

</script>

<style lang="scss">
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    [v-cloak]{
        display: none;
    }

    body{
        font-family: 'Lato', sans-serif;
        font-size: 16px;
    }

    html,
    body,
    #app,
    .wrapper,
    .content{
        height: 100%;
    }
    
    .wrapper {
        height: 100%;
        width: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: 30px 20px;
    }

    .content{
        display: flex;
        max-width: 1140px;
        width: 100%;
        margin:0 auto;
        box-shadow: 0 0 2px 2px rgba(0,0,0,.1);
        
        &__sidebar{
            flex:0 0 280px;
        }
        
        &__main{
            flex: 1;
        }
    }
    
    
</style>
