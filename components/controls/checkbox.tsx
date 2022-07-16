import styles from '@/styles/components/controls/checkbox.module.scss';

interface iCheckbox {
    id: string;
    text: string;
}

const Checkbox = (props:iCheckbox) => {
    return (
        <div className={styles.checkbox}>
            <label htmlFor={props.id}>
                <input id={props.id} type="checkbox" />
                <span></span>
                <span>{props.text}</span>
            </label>
        </div>
    )
}
  
export default Checkbox;