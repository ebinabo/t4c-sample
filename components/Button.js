export default function Button({ type, children, ...rest }) {
    return (
        <button className={type} {...rest}>{children}</button>
    )
}
