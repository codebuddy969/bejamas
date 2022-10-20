import {useContext, useState} from "react";
import Image from "next/image";

import Checkbox from "@/components/controls/checkbox";

import styles from "@/styles/components/filters.module.scss";

import {iServerData} from "@/utilities/interfaces/serverData";
import {IFilterParams} from "@/utilities/interfaces/filterParams.interface";

import {ServerDataContext} from "@/utilities/contexts/serverData";

import {useSelector, useDispatch} from "react-redux";
import {RootState} from "@/utilities/redux/store";
import {
    api_categories,
    api_range,
} from "@/utilities/redux/slices/apiRequest.slice";

import {useGetProductsByCategoryQuery} from "@/utilities/redux/services/api.service";

const Filters = ({setFilterVisibility, visible}: IFilterParams) => {
    const value = useContext(ServerDataContext) as iServerData;

    const [categoriesID, setCategoriesID] = useState("");

    const categories = value?.data?.categories || [];

    const dispatch = useDispatch();

    const request = useSelector((state: RootState) => state.apiRequest);

    // const { data: otherName, error, isLoading } = useGetProductsByCategoryQuery(categoriesID);
    // dispatch(api_categories({name: "test", delete: false}))

    return (
        <div className={`${styles.container} ${visible && styles["active"]}`}>
            <div className={styles.filters}>
                <button
                    className={styles.close}
                    onClick={() => setFilterVisibility()}
                >
                    <span className={styles.image}>
                        <Image
                            src="/cross.svg"
                            alt="cross icon"
                            layout="fill"
                            objectFit="contain"
                        />
                    </span>
                </button>
                <h4>Category</h4>
                <div className={styles.category}>
                    {categories.map((category) => {
                        return (
                            <Checkbox
                                key={category.name}
                                id={category.name}
                                text={category.name}
                                click={(e: MouseEvent, id: string) => {
                                    dispatch(
                                        api_categories({
                                            id,
                                            status: (
                                                e.target as HTMLInputElement
                                            ).checked,
                                        })
                                    );
                                }}
                            />
                        );
                    })}
                </div>

                <h4>Price range</h4>
                <div className={styles.price}>
                    <Checkbox
                        id="cheap"
                        text="Lower than $20"
                        click={(e: MouseEvent, id: string) => {
                            dispatch(
                                api_range({
                                    id,
                                    status: (e.target as HTMLInputElement)
                                        .checked,
                                })
                            );
                        }}
                    />
                    <Checkbox
                        id="low"
                        text="$20 - $100"
                        click={(e: MouseEvent, id: string) => {
                            dispatch(
                                api_range({
                                    id,
                                    status: (e.target as HTMLInputElement)
                                        .checked,
                                })
                            );
                        }}
                    />
                    <Checkbox
                        id="high"
                        text="$100 - $200"
                        click={(e: MouseEvent, id: string) => {
                            dispatch(
                                api_range({
                                    id,
                                    status: (e.target as HTMLInputElement)
                                        .checked,
                                })
                            );
                        }}
                    />
                    <Checkbox
                        id="expensive"
                        text="More than $200"
                        click={(e: MouseEvent, id: string) => {
                            dispatch(
                                api_range({
                                    id,
                                    status: (e.target as HTMLInputElement)
                                        .checked,
                                })
                            );
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Filters;
