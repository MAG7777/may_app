import type { ReactNode } from "react";
import "./Modal.css";

type ModalProps = {
    children: ReactNode;
    onClose: () => void
};

export const Modal = ({ children, onClose }: ModalProps) => {
    return (
        <div className="overlay">
            <div className="modal">
                <button onClick={onClose} className="close-button">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};