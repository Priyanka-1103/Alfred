import React from "react"
import './HomeService.css'
// import { useNavigate } from "react-router-dom";
// import FullButton from "../../Buttons/FullButton";

export default function HomeService(){
//     const navigate = useNavigate();
//   const goToPayment = () => {
//     navigate('/payment');
//   }
   return(
    <div className="homeSer">
      <h1> Home Improvement Services</h1>
      <section class="HomeArticle">

        <article>
        <div class="article-wrapper">
            <figure>
             <img src={require("../../../assets/img/services/interior.jpg")} alt="" />
            </figure>
            <div class="article-body">
                <h2>Interior Design and Decoration</h2>
            </div>
            {/* <div style={{ maxWidth: "120px", margin: "20px auto 20px auto" }} onClick={goToPayment}>
                <FullButton title="Book now" />
            </div> */}
        </div>
        </article>

        <article>
        <div class="article-wrapper">
            <figure>
             <img src={require("../../../assets/img/services/painthand.jpg")} alt="" />
            </figure>
            <div class="article-body">
                <h2>Home Painting</h2>
            </div>
        </div>
        </article>

        <article>
        <div class="article-wrapper">
            <figure>
             <img src={require("../../../assets/svg/Services/ceiling.png")} alt="" />
            </figure>
            <div class="article-body">
                <h2>False Ceiling and POP Work</h2>
            </div>
        </div>
        </article>

        <article>
        <div class="article-wrapper">
            <figure>
             <img src={require("../../../assets/img/services/smarthome.jpg")} alt="" />
            </figure>
            <div class="article-body">
                <h2>Home Automation</h2>
            </div>
        </div>
        </article>

        <article>
        <div class="article-wrapper">
            <figure>
             <img src={require("../../../assets/img/services/waterproof.jpg")} alt="" />
            </figure>
            <div class="article-body">
                <h2>Water Proofing</h2>
            </div>
        </div>
        </article>

  </section>
</div>

   )
}