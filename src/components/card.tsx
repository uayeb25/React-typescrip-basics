import React from "react";

interface ICardProps{
  open: boolean
  title: string
  description: string
  question?: string
  label_main_btn: string
  show_second_btn?: boolean
}

const Card: React.FC<ICardProps> = ({title,description,question,label_main_btn,show_second_btn,open}) => (

    <section className={open?"message-area":"message-area hide-ele"} >
        <div className="card">            
            <div className="container">
                <h3><b>{title}</b></h3>
                <p className="main-message" >{description}</p>

                {(question) && (
                  <p className="main-question" >{question}</p>
                )}
                
                <div className="card-buttons">

                  { (show_second_btn) && (
                    <button className="second-btn" >No, gracias</button>
                  ) }

                    <button className="profile-btn" >{label_main_btn}</button>

                </div>                
            </div>
          </div>
    </section>
)

export default Card;