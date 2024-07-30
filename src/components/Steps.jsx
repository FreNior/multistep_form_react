import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai'
import { FiSend, FiCheckCircle } from 'react-icons/fi'
import './Steps.css'

// eslint-disable-next-line react/prop-types
const Steps = ({ currentStep }) => {
  return (
    <div className='steps'>
        <div className="step active">
            <AiOutlineUser />
            <p>Identificação</p>
        </div>

        <div className= {`step ${currentStep >=1 ? "active" : ""}`}>
            <AiOutlineStar />
            <p>Avaliação</p>
        </div>

        <div className={`step ${currentStep >=2 ? "active" : ""}`}>
            <FiSend />
            <p>Envio</p>
        </div>

        <div className={`step ${currentStep >=3 ? "active" : ""}`}>
            <FiCheckCircle />
            <p>Conclusão</p>
        </div>
    </div>
  )
}

export default Steps