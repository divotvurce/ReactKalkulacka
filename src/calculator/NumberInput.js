function NumberInput({ name, label, value, onChange }) {
    return (
        <label htmlFor={name}>
            {label}
            <input onChange={onChange}
                id={name}
                value={value}
                type="number"
                name={name}
                step="any"
                required
            />
        </label>
    );
}

export default NumberInput;