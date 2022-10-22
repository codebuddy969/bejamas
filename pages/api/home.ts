import type {NextApiRequest, NextApiResponse} from "next";

import {iProduct, iServerData} from "@/utilities/interfaces/serverData";

import {categories, productsList} from "@/utilities/database";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<iServerData>
) {
    const per_page = 6;

    let featured: iProduct = productsList.filter(
        (product: iProduct) => product.featured
    )[0];

    let products: iProduct[] = productsList;

    let pagination_start = 0;
    let pagination_end = per_page;

    if (req.body) {
        if (req.body.post.categories.length) {
            products = productsList.filter((product: iProduct) =>
                req.body.post.categories.includes(product.category)
            );
        }

        if (req.body.post.range.length) {
            const cheap = req.body.post.range.includes("cheap")
                ? products.filter((product: iProduct) => product.price < 20)
                : [];
            const low = req.body.post.range.includes("low")
                ? products.filter(
                      (product: iProduct) =>
                          product.price > 20 && product.price < 100
                  )
                : [];
            const high = req.body.post.range.includes("high")
                ? products.filter(
                      (product: iProduct) =>
                          product.price > 100 && product.price < 200
                  )
                : [];
            const expensive = req.body.post.range.includes("expensive")
                ? products.filter((product: iProduct) => product.price > 200)
                : [];

            products = [...cheap, ...low, ...high, ...expensive];
        }

        products =
            req.body.post.sorting === "price"
                ? products.sort((a, b) => b.price - a.price)
                : products.sort((a, b) =>
                      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
                  );

        req.body.post.order === "asc" && products.reverse();

        pagination_start = req.body.post.page * per_page - per_page;
        pagination_end = req.body.post.page * per_page;
    }

    const rest = products.length % per_page;
    
    const pages = Math.floor(products.length / per_page + (rest ? 1 : 0));

    products = products.slice(pagination_start, pagination_end);

    const data: iServerData = {
        data: {
            categories,
            products,
            featured,
            pages
        },
    };

    res.status(200).json(data);
}
