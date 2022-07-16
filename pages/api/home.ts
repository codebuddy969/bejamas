import type { NextApiRequest, NextApiResponse } from 'next';

import { iProduct, iServerData } from '@/utilities/interfaces/serverData';

import { categories, productsList } from '@/utilities/database';

export default function handler( req: NextApiRequest, res: NextApiResponse<iServerData> ) {

    let featured: iProduct = productsList.filter((product: iProduct) => product.featured)[0];

    const products: iProduct[] = productsList.slice(0, 6);

    const data: iServerData = {
        data: {
            categories,
            products,
            featured
        }
    }

  res.status(200).json(data)
}
