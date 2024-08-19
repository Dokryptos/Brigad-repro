export interface MissionItem {
    type: 'mission'
    mission: {
        post: string
        restaurantName: string
        location: string
        price: number
        timeInCar: number
        time: timeDesctiption[]
        adress: string
        infos: infoDescription[]
        indispensable:[]

    }
}

export type timeDesctiption = {
    date: string
    hour: {
        start: number
        end: number
    }
    day: string[]
}

export type infoDescription = {
    info: string
    type: string
    description: string
}