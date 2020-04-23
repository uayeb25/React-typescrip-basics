import React from "react";

interface IHeaderProps{
    title: string,
    show_button: boolean
}

const Header: React.FC<IHeaderProps> = ({title,show_button}) => (

<header>
<h1 id="header-title" >{title}</h1>
  <div className={ show_button ? "button-header" : "button-header hide-ele"} >
      <button className="profile-btn" > Volver a preguntar </button>
  </div>        
</header>


);

export default Header;
