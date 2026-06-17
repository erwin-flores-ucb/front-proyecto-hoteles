<template>
    <el-dialog v-model="showDialog" title="Nueva habitacion simple" width="500">
        <el-form :model="formHabitacionSimple">
            <el-form-item label="Numero de habitacion" :label-width="formLabelWidth">
                <el-input v-model="formHabitacionSimple.numeroHabitacion" type="number"/>
            </el-form-item>
            <el-form-item label="Precio" :label-width="formLabelWidth">
                <el-input v-model="formHabitacionSimple.precio" type="number"/>
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="onCancel">Cancel</el-button>
                <el-button type="primary" @click="onSave">
                    Guardar
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref, toRaw } from 'vue';
import { addHabitacionSimple } from '../services/hoteles.api';
import { ElMessage } from 'element-plus';

const emit = defineEmits(['onSave'])

const formLabelWidth = '200px'
const showDialog = ref(false)
const hotelId = ref()

const formHabitacionSimple = reactive({
    numeroHabitacion: 0,
    precio: 0
})

const clearForm = () => {
    formHabitacionSimple.numeroHabitacion = 0
    formHabitacionSimple.precio = 0
}

const onCancel = () => {
    clearForm()
    hotelId.value = undefined
    showDialog.value = false
}

const onSave = () => {
    console.log('guardar habitacion simple')
    // guardado de la habitacion simple
    addHabitacionSimple(hotelId.value, toRaw(formHabitacionSimple)).then(() => {
        clearForm()
        hotelId.value = undefined
        showDialog.value = false
        emit('onSave')
    }).catch(() => {
        ElMessage({
            message: 'Error al registrar la habitacion simple',
            type: 'error',
            duration: 3000
        })
    })
}

const openModal = (hId: string) => {
    hotelId.value = hId
    showDialog.value = true
}

defineExpose({
    openModal
})

</script>

<style scoped></style>