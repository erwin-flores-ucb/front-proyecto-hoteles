import { ref } from "vue";
import { listHotelesApi, type HotelType } from "../services/hoteles.api";
import { ElMessage } from "element-plus";

export function useListHotelesComposable() {
  const hoteles = ref<Array<HotelType>>([]);
  const loading = ref(false);

  const loadHoteles = async () => {
    loading.value = true;
    try {
      hoteles.value = await listHotelesApi();
    } catch (error) {
      ElMessage({
        message: (error as Error).message,
        type: "error",
        duration: 3000,
      });
    }
    loading.value = false;
  };
  return {
    loadHoteles,
    hoteles,
    loading,
  };
}
