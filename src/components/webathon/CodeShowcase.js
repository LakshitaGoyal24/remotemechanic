import React, { useEffect } from 'react'
import { CopyBlock,atomOneDark} from 'react-code-blocks';
import { useLocation } from 'react-router-dom';

function CodeShowcase() {
  let [projects,setprojects]=useState({})
  let [err,setErr]=useState('')
   let {state}=useLocation()
   useEffect(()=>{
    change1()
    },[])
    async function change1(){
      let data=await axios.get(`http://localhost:4000/projectinfo/getprojects?projectid=${state}`)
       if(data.data.message=='done')
       {
        let sampleProjects=data.data.data
        setprojects(sampleProjects[0])
        console.log(data.data.data)
       }
       else{
        setErr("i dont know about the error")
       }
    }
    
  return (
    <CopyBlock
      text={projects.code}
      language={projects.language}
      showLineNumbers={true}
      wrapLines
      theme={atomOneDark}
    />
  )
}

export default CodeShowcase