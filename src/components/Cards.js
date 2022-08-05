import { useState } from "react";

const Cards = ({datas}) => {


    //jsx elements and states
    const [breakStudy, setBreakStudy] = useState(false);
    const workTime = document.getElementById('workTime');
    const workLap = document.getElementById('lapCounter');
    const breakTime = document.getElementById('breakTime');
    const breathingTime = document.getElementById('breathingTime');
    const wideBreakTime = document.getElementById('wideBreakTime');
    const progressBar = document.getElementById('progressBar');
    let minute = 25;
    let second = 0;
    let turnCounter = 0;
    let workLapCounter = 0;


    // prevent default interval start
    let interv = setInterval(updateWorkTimer, 0);
    clearInterval(interv);


    //start work interval
    const startWork = () => {

        interv = setInterval(updateWorkTimer, 10);
        
    }



    // work timer
    //25 min
    function updateWorkTimer() {

        progressBar.style.width = `${((minute * 60) + second) / ((25 * 60) + 60) * 100}%`;
        minute = second <= 0 ? minute-=1: minute;
        second = second <= 0 ? second = 59 : second-=1;

        let originalMinute = minute;
        let originalSecond = second;
        minute = minute < 10 ? minute = `0${minute}`:minute;
        second = second < 10 ? second = `0${second}`:second;

        workTime.innerText = `${minute} : ${second}`;
        minute = originalMinute;
        second = originalSecond;

        if(minute === 0 && second === 0) {

            workLapCounter+=1;
            workLap.innerText = workLapCounter;

            if(workLapCounter !== 0 && workLapCounter % 5 === 0){

                //switch to wide break

                clearInterval(interv);
                minute = 15;
                second = 0;
                document.getElementById('modalSubmit').click();
                interv = setInterval(wideBreakTimer,50);

            }

            else{

                //switch to breathing timer

                setBreakStudy(true);
                clearInterval(interv);
                second = 30;
                turnCounter++;
                workTime.innerText = `25 : 00`;
                document.getElementById('modalSubmit').click();
                interv = setInterval(breathingTimer,500);

                

            }

         
        } 

        
      }

     //break counter
      //5min
     function updateBreakTimer() {

        document.getElementById('breakBar').firstChild.style.width = `${((minute * 60) + second) / ((5 * 60) + 60) * 100}%`;


        minute = second <= 0 ? minute-=1: minute;
        second = second <= 0 ? second = 59 : second-=1;

        let originalMinute = minute;
        let originalSecond = second;
        minute = minute < 10 ? minute = `0${minute}`:minute;
        second = second < 10 ? second = `0${second}`:second;

        breakTime.innerText = `${minute} : ${second}`;
        minute = originalMinute;
        second = originalSecond;

        if(minute === 0 && second === 0){

            //switch to breathingTimer
            setBreakStudy(false);
            clearInterval(interv);
            second = 30;
            turnCounter--;
            breakTime.innerText = `5 : 00`;
            document.getElementById('modalSubmit').click();
            interv = setInterval(breathingTimer,500);

        }

     
      }


    //breathing time counter 
    //30 sec
    function breathingTimer() {

        second--;
        breathingTime.innerText = second < 10 ? `0${second}` : second;

        if (second === 0 && turnCounter === 1){

            //switch to updateBreakTimer
            clearInterval(interv);
            minute = 5;
            breathingTime.innerText = 30;
            document.getElementById('close').click();
            interv = setInterval(updateBreakTimer,10);

        }  

        else if(second === 0 && turnCounter === 0){

            //switch to workTimer
            clearInterval(interv);
            minute = 25;
            breathingTime.innerText = 30;
            document.getElementById('close').click();
            interv = setInterval(updateWorkTimer,10);

        }



    }


    // wide break
    //15 min
    function wideBreakTimer() {

        document.getElementById('wideBar').firstChild.style.width = `${((minute * 60) + second)  / ((15 * 60) + 60) * 100}%`;

        minute = second <= 0 ? minute-=1: minute;
        second = second <= 0 ? second = 59 : second-=1;

        let originalMinute = minute;
        let originalSecond = second;
        minute = minute < 10 ? minute = `0${minute}`:minute;
        second = second < 10 ? second = `0${second}`:second;

        wideBreakTime.innerText = `${minute} : ${second}`;
        breathingTime.innerText = `${minute} : ${second}`;
        minute = originalMinute;
        second = originalSecond;

        if(minute === 0 && second === 0){

            //switch to workTimer
            clearInterval(interv);
            minute = 25;
            turnCounter = 0;
            workTime.innerText = `25 : 00`;
            document.getElementById('close').click();
            interv = setInterval(updateWorkTimer,50);

        }

     
      }


    return ( 

        <div className="card-Container">

                <div className="card">

                    <h5>Project Name</h5>
                    <h6>Task Name</h6>

                    <div className="timers">

                                <div className="timer-container">

                                <button id="workStart" onClick={() => startWork() }>Start Work </button>

                                <h6 id="lap">Lap</h6>
                                <div id="lapCounter">0</div>

                                </div>

                        <div className="counters" id="work">
                            <div id="workBar" className="bar">
                            <div id="progressBar">

                        <div id="progressInside">

                        </div>

                        </div>
                            </div>
                            <div id="workTime">25 : 00</div>

                            </div> 

                        <div className="counters" id="break">
                        <div id="breakBar" className="bar">
                        <div id="progressBar">

                        <div id="progressInside">

                        </div>

                        </div>
                        </div>

                        <div id="breakTime">5 : 00</div>

                        </div>
                        <div className="counters" id="bigBreak">
                        <div id="wideBar" className="bar">
                        <div id="progressBar">

                        <div id="progressInside">

                        </div>

                        </div>
                        </div>
                        <div id="wideBreakTime">15 : 00</div>


                        </div>

                    </div>

                </div>
                
                {/* modal */}
                <button type="button" id="modalSubmit" style={{"display" : "none"}} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-body">
                    <div id="breathingTime">30</div>
                    {breakStudy && <p className="transition">till your 5 minute break</p>}
                    {!breakStudy && <p className="transition">till your next working session</p>}

                        
                    </div>
                    <button type="button" style={{"display" : "none"}} id="close" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                    </div>
                </div>
                </div>

        </div>
     );
}
 
export default Cards;