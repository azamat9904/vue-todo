<template>
    <div class="sidebar">
        <nav class="sidebar__nav">
            <ul class="sidebar__list">
                <li 
                    class="sidebar__item sidebar__item_all" 
                    :class="{active: !param}" 
                    @click="changeRoute(-1)"
                >
                    <span class="sidebar__link">Все задачи</span>
                </li>
                <li 
                    class="sidebar__item" 
                    v-for="(item, index) in items" 
                    :key="index"
                    :class="{active: param == item.id, 'sidebar__item_last': index == items.length - 1}"
                    @click="changeRoute(item.id)"
                    >
                   <div class="sidebar__color" :style="{background: item.color.color}"></div>    
                    <span class="sidebar__link">{{item.title}}</span>
                    <button class="sidebar__close" @click="removeItem(item)"><img src="../assets/item-close.png" alt="item-close"></button>
                </li>
                <li class="sidebar__item sidebar__item_add" @click="setIsOpen(true)">
                    <a href="#" class="sidebar__link">Добавить папку</a>
                    <AddTask 
                        v-if="isOpen"
                        :setIsOpen="setIsOpen"
                        :colors="colors"
                    />
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
    import AddTask from './AddTask';

    export default {
        props: {
            items: Array,
            param: String,
            changeRoute: Function,
            colors: Array
        },
        data(){
            return {
                isOpen: false
            }
        },
        methods: {
            setIsOpen(value){
                this.isOpen = value;
            },
            removeItem(item){
                this.$emit('removeItem', item);
            }
        },
        components: {
            AddTask
        }
    }

</script>
<style lang="scss">
    .sidebar {
        $self: &;
        background: #F2F2F2;
        border-radius: 3px;

        &__list {
            list-style: none;
            padding-top: 32px;
            padding-left: 20px;
            padding-right: 20px;
        }

        &__close{
            border: none;
            outline: none;
            background: transparent;
            position: absolute;
            right:13px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            width: 10px;
            height: 10px;
            display: none;
        }

        &__item {
            padding: 12px 13px;
            border-radius: 5px;
            padding-left: 35px;
            cursor: pointer;
            position: relative;
            line-height: 17px;
            margin-bottom: 5px;
            
            &.active {
                background: #fff;
            }

            &:hover{
                background: #fff;
            }

            &:hover > #{$self}__close{
                display: block;
            }

            &_all {
                background: url(../assets/list.png) 13px center no-repeat;
                margin-bottom: 30px;

                &.active, &:hover {
                    background: url(../assets/list.png) 13px center no-repeat, #fff;
                }

                &>#{$self}__link {
                    font-family: Lato;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;
                    letter-spacing: 0.2px;

                    color: #000000;
                }
            }

            &_add {
                background: url(../assets/plus.png) 13px center no-repeat;
                position: releative;

                &:hover {
                     background: url(../assets/plus.png) 13px center no-repeat;
                }

                &>#{$self}__link {
                    font-family: Lato;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 17px;
                    letter-spacing: 0.15px;
                    color: #767676;
                }
            }

            &_last {
                margin-bottom: 30px;
            }

        }

        &__link {
            font-family: Lato;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            letter-spacing: 0.15px;
            color: #000000;
            text-decoration: none;
        }

         &__color {
                content: "";
                position: absolute;
                left: 15px;
                top: 50%;
                transform: translateY(-50%);
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: green;
            }
    }

</style>
