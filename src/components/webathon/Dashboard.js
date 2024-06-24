import React from 'react'

function Dashboard() {
  return (
    <div className=' p-5 bg-black text-white'>
        <div className="m-5 bg-dark rounded">
            <p className='bg-secondary w-100 p-2 rounded lead fs-3'>Student Profile</p>
            <div className="row gx-5">
                <div className="col-3" style={{position:'relative'}}>
                    <div className=" bg-light ms-3 rounded text-dark text-center p-4">
                    <img src="https://static-00.iconduck.com/assets.00/share-icon-2048x1911-60w04qpe.png" alt="" width='20px' style={{position:'absolute',top:'20px',right:'30px'}}/>
                    <img src="https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0" alt="" className='rounded-circle shadow-4-strong' width='200px'/>
                    <h3 className='display-6 text-center text-primary'>XYZ</h3>
                    <p className="lead text-secondary">Webathon Participant</p>
                    <hr />
                    <p className="lead fw-bold">ABOUT ME</p>
                    <p className="lead" style={{textAlign:'justify'}}>Fueled by caffeine and code, I'm a second-year BTech student yearning to turn theory into real-world solutions.</p>
                    <hr />
                    <a href="https://github.com/LakshitaGoyal24/" target='_blank' className='lead fs-3 link-opacity-75-hover link-underline link-underline-opacity-0'>
                        <i className='ci ci-github ci-xl'>  </i>   Github
                    </a><br />
                    <a href="https://github.com/LakshitaGoyal24/" target='_blank' className='lead fs-3 link-opacity-75-hover link-underline link-underline-opacity-0'>
                        <i className='ci ci-linkedin ci-xl'>  </i>   LinkedIn
                    </a>
                    </div>
                </div>
                <div className="col-5">
                    <div className="bg-light rounded text-dark p-4">
                        <h1 className="display-6 text-primary">My Projects</h1>
                        <hr />
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard