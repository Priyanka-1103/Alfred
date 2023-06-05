import React from "react"
import './Repair.css'

export default function Repair(){
   return(
    <div className="repairSer">
      <h1> Repairs and Maintenance</h1>
      <section class="RepairArticle">

        <article>
        <div class="article-wrapper">
            <figure>
             <img src={require("../../../assets/img/services/plumber.jpg")} alt="" />
            </figure>
            <div class="article-body">
                <h2>Plumbing Services</h2>
            </div>
        </div>
        </article>

        <article>
        <div class="article-wrapper">
            <figure>
             <img src={require("../../../assets/img/services/electrician.jpg")} alt="" />
            </figure>
            <div class="article-body">
                <h2>Electrical Services</h2>
            </div>
        </div>
        </article>

        <article>
        <div class="article-wrapper">
            <figure>
             <img src={require("../../../assets/img/services/ac.jfif")} alt="" />
            </figure>
            <div class="article-body">
                <h2>AC Services and Repair</h2>
            </div>
        </div>
        </article>

        <article>
        <div class="article-wrapper">
            <figure>
             <img src={require("../../../assets/img/services/repair-tools.jpg")} alt="" />
            </figure>
            <div class="article-body">
                <h2>Home Appliance Repair</h2>
            </div>
        </div>
        </article>

        <article>
        <div class="article-wrapper">
            <figure>
             <img src={require("../../../assets/img/services/carpenter.jpg")} alt="" />
            </figure>
            <div class="article-body">
                <h2>Carpentry Services</h2>
            </div>
        </div>
        </article>

        <article>
        <div class="article-wrapper">
            <figure>
             <img src={require("../../../assets/img/services/laptop.jpg")} alt="" />
            </figure>
            <div class="article-body">
                <h2>Computer and Laptop Repair</h2>
            </div>
        </div>
        </article>

  </section>
</div>

   )
}