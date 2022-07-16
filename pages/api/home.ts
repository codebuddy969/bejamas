import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const categories = [
    { name: "people" },
    { name: "premium" },
    { name: "pets" },
    { name: "food" },
    { name: "landmarks" },
    { name: "cities" },
    { name: "Nature" }
]

const products = [
    {
        name: "Red Bench",
        category: "people",
        price: 3.89,
        currency: "USD",
        image: {
            src: "",
            alt: ""
        },
        bestseller: true,
        featured: false,
        details: null
    }
]

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {

    const data = {

    }

  res.status(200).json({ name: 'John Doe' })
}
