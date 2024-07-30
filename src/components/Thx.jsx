/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Thx.css'

import { 
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
 } from 'react-icons/bs'

 const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  verySatisfied: <BsFillEmojiHeartEyesFill />
 }

export const Thx = ({data}) => {
  return (
    <div className='thanks-container'>
        <h2> Falta Pouco </h2>
        <p> Sua opinião é muito importante! Em breve você receberá um cupom de 10% de desconto para a sua proxima compra</p>
        <p> Para concluir a sua avaliação, clique no botao &quot;Enviar&quot; abaixo </p>
        <h3> Muito obrigado por avaliar o nosso produto, {data.name}!, aqui está um resumo da sua avaliação: </h3>
        <p className="review-data">
          <span>Satisfação com o produto: </span>
          {emojiData[data.review]}
        </p>

        <p className="review-data">
          <span> Comentário sobre o produto: </span>
          {data.comment}
        </p>
    </div>
  )
}

export default Thx