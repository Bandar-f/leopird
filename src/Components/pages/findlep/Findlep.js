import React,{useState} from 'react';
import style from './findlep.module.css';
import {useDropzone} from 'react-dropzone';


const Findlep = () => {

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();


  const files = acceptedFiles.map(file => console.log(file)
   
  );

  const [output,setOutput]=useState({
    lat:0,
    lng:0,
  })



  const handleOnChange= e=>{
    setOutput({...output,
      [e.target.name]:e.target.value});

      console.log(output);
  
    
  
  }

  const handleClick = ()=>{
    console.log("this is final"+output);
  }




  return (
    <div className={style.container}>

      <div className={style.img}>


      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Please drag and drop or upload your image here</p>
      </div>



      </div>
    <div className={style.btns}>

    <div className={style.formgroup}>
            <label htmlFor="lat" className={style.lab}>lat</label>
            <input className={style.inp} onChange={handleOnChange}  type="text" name="lat" placeholder="lat"/>
    </div>
    <div className={style.formgroup}>
            <label htmlFor="lng" className={style.lab}>lng</label>
            <input className={style.inp} onChange={handleOnChange}  type="text" name="lng" placeholder="lng"/>
    </div>
      
      
      </div>


      
      <button onClick={handleClick} className={style.btnh} type="button">
          Report leopird

        </button>      
    </div>
  )
}

export default Findlep
