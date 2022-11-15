import React from "react";
import "../css/CreateTodoButton.css"

function CreateTodoButton ({setOpenModal, openModal}){
    //estoy intentando que cuando el boton reciba un 2do click cierre el modal, para eso cree el IF, que verifica si mi 'openModal' es = a false, si es asi, lo setea en true(abre el modal) y de lo contrario que lo setee en false(cierre el modal) 
    const onClickButton = () => setOpenModal(!openModal)
    
    return(
        <button 
        className='CreateTodoButton'
        onClick={onClickButton}
        >
        +
        </button>
    );
};

export { CreateTodoButton };