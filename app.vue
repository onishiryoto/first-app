<script lang="ts" setup>
import { useErrorMessge } from './composables/useErrorMessage';
import { useNavToHome } from './composables/useNavToHome';
import { useNavToLogin } from './composables/useNavToLogin';
import {Route,RoutePath} from "./constants/Route"
const useErrorMessage = useErrorMessge();
const isOpenErrorDialog = ref(false);
watch(useErrorMessage.message,(cullent,prev) => {
  isOpenErrorDialog.value = true;
})

const confirmErrorDialog = () => {
  const router = useRouter();
  isOpenErrorDialog.value = false;

  const _useNavToLogin = useNavToLogin();
  const _useNavToHome = useNavToHome();

  //ログインへ戻す場合の処理
  if(_useNavToLogin.isNavToLogin){
    //Todo:ローカルストレージクリア
    router.push(RoutePath[Route.Login]);
  }else if(_useNavToHome.isNavToHome){
    router.push(RoutePath[Route.Home]);
  }
}
</script>
<template>
  <v-app>
      <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>
