import React, { useEffect, useState } from 'react'
import './Data.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ListIcon from '@material-ui/icons/List';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { db } from '../firebase';


const Data = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    db.collection("myfiles").onSnapshot(snapshot=>{
      // console.log("chi",snapshot);
      console.log("qqq",snapshot.docs);
      // console.log("ppp",snapshot.docs[0]._delegate);
      // console.log("uuu",snapshot.docs[0]._delegate._document.data.value.mapValue.fields);
      // console.log("uuu",snapshot.docs[0]._delegate._document.data.value.mapValue.fields.filename.stringValue);
      setFiles(snapshot.docs.map(doc=>({   
        id:doc.id,
        data:doc.data()
      })))
      // console.log("xxx", setFiles.id);
    })
  }, [])

  function formatBytes(bytes, decimals = 2){
    if(bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes)/Math.log(k));

    return parseFloat((bytes/ Math.pow(k, i)).toFixed(dm)) + '' + sizes[i];
      
    }



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
          {
            
            files.map((file)=>{
              console.log("ehe",files);
              return <div className="data__file">
                        <InsertDriveFileOutlinedIcon/>
                        <p>{file.data.filename}</p>
                      </div>
            })
          }
          
        </div>

      </div>

      <div className="data_list">
        <div className="detailsRow">
          <p><b>Name <ArrowDownwardIcon/></b></p>
          <p><b>Owner </b></p>
          <p><b>Last Modified</b></p>
          <p><b>File Size</b></p>
        </div>

        {
          files.map((file)=>{
            return <div className="detailsRow">
                      <p>
                        <a href={file.data.fileURL} target="_blank">
                        <InsertDriveFileOutlinedIcon/>{file.data.filename}</a></p>
                      <p>Me</p>
                      <p>{new Date(file.data.timestamp?.seconds*1000).toUTCString()}</p>
                      <p>{formatBytes(file.data.size)}</p>
                    </div>
          })
        }

         


      </div>
      
    </div>
  )
}

export default Data

