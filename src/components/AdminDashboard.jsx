import React from 'react'
import Chart from './Chart';
import "./AdminDashboard.css";

const AdminDashboard = ({zakazivanja,vakcine}) => {

  function brojZakazivanja(){
    return zakazivanja.length;
  }

 
  return (
    <main>

<div className="main__container">
      {/* <!-- MAIN TITLE STARTS HERE --> */}

      <div className="main__title">
        {/* <img src={hello} alt="hello" /> */}
        <div className="main__greeting">
          <h1>Hello </h1>
          <p>Welcome to your admin dashboard</p>
        </div>
      </div>

      {/* <!-- MAIN TITLE ENDS HERE --> */}

 
      {/* <!-- MAIN CARDS ENDS HERE --> */}

      {/* <!-- CHARTS STARTS HERE --> */}
      <div className="charts">
        <div className="charts__left">
          <div className="charts__left__title">
            <div>
              <h1>Daily Reports</h1>
              <p>Belgrade, Serbia</p>
            </div>
            <i className="fa fa-usd" aria-hidden="true"></i>
          </div>
          <Chart zakazivanja={zakazivanja} vakcine={vakcine} />
        </div>

        <div className="charts__right">
          <div className="charts__right__title">
            <div>
              <h1>Stats Reports</h1>
              <p>Beograd, Srbija</p>
            </div>
            <i className="fa fa-usd" aria-hidden="true"></i>
          </div>

          <div className="charts__right__cards">
            <div className="card1">
              <h1>Broj zakazivanja</h1>
              <p> {brojZakazivanja()}</p>
            </div>

            <div className="card2">
              <h1>Broj vakcina</h1>
              <p>  {vakcine.length}</p>
            </div>

 

             
          </div>
        </div>
      </div>
      {/* <!-- CHARTS ENDS HERE --> */}
    </div>
  </main>
    

      
   
);
   
}

export default AdminDashboard