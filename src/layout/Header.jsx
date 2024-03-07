import React, { useEffect, useState } from 'react'
import '../asset/style/layout/Header.css'

function Header() {
    useEffect(() => {
        currenttimeDate()
    }, [])

    const [date, setdate] = useState('')


    const currenttimeDate = () => {
        var currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }).split(',')
        let fainal = `${currentDate[0]},${currentDate[1]}${currentDate[2]}`
        setdate(fainal)
        // let day=currentDate[1]
        // let month=currentDate[2]
        // let year=currentDate[3]
        // let formateDate=`${day},${month},${year}`
        // console.log(formateDate);

        // var dayOfWeek = currentDate.getDay();
        // var dayOfMonth = currentDate.getDate();
        // var month = currentDate.getMonth();
        // var year = currentDate.getFullYear();
        // var formattedDate = daysOfWeek[dayOfWeek] + ', ' + dayOfMonth + ' ' + months[month] + ' ' + year;
        // setdate(formattedDate)
    }
    return (
        <>
            <div className="header-container">
                <div className="left-header">
                    <p className='currentpage'>{window.location.pathname.split('/')[1]}</p>
                    <p className='currentdate'>{date}</p>
                </div>
                <div className="right-header">
                    <p><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 01-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 01-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 00-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 00-4.61-37.66zM256 480a80.06 80.06 0 0070.44-42.13 4 4 0 00-3.54-5.87H189.12a4 4 0 00-3.55 5.87A80.06 80.06 0 00256 480z"></path></svg></p>
                    <p>Username</p>
                </div>
            </div>
        </>
    )
}

export default Header