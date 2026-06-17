export type HotelType = {
    id: string,
    nombre: string,
    direccion: string,
    estrellas: number
}

const apiBaseService = import.meta.env.VITE_API_BASE_URL

export async function listHotelesApi(){
    let hoteles: Array<HotelType> = [];
    await fetch(`${apiBaseService}/hotel/list`).then(async resp => {
        const data = await resp.json()
        hoteles = data.data;
    }).catch(err => {
        throw new Error('Error al recuperar los hoteles')
    })
    return hoteles;
}

export async function crearHotelesApi(partialHotel: Omit<HotelType, 'id'>){
    let hotel: HotelType | undefined = undefined;
    await fetch(`${apiBaseService}/hotel`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(partialHotel),
    }).then(async resp => {
        const data = await resp.json()
        hotel = data.data;
    }).catch(err => {
        throw new Error('Error al crear un hotel')
    })
    return hotel;
}

export async function addHabitacionSimple(hotelId: string, data: {
    numeroHabitacion: number,
    precio: number
}){
    let hotel: HotelType | undefined = undefined;
    await fetch(`${apiBaseService}/hotel/${hotelId}/habitacion-simple`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(async resp => {
        const data = await resp.json()
        hotel = data.data;
    }).catch(err => {
        throw new Error('Error al crear una habitacion simple para el Hotel')
    })
    return hotel;
}