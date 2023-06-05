import React from "react"
import './Cleaning.css'

export default function Cleaning(){
   return(
    <div className="cleaningSer">
      <h1> Cleaning Services</h1>
      <section class="CleanArticle">

        <article>
        <div class="article-wrapper">
            <figure>
             <img src={require("../../../assets/img/services/housecleaning.jpg")} alt="" />
            </figure>
            <div class="article-body">
                <h2>Regular House Cleaning</h2>
            </div>
            {/* <div style={{ maxWidth: "120px", margin: "20px auto 20px auto" }} onClick={goToPayment}>
                <FullButton title="Book now" />
            </div> */}
        </div>
        </article>

        <article>
        <div class="article-wrapper">
            <figure>
             <img src={require("../../../assets/img/services/deepCleaning.jpg")} alt="" />
            </figure>
            <div class="article-body">
                <h2>Deep Cleaning</h2>
            </div>
        </div>
        </article>

        <article>
        <div class="article-wrapper">
            <figure>
             <img src={require("../../../assets/img/services/kitchenCleaning.jpg")} alt="" />
            </figure>
            <div class="article-body">
                <h2>Kitchen Cleaning</h2>
            </div>
        </div>
        </article>

        <article>
        <div class="article-wrapper">
            <figure>
             <img src={require("../../../assets/img/services/bathroomCleaning.jpg")} alt="" />
            </figure>
            <div class="article-body">
                <h2>Bathroom Cleaning</h2>
            </div>
        </div>
        </article>

        <article>
        <div class="article-wrapper">
            <figure>
             <img src={require("../../../assets/img/services/sofaCleaning.jpg")} alt="" />
            </figure>
            <div class="article-body">
                <h2>Sofa Cleaning</h2>
            </div>
        </div>
        </article>

        <article>
        <div class="article-wrapper">
            <figure>
             <img src={require("../../../assets/img/services/balconyCleaning.jpg")} alt="" />
            </figure>
            <div class="article-body">
                <h2>Balcony Cleaning</h2>
            </div>
        </div>
        </article>

  </section>
</div>

   )
}