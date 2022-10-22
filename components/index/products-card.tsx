import {useDispatch} from "react-redux";

import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/products-card.module.scss";

import {iProduct} from "@/utilities/interfaces/serverData";

import {add} from "@/utilities/redux/slices/addToCart.slice";

const ProductsCard = (props: iProduct) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.card}>
            <div className={styles.image}>
                {props.bestseller && (
                    <div className={styles.label}>Best Seller</div>
                )}
                <Image
                    src={props.image.src}
                    alt={props.image.alt}
                    layout="fill"
                    objectFit="cover"
                    loader={({src}) => `${src}`}
                />
                <button
                    className="btn-primary"
                    onClick={() =>
                        dispatch(
                            add({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                                image: props.image.src,
                            })
                        )
                    }
                >
                    Add to cart
                </button>
            </div>
            <div className={styles.info}>
                <div className={styles.category}>
                    <Link href="/" passHref>
                        <a>{props.category}</a>
                    </Link>
                </div>
                <div className={styles.product}>
                    <Link href="/" passHref>
                        <a>{props.name}</a>
                    </Link>
                </div>
                <div className={styles.price}>${props.price}</div>
            </div>
        </div>
    );
};

export default ProductsCard;
