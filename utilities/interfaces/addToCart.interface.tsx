export interface ICartProduct {
    id: null|number,
    value: number,
    name: string,
    price: number,
    image: string
}

export interface ICartParameters {
    id: null|number,
    value?: number,
    name: string,
    price: number,
    image: string,
}
