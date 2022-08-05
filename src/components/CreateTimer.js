import {useState} from 'react';
const CreateTimer = () => {

    const [projectTitle, setProjectTitle] = useState('');
    const [projectName, setProjectName] = useState('');
    const [projectArray, setProjectArray] = useState('');


    const handleClick = (title, name) => {

        let obj = [title, name];

        setProjectArray( projectArray => [...projectArray, obj]);
        console.log(projectArray[0]);

    }

    return (  

        <div className="creating">


{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

<div id="addTimer" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <svg style={{"margin" : "18px"}} xmlns="http://www.w3.org/2000/svg" aria-label="Add" viewBox="0 0 24 24" className="StyledIcon-ofa7kd-0 eCLdHZ"><path fill="none" stroke="#fff" strokeWidth="2" d="M12,22 L12,2 M2,12 L22,12"/></svg>
        </div>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      {/* <div class="modal-header">
        {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
        {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
      {/* </div> */}
      <div className="modal-body">
        <div className="timerForm">

            <input type="text" id="projectName" placeholder="project name" value={projectName} onChange={ (e) => setProjectName(e.target.value)}/>
            <input type="text" id="projectTitle" placeholder="project title" value={projectTitle} onChange={ (e) => setProjectTitle(e.target.value)}/>
            <button id="createProject" onClick={() => handleClick(projectTitle,projectName)}>Create Project</button>



        </div>
      </div>
      {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>


        

            </div>

        
    );
}
 
export default CreateTimer;