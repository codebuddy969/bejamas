import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/additional.module.scss";

const Additional = () => {
    return (
        <div className={styles.additional}>
            <h2>People also buy</h2>
            <div className={styles.products}>
                <Link href="/product" passHref>
                    <a>
                        <Image
                            src="/product.png"
                            alt="Logo of a bejamas company"
                            layout="fill"
                            objectFit="cover"
                        />
                    </a>
                </Link>
                <Link href="/product" passHref>
                    <a>
                        <Image
                            src="/product.png"
                            alt="Logo of a bejamas company"
                            layout="fill"
                            objectFit="cover"
                        />
                    </a>
                </Link>
                <Link href="/product" passHref>
                    <a>
                        <Image
                            src="/product.png"
                            alt="Logo of a bejamas company"
                            layout="fill"
                            objectFit="cover"
                        />
                    </a>
                </Link>
            </div>

            <div className={styles.details}>
                <h3>Details</h3>
                <div>Size: 1020 x 1020 pixel</div>
                <div>Size: 15 mb</div>
            </div>
        </div>
    );
};

export default Additional;
