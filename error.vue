<template>
    <NuxtLoadingIndicator />
        <v-row> 
            <v-col>
                <div class="">エラー画面</div>
                <default-sheet :title="isError(error) ? error.cause as string : error.statusCode.toString()">
                    {{ error.message }}
                    <!-- test -->
                </default-sheet>
            </v-col>
        </v-row>
</template>
<script setup lang="ts">

const error = useError() as globalThis.Ref<Error | {
    url: string;
    statusCode: number;
    statusMessage: string;
    message: string;
    description: string;
    data?: any;
}>
console.log(error.value.message);



const isError = (obj: any): obj is Error => {
    return !!(obj as Error)?.cause;
}

</script>