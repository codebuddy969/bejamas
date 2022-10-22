import {useContext, useEffect, useState} from "react";

import ProductsCard from "@/components/index/products-card";
import Pagination from "@/components/index/pagination";

import styles from "@/styles/components/products.module.scss";

import {iServerData} from "@/utilities/interfaces/serverData";

import {ServerDataContext} from "@/utilities/contexts/serverData";

import {useSelector} from "react-redux";
import {RootState} from "@/utilities/redux/store";

import {useGetFilteredProductsMutation} from "@/utilities/redux/services/api.service";

export interface ICartParameterss {
    data: {
        data: any;
    };
}

const Products = () => {
    const value = useContext(ServerDataContext) as iServerData;

    const [serverInfo, SetServerInfo] = useState(value?.data || []);

    const apiRequest = useSelector((state: RootState) => state.apiRequest);

    const [getFilteredProducts] = useGetFilteredProductsMutation();

    useEffect(() => {
        if (apiRequest.touched) {
            getFilteredProducts({post: apiRequest}).then((response: any) => {
                SetServerInfo(response.data.data);
            });
        }
    }, [apiRequest]);

    return (
        <div className={styles.products}>
            <div className={styles.container}>
                {serverInfo.products.map((product) => {
                    return (
                        <ProductsCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            category={product.category}
                            price={product.price}
                            currency={product.currency}
                            image={product.image}
                            bestseller={product.bestseller}
                            featured={product.featured}
                        />
                    );
                })}
            </div>
            <Pagination pages={serverInfo.pages} page={apiRequest.page} />
        </div>
    );
};

export default Products;
