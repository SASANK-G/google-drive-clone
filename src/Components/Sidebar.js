import React from 'react'
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import MobileScreenShareTwoToneIcon from '@material-ui/icons/MobileScreenShareTwoTone';
import DevicesOutlinedIcon from '@material-ui/icons/DevicesOutlined';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CloudQueueOutlinedIcon from '@material-ui/icons/CloudQueueOutlined';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_btn">
        <button>
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
  )
}

export default Sidebar
