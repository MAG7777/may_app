// import { useState } from "react";
// import { Modal } from "./Modal";
// import "./Modal.css";

// export const ModalPage = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const toggleModal = () => setIsModalOpen(!isModalOpen);

//     return (
//         <div className="modal-page">
//             <button className="open-button" onClick={toggleModal}>Modal window</button>
//             {
//                 isModalOpen && (
//                     < Modal onClose={toggleModal}>
//                         <h2>Header of modal window</h2>
//                         <p>Text of modal window</p>
//                     </Modal>
//                 )
//             }
//         </div >

//     );

// };

////-------- FINAL VERSION ----- //////

import { useState } from "react";
import { Modal } from "./Modal";
import "./Modal.css";

type ModalId = null | number;

export const ModalPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<ModalId>(null);

    const handleModalToggle = (modalNumber: number | null) =>
        setIsModalOpen(isModalOpen === modalNumber ? null : modalNumber);


    const renderModal = (modalId: number) =>
        isModalOpen === modalId && (
            <Modal onClose={() => handleModalToggle(modalId)}>
                <h2>Заголовок модального окна {modalId}</h2>
                <p>Это текст модального окна</p>
            </Modal>
        );

    return (
        <div className="modal-page">
            {[1, 2, 3].map((id) => (
                <button key={id} className="open-button" onClick={() => handleModalToggle(id)}>
                    Открыть модальное окно {id}
                </button>
            ))}

            {renderModal(1)}
            {renderModal(2)}
            {renderModal(3)}
        </div>
    );
};