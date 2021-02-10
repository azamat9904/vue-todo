<template>
    <div class="add-task">
        <div class="add-task__content">
            <div class="add-task__input">
                <input 
                    type="text" 
                    placeholder="Название папки" 
                    v-model="value"
                />
            </div>
            <div class="add-task__colors">
                <div 
                    class="add-task__color"
                    v-for="color in colors" 
                    :key="color.id" 
                    :style="{background: color.color}"
                    >
                </div>
            </div>
            <button class="add-task__btn">Добавить</button>
            <button 
                class="add-task__close"
                @click.stop="setIsOpen(false)">
                 <img src="../assets/close.png" alt="close btn">
            </button>
        </div>
    </div>
</template>
<script>
    export default {
        props:['setIsOpen', 'colors'],
        data(){
            return {
                value: ""
            }
        }
    }
</script>
<style lang="scss">

    .add-task{
        position: absolute;
        left:0;
        top:100%;
        background: #fff;
        width: 235px;
        height:150px;
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
        border-radius: 10px;

        &__content{
            padding: 18px;
        }

        &__input{

            input{
                background: #FFFFFF;
                border: 1px solid #EFEFEF;
                box-sizing: border-box;
                border-radius: 4px;
                outline: none;
                padding: 7px 11px;
                width: 100%;
            }
        }

        &__colors{
            display: flex;
            margin: 13px 0;
        }

        &__color{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: red;
            margin-right: 5px;
            border: 2px solid transparent;

            &.active{
                border: 2px solid rgba(0,0,0,.4);
            }
        }

        &__close{
            background: transparent;
            border:none;
            outline: none;
            position: absolute;
            right:-5px;
            top:-5px;
            cursor: pointer;
        }

        &__btn{
            background: #4DD599;
            border-radius: 4px;
            width: 100%;
            border:none;
            outline: none;
            cursor: pointer;
            color:#fff;
            font-weight: 500;
            padding: 10px 0;
            transition: .3s background;

            &:hover{
                 background: darken(#4DD599, 5%);
            }
        }
    }
</style>