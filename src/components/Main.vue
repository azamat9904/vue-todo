<template>
    <div class="main-page">
        <h3 class="main-page__title">Фронтенд</h3>
        <div class="main-page__content">
            <CheckboxGroup :id="1" />
            <CheckboxGroup :id="2" />
            <CheckboxGroup :id="3" />
            <button class="main-page__btn"  v-if="!isOpen" @click="setIsOpen(true)">
                <div class="main-page__img">
                    <img src="../assets/plus-task.png" alt="plus task">
                </div> 
                <span>Новая задача</span>
            </button>
            <div class="main-page__add-task task-add" v-else>
                <div class="task-add__input">
                    <input type="text" placeholder="Текст задачи" />
                </div>
                <div class="task-add__btns">
                    <button class="task-add__plus">Добавить задачу</button>
                    <button class="task-add__cancel" @click="setIsOpen(false)">Отмена</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import CheckboxGroup from './CheckboxGroup';

    export default {
        data(){
            return {
                isOpen: false
            }
        },
        methods: {
            setIsOpen(value){
                this.isOpen = value;
            }
        },
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

        &__btn{
            background: transparent;
            border:none;
            outline: none;
            display: flex;
            align-items: center;
            cursor: pointer;

            span{
                font-family: Lato;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                letter-spacing: 0.15px;

                color: #B4B4B4;
            }
        }

        &__img{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            margin-right: 15px;

             img{
                width: 14px;
                height: 14px;
            }
        }
    }

    .task-add{

        &__input{
            width: 100%;
            margin-top: 20px;
            margin-bottom: 16px;

            input{
                background: #FFFFFF;
                border: 1px solid #EFEFEF;
                box-sizing: border-box;
                border-radius: 4px;
                outline: none;
                width: 100%;
                max-width: 500px;
                padding: 9px 14px;
                font-family: Lato;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 17px;
                letter-spacing: 0.15px;
            }
        }

        &__plus{
            background: #4DD599;
            border-radius: 4px;
            border:none;
            outline: none;
            font-family: Lato;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            letter-spacing: 0.15px;
            color: #FFFFFF;
            padding: 7px 15px;
            cursor: pointer;
            transition: .5s background;
            margin-right: 9px;

            &:hover{
                background: darken(#4DD599, 5%);
            }
        }

        &__cancel{
            background: #F4F6F8;
            border-radius: 4px;
            border:none;
            outline: none;
            font-family: Lato;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            letter-spacing: 0.15px;
            padding: 7px 10px;
            cursor: pointer;
            color: #9C9C9C;
            transition: .5s background;

            &:hover{
                 background: darken( #F4F6F8, 5%);
            }
        }
    }
</style>