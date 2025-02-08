<template>
    <div class="body">
        <div class="header">
            <ul class="header__nav">
                <li>
                    <router-link 
                    class="header__link" 
                    
                    :to="{name:'home'}">home</router-link>
                </li>
                <li>
                    <router-link 
                    class="header__link" 
                  
                    :to="{name:'about'}">about</router-link>
                </li>
                <li>
                    <router-link 
                    class="header__link" 

                    :to="{name:'another'}">anotherPage</router-link>
                </li>
            </ul>
        </div>
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
    .body{
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-rows: 60px 1fr;
        gap: 5px;
        padding: 0 20px;
    }
    .header{
        display: flex;
        padding: 10px 0px;
        &__nav{
            display: flex;
            flex-direction: row;
            gap: 10px;
        }
        &__link{
            padding:5px 10px;
            border-radius: 10px;
            background-color: aliceblue;
            color: black;
            display: block;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
                background-color: rgb(191, 209, 224);
            }
            &.router-link-active {  // Style the custom active class
                color: blue;
                font-weight: bold;
            }
        }
    }
</style>