import React, { useEffect, useState } from 'react'
import { MainDashHOC } from '../component/MainDashHOC'
import '../asset/style/pages/Dashboard.css'
import Header from '../layout/Header'
import Charts from '../component/Charts'
import { useDispatch, useSelector } from 'react-redux'
import { ResentUser } from '../redux/slices/ResentActivitySlice'
import moment from 'moment'


function Dashboard() {

  const dispatch = useDispatch()
  const state = useSelector(state => state.recent.data)
  const state1 = useSelector(state => state?.Users.data)
  const lastUpdate = state?.slice(-10).reverse();
  useEffect(() => {
    dispatch(ResentUser())
  }, [])


  return (
    <>
      <div className="dash-chart-container">
        <div className="dash-header">
          <Header />
        </div>
        <div className="dashboard-page">
          <div className="left-page">
            <div className="box-section">
              <div className="boxes first">
                <div className="content-view">
                  <p>Active</p>
                  <h3>18</h3>
                </div>
                <div className="content-logo">
                  <p><svg style={{ color: "rgb(255, 195, 136)" }} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg></p>
                </div>
              </div>
              <div className="boxes second">
                <div className="content-view">
                  <p>Active</p>
                  <h3>18</h3>
                </div>
                <div className="content-logo">
                  <p><svg style={{ color: "rgb(145, 217, 217)" }} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg></p>
                </div>
              </div>
              <div className="boxes third">
                <div className="content-view">
                  <p>Active</p>
                  <h3>18</h3>
                </div>
                <div className="content-logo">
                  <p><svg style={{ color: "rgb(132, 198, 243)" }} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg></p>
                </div>
              </div>
              <div className="boxes fourth">
                <div className="content-view">
                  <p>Active</p>
                  <h3>18</h3>
                </div>
                <div className="content-logo">
                  <p><svg style={{ color: "rgb(197, 168, 255)" }} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg></p>
                </div>
              </div>
            </div>
            <div className="graphs">
              <Charts />
            </div>
          </div>
          <div className="right-page">
            <div className="reacent-main">
              <h3 className='text-left fs-5'>Recent Activities</h3>
              <div className="recent-activity-container">
                {
                  lastUpdate?.map((x, i) => {
                    return <div className="activity-view" key={i}>
                      <div className="inner">
                        <div className="rounded">
                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" color="#000" height="15" width="15" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(0, 0, 0);" }}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor"></path></svg>
                        </div>
                        <p>{x.title}</p>
                      </div>
                      <p className='currentdate1'>{new Date(x.ts * 1000).toLocaleString()}</p>
                    </div>
                  })
                }
              </div>
            </div>
            <div className="reacent-main">
              <h3 className='text-left fs-5'>New User</h3>
              <div className="recent-activity-container1">
                {
                  state1?.map((x, i) => {
                    console.log(x);
                    return <div className="activity-view" key={i}>
                      <div className="inner">
                        <div className="rounded">
                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" color="#000" height="15" width="15" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(0, 0, 0);" }}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor"></path></svg>
                        </div>
                        <p>{x.email}</p>
                      </div>
                      <p className='currentdate1'>{new Date(x.created_at * 1000).toLocaleString()}</p>
                    </div>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainDashHOC(Dashboard)