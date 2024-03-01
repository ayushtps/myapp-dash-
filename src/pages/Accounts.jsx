import React from 'react'
import { MainDashHOC } from '../component/MainDashHOC'
import Header from '../layout/Header'

function Accounts() {
  return (
    <div className="dash-chart-container">
        <div className="dash-header">
          <Header />
        </div>
        <div className="heading">
          <div>Account Page</div>
        </div>
    </div>
  )
}

export default MainDashHOC(Accounts)