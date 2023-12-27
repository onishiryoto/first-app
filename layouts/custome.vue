<script lang="ts" setup>
import IUserModel from '~/models/apis/responses/user';
import {CommonError} from "~/models/commons/CommonError";
import {isCommonError} from "~/models/commons/CommonError";

const _useError = useError()


const { $api } = useNuxtApp();
const emptyList:IUserModel[] = [];
const users:Ref<IUserModel[]> = ref([]);
const selectUsers = (userList:IUserModel[])=> {
    if(userList.length >= 3){
        return userList.slice(0,3);
    }else{
        return userList;
    }
}

const getItemClass = (num:number) => {
    switch(num){
        case 0:
            return 'user-icon-first';
            break;        
        case 1:
            return 'user-icon-second';
            break;        
        case 2:
            return 'user-icon-third';
            break;        
    }
}
try {
    const res = await $api.user.getUsers();

    const userList = selectUsers(res.body!);
    users.value = userList;

    console.log(users.value);
    
} catch (error) {
    if(isCommonError(error) ){     
        _useError.setError({
        errorCode: error.errorCode,
        name: error.name,
        message: error.message
    });
    }}
</script>

<template>
    <div class="">
        <v-app-bar :elevation="1" fixed app color="primary" class="px-4">
            <v-icon icon="mdi-home"></v-icon>
            <v-toolbar-title class="df-ft">学校給食 動線図作成</v-toolbar-title>
           
            <div class="header-space"></div>
            <v-spacer></v-spacer>
            <v-btn class="user-group-btn"  variant="text" width="100">
                <v-icon v-for="(item,index) in users" :id="index" :class="getItemClass(index)" icon="mdi-account" ></v-icon>
                <div class="user-number">9</div>
            </v-btn>
            <v-btn variant="text" icon="mdi-dots-horizontal"></v-btn>
            <!-- <v-btn variant="text" icon="mdi-account"></v-btn> -->
        </v-app-bar>
        <slot />
    </div>
</template>

<style >
.df-ft{
    font-size: 24;
}

.user-group-btn{
    background-color:#445777;
}

.user-number{
    margin-left: 70px;
    color: rgb(53, 57, 61);
}

.user-icon-first{
    border-radius:50%;
    height: 26px;
    width: 26px;
    position: absolute;
    background-color: rgb(216, 255, 216);
    color: rgb(44, 228, 142);
    margin-left: 8px;

}
.user-icon-second{
    border-radius:50%;
    height: 26px;
    width: 26px;
    position: absolute;
    background-color: rgb(255, 237, 216);
    color: rgb(228, 118, 44);
    margin-left: -28px;
}
.user-icon-third{
    border-radius:50%;
    height: 26px;
    width: 26px;
    position: absolute;
    background-color: rgb(216, 235, 255);
    color: rgb(44, 139, 228);
    margin-left: -66px;
}
.user-icon:not(:first-child) {
    margin-left: -36px;
  }

</style>