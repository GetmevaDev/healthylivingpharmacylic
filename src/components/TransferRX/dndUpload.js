import React from 'react';
import {useDropzone} from 'react-dropzone';
import Image from "../../images/Group13.svg"

import * as classes from "./FormPrescription/formPrescription.module.scss"

function DndUpload(props) {
  const {acceptedFiles, getRootProps, open, getInputProps} = useDropzone();

  const files = acceptedFiles.map(file => (
    file.size <= 999997.44 || file.size === 999997.44 ? <li key={file.path}>
      {file.path} - {file.size} bytes
      {console.log(file.size)}
    </li> : <span>File size is too large</span>
  ));

  return (
    <div className={classes.filesInput}>
      <h4>Attach Prescription Drug Insurance Card (Optional)</h4>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>{files.length === 0 ? `Drag 'n Drop files here` : <ul>{files}</ul> }</p>
        <span>{files.length === 0 ? `Max file size: 976.56 KB. | Allowed file types: gif,jpeg,png,jpg,pdf` : <ul>{files}</ul> }</span>
        <button type="button" onClick={open}>
          <img src={Image} alt="" />
          Select Files
        </button>

      </div>

    </div>
  );
}
export default DndUpload