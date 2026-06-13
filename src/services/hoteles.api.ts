export type HotelType = {
    id: string,
    nombre: string,
    direccion: string,
    estrellas: number
}

export async function listHotelesApi(){
    let hoteles: Array<HotelType> = [];
    await fetch('http://localhost:3000/hotel/list').then(async resp => {
        const data = await resp.json()
        hoteles = data.data;
    }).catch(err => {
        throw new Error('Error al recuperar los hoteles')
    })
    return hoteles;
}

export async function crearHotelesApi(partialHotel: Omit<HotelType, 'id'>){
    let hotel: HotelType | undefined = undefined;
    await fetch('http://localhost:3000/hotel', {
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