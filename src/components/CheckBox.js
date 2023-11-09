import './styles/checkbox.css';

export default function CheckBox({ id, status, handleStatus }) {
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                id={`flexCheckDefault-${id}`}
                checked={status ? true : false}
                onChange={() => handleStatus(id)}
            />
        </div>
    );
};
