import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import JSONTable from './Table';

function ExcelUploader() {
  const [fileData, setFileData] = useState([]);
  const [file, setFile] = useState();

  function handleFileSelect(event) {
    setFile(event.target.files[0]);
  }

  function handleFileRead() {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      setFileData(jsonData);
    };
    reader.readAsArrayBuffer(file);
  }
  console.log('fileData',fileData)

  return (
    <div>
      <input type='file' onChange={handleFileSelect} />
      <button onClick={handleFileRead}>Read Data</button>
      {/* <pre>{JSON.stringify(fileData, null, 2)}</pre> */}
      <JSONTable data={fileData} />
    </div>
  );
}

export default ExcelUploader;
