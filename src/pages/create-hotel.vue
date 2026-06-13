<template>
    <div>
        <h1>CREAR HOTEL</h1>
        <el-form :inline="false" :model="formHotel" class="demo-form-inline">
            <el-form-item label="Nombre">
                <el-input v-model="formHotel.nombre" placeholder="Nombre de Hotel" clearable />
            </el-form-item>
            <el-form-item label="Direccion">
                <el-input v-model="formHotel.direccion" placeholder="Direccion" clearable />
            </el-form-item>
            <el-form-item label="Estrellas">
                <el-rate v-model="formHotel.estrellas" clearable />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">Crear</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { crearHotelesApi } from '../services/hoteles.api';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

const router = useRouter()

const formHotel = reactive({
    nombre: '',
    direccion: '',
    estrellas: 0,
})

const onSubmit = () => {
    crearHotelesApi({
        nombre: formHotel.nombre,
        direccion: formHotel.direccion,
        estrellas: formHotel.estrellas
    }).then(()=> {
        router.push({
            name: 'listHoteles',
        })
    }).catch(err => {
        ElMessage({
            message: err.message,
            type: 'error',
            duration: 3000,
        })
    })
    console.log('submit!')
}
</script>

<style scoped></style>