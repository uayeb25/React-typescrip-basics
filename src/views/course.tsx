import React from "react";

import Header from "../components/header";
import Card from "../components/card";

import {information_service} from "../fakeservices/information";


const Course: React.FC = () => (

<div>
  <Header title="POO" show_button={false} />  
  <Card
    open={true}
    title={information_service[0].title}
    description={information_service[0].description}
    question={information_service[0].pregunta}
    show_second_btn
    label_main_btn={information_service[0].label_main_btn}
  />

  <Card
    open={false}
    title={information_service[1].title}
    description={information_service[1].description}        
    label_main_btn={information_service[1].label_main_btn}
  />  
  
</div>


);

export default Course;