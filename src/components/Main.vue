<template>
    <div class="main-page">
        <h3 class="main-page__title">Фронтенд</h3>
        <div class="main-page__content">
            <CheckboxGroup :id="1" />
            <CheckboxGroup :id="2" />
            <CheckboxGroup :id="3" />
        </div>
    </div>
</template>
<script>
    import CheckboxGroup from './CheckboxGroup';

    export default {
        components: {
            CheckboxGroup
        }
    }
</script>
<style lang="scss">
    .main-page{
        padding: 57px;

        &__title{
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 39px;
            color: #64C4ED;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(0,0,0,.05);
        }

        &__content{
            margin-top: 30px;
        }
    }
</style>