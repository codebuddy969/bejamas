import React, {useState, useEffect} from "react";

import {useSelector, useDispatch} from "react-redux";

import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/product-cart.module.scss";

import {RootState} from "@/utilities/redux/store";
import {useDetectClickOutside} from "react-detect-click-outside";
import {clear} from "@/utilities/redux/slices/addToCart.slice";
import {ICartParameters} from "@/utilities/interfaces/addToCart.interface";

let products: Array<ICartParameters> = [];

const ProductsCart = () => {
    const [status, setStatus] = useState(false);

    const dispatch = useDispatch();

    const product = useSelector((state: RootState) => state.product);

    const ref = useDetectClickOutside({
        onTriggered: () => status && setStatus(false),
    });

    const clearList = () => {
        dispatch(clear());
        setStatus(false);
        products = [];
    };

    useEffect(() => {
        product.value !== 0 && products.push(product);
    }, [product]);

    return (
        <div className={styles.cart} ref={ref}>
            <button
                className={styles.trigger}
                onClick={() => setStatus(!status)}
            >
                <Image
                    src="/cart.svg"
                    alt="Logo of a bejamas company"
                    layout="fill"
                    objectFit="cover"
                />
                <span>{product.value}</span>
            </button>

            <div
                className={`${styles.list} ${status && styles["list-visible"]}`}
            >
                <button
                    className={styles.close}
                    onClick={() => setStatus(false)}
                ></button>
                <ul>
                    {products.map((product) => {
                        return (
                            <li
                                key={`${product.id}-${Math.floor(
                                    Math.random() * 1000
                                )}`}
                            >
                                <div className={styles.info}>
                                    <Link href="/" passHref>
                                        <a>{product.name}</a>
                                    </Link>
                                    <span>${product.price}</span>
                                </div>
                                <div className={styles.image}>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        layout="fill"
                                        objectFit="cover"
                                        loader={({src}) => `${src}`}
                                    />
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <button
                    className="btn-primary btn-primary--outlined"
                    onClick={clearList}
                >
                    Clear
                </button>
            </div>
        </div>
    );
};

export default ProductsCart;
