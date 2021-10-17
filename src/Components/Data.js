import React from 'react'
import './Data.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ListIcon from '@material-ui/icons/List';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


const Data = () => {
  return (
    <div className="data">
      <div className="data__header">
          <div className="data__headerLeft">
            <p>My Drive</p>
            <ArrowDropDownIcon/>
            
          </div>
          <div className="data__headerRight">
            <ListIcon/>
            <InfoOutlinedIcon/>
          </div>

      </div>
      <div className="data__content">
        <div className="data_grid">
          <div className="data__file">
            
            <InsertDriveFileOutlinedIcon/>
            <p>File Name</p>
            
          </div>

          <div className="data__file">
            <InsertDriveFileOutlinedIcon/>
            <p>File Name</p>
          </div>

          <div className="data__file">
            <InsertDriveFileOutlinedIcon/>
            <p>File Name</p>
          </div>
        </div>

      </div>

      <div className="data_list">
        <div className="detailsRow">
          <p><b>Name <ArrowDownwardIcon/></b></p>
          <p><b>Owner </b></p>
          <p><b>Last Modified</b></p>
          <p><b>File Size</b></p>
        </div>

         <div className="detailsRow">
          <p><b>Name <InsertDriveFileOutlinedIcon/></b></p>
          <p><b>Me</b></p>
          <p><b>Yesterday</b></p>
          <p><b>1GB</b></p>
        </div>


      </div>
      
    </div>
  )
}

export default Data

