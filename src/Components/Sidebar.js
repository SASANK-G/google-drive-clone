import React, { useState } from 'react'
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import MobileScreenShareTwoToneIcon from '@material-ui/icons/MobileScreenShareTwoTone';
import DevicesOutlinedIcon from '@material-ui/icons/DevicesOutlined';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CloudQueueOutlinedIcon from '@material-ui/icons/CloudQueueOutlined';
import { Modal } from '@material-ui/core';

import firebase from 'firebase'
import { db, storage } from '../firebase'




function Sidebar() {

  const [Open, setOpen] = useState(false);
  const [Uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);
 
 
  const handleClose=()=>{
    setOpen(false);
  }

  const handleOpen=()=>{
    setOpen(true);
  }

  const handleChange=(e)=>{
    if(e.target.files[0])
    {
      setFile(e.target.files[0])
    }
  }

  const handleUpload=(event)=>{
    //console.log(e.target.files[0])
    event.preventDefault();
    setUploading(true);

    storage.ref(`files/${file.name}`).put(file).then(snapshot=>{
      //console.log(snapshot)
      storage.ref("files").child(file.name).getDownloadURL().then(url=>{
        db.collection("myfiles").add({
          timestamp:firebase.firestore.FieldValue.serverTimestamp(),
          filename:file.name,
          fileURL:url,
          size:snapshot._delegate.bytesTransferred
        })
        setUploading(false);
        setFile(null);
        setOpen(false);

      })
    });
  }


  return (
    <>
    <Modal open={Open} onClose={handleClose}>
      <div className="modal__pop">
        <form>
          <div className="modalHeading">
            <h3>Select File you want to upload</h3>
          </div>
          <div className="modalBody">
            {
              Uploading?(<p className="uploading">Uploading</p>):(
                <>
                  <input type="file" onChange={handleChange}></input>
                  <input type="submit" className="post_submit" onClick={handleUpload}></input>
                </>
              )
            }
            
          </div>
        </form>
      </div>

    </Modal>

    <div className="sidebar">
      <div className="sidebar_btn">
        <button onClick={handleOpen}>
          <span>
            <AddIcon/>
          </span>
          <span>
            New
          </span>
        </button>
      </div>
      <div className="sidebar__options">
        <div className="sidebar_option sidebar_option-Active">
          <MobileScreenShareTwoToneIcon/>
          <span>My Drive</span>
        </div>

        <div className="sidebar_option">
          <DevicesOutlinedIcon/>
          <span>Computers</span>
        </div>

        <div className="sidebar_option">
          <PeopleAltTwoToneIcon/>
          <span>Shared with me</span>
        </div>

        <div className="sidebar_option">
          <QueryBuilderOutlinedIcon/>
          <span>Recent</span>
        </div>

        <div className="sidebar_option">
          <StarBorderOutlinedIcon/>
          <span>Starred</span>
        </div>

        <div className="sidebar_option">
          <DeleteOutlineOutlinedIcon/>
          <span>Trash</span>
        </div>
        
      </div>

        <hr/>
      <div className="sidebar__options">
        <div className="sidebar_option">
          <CloudQueueOutlinedIcon/>
          <span>Storage</span>
        </div>

        <div className="progress_bar">
          <progress size="tiny" value="40" max="100"/>
          <span> 6.45 GB of 15GB used</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sidebar
