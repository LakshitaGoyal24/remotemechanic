import {useState} from 'react'
import {useForm} from 'react-hook-form'
import { ReactDOM } from 'react';

function ProjectUpload() {
  const [image,setImage]=useState("")
  const [selectedFile, setSelectedFile] = useState(null);
  let {register,handleSubmit,formState:{errors}}=useForm()
  function convertToBase64(e){ 
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.onload=()=>{
      setImage(reader.result)
    }
    reader.onerror=error=>{
    console.log("Error",error)
  };}
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files);

      const reader = new FileReader()

      reader.readAsText(event.target.files[0])
      reader.addEventListener('load', () => {
        // Print the result of the read operation
        setSelectedFile(reader.result)
      });
      }

    let printAllData=function(wasteData){
      wasteData.image=image
      wasteData.status=true
      wasteData.code=selectedFile
      wasteData.projectId=new Date().toLocaleString()
        console.log(wasteData);
    }

  return (
    <div>
        <div className="bg-white w-100 h-100">
      <h1 className="display-3 text-info text-center">Upload Project</h1>
      <form action="" className="w-50 mx-auto mt-5 bg-light p-4" onSubmit={handleSubmit(printAllData)}>
        {/* username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" {...register("username")} id="username" className="form-control mb-4" />
        </div>
        <div className="mb-3">
          <label htmlFor="projectname" className="form-label">Project Name</label>
          <input type="text" {...register("projectName")} id="projectName" className="form-control mb-4" />
        </div>
         <div className="mb-3">
          <label htmlFor="description" className="form-label">description</label>
          <textarea id="" cols="10" rows="5" {...register('description')} className='form-control'
          placeholder='Describe your project for others to know what it is about'></textarea>
        </div>
        <div className='form-group mb-4 d-flex flex-wrap'>
            <label className='form-label w-100' >Manage Access</label>
            <div className='form-check me-5'>
                <input type="radio" className='form-check-input' id="private" value={true} {...register('private')}/>
                <label htmlFor="private" className="form-check-label">Private</label>
            </div>
            <div className='form-check'>
                <input type="radio" className='form-check-input' id="public" value={false} {...register('private')}/>
                <label htmlFor="public" className="form-check-label">Public</label>
            </div>
                {errors.gender?.type==='required' && <p className='text-danger lead'>Gender is required</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="mentor" className="form-label">Mentor</label>
          <input type="text" {...register("mentor")} id="mentor" className="form-control mb-4" placeholder='not mandatory' />
        </div>
        <div>
        <label htmlFor="images" className="form-label">Upload Images</label>
        <input accept='image/*'
              type='file'
              onChange={convertToBase64} 
              className='form-control' 
             />

              {image=='' || image==null?"":<img width={100} height={100} src={image}/>}
    </div>
    <div>
        <label htmlFor="code" className="form-label">Upload Code</label>
        <input accept=".html,.css,.js,.java,.py,.c,.cpp,.php,.rb,.swift,.go,.ts,.sh,.sql,.pl"
              type='file'
              className='form-control' 
              onChange={handleFileChange}
             />
    </div>
        <button type="submit" className="btn btn-success btn-info text-secondary d-block mx-auto fs-5">
          Register
        </button>
      </form>
    </div>
    </div>
  )
}

export default ProjectUpload