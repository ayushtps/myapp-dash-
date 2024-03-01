import React from 'react'
import '../asset/style/component/MainDashHOC.css'
import SideBar from '../layout/SideBar'

export const MainDashHOC = (Component) => {
  const NewComponent = () => {
    return <>
      <section>
        <div className="main-dash">
          <SideBar />
          <div className="dash-content">
            <div className="dash-container">
              <Component />
            </div>
          </div>
        </div>
      </section>
    </>
  }
  return NewComponent
}