import '../css/popup.css';
import x from '../Assets/x.png';

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-x' onClick={() => props.setTrigger(false)}><img src={x} alt="um x para sair" /></button>

                <h1>Novo Contato</h1>

                <input className='input-sign' type="text" placeholder='Nome' />
                <br></br>
                <input className='input-sign' type="text" placeholder='Telefone' />
                <br></br>
                <input className='input-sign' type="text" placeholder='Email' />


                <button className='close-btn' onClick={() => props.setTrigger(false)}>Cadastrar</button>
                {props.Children}
            </div>
        </div>
    ) : null;
}

export default Popup;