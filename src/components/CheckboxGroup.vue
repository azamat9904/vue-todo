<template>
    <div class="checkbox-group">
        <div class="checkbox-group__element">
            <input type="checkbox" :id="'check' + id" />
            <label :for="'check' + id"></label>
        </div>
        <div class="checkbox-group__text">
            Изучить JavaScript
        </div>
    </div>
</template>
<script>
    export default {
       props: ['id']
    }
</script>
<style lang="scss">
     .checkbox-group{
         display:flex;
         margin-bottom: 20px;

         &__element{

             label{
                 display: inline-block;
                 border: 2px solid #E8E8E8;
                 width: 20px;
                 height: 20px;   
                 border-radius: 50%;
                 margin-right: 15px;
                 cursor: pointer;
                 transition: .3s background;
                 
                 &:hover{
                    background:url(../assets/checked.svg) center no-repeat, #F2F2F2;
                 }
             }

             input{
                 display:none;
             }

             input:checked + label{
                 background:url(../assets/checked.svg) center no-repeat, #4DD599;
             }


         }

         &__text{
             font-family: Lato;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: #000000;
         }
     }
</style>