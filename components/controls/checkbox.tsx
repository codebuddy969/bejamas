import styles from '@/styles/components/controls/checkbox.module.scss';

interface iCheckbox {
    id: string;
    text: string;
    click?: Function
}

const Checkbox = ({id, text, click}:iCheckbox) => {
    return (
        <div className={styles.checkbox}>
            <label htmlFor={id}>
                <input id={id} type="checkbox" onClick={e => click && click(e, id)} />
                <span></span>
                <span>{text}</span>
            </label>
        </div>
    )
}
  
export default Checkbox;