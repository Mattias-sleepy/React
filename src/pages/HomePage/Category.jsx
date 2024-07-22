import style from "./Category.module.css"
export function Category(props) {
    return (
        <>
            <div className={style.category}>{props.text}</div>
        </>
    )
}