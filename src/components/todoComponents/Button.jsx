export function Button (props) {
    const { children, className, checked, onClick, disabled } = props;
    return <button className={`px-6 py-2 rounded-md text-black text-sm border-none outline-none ${className}`}
                   style={{ textDecoration: checked ? 'line-through' : 'initial' }}
                   onClick={onClick}
                   disabled={disabled}>
        {children}
    </button>
}