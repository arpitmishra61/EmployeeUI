import React from 'react'

export default function Posts(props) {
   
   window.scrollTo(0,0)
    
  
    
    const getPostsUI=(posts)=>{
        
        return posts.map((post,index)=>{
           
            
               return  <li className="list-group-item  p-3 my-3 posts" key={index} style={{borderLeft:"solid 6px tomato",width:"80%",margin:'auto'}}>
        <h4 className="text-secondary"><strong> <i className="fas fa-user bg-primary p-2 rounded-circle text-light"></i>  {post.employee_name}</strong></h4> 

        <hr/>
           <div className="accordion clearfix" id="accordionExample"> <p className="d-inline-block"><strong><i className="fas fa-table mr-1"></i>  age:</strong> {post.employee_age} </p>
        
        <i className="collapsed  float-right d-inline-block material-icons" type="button" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="false" aria-controls={`#collapse${index}`}>arrow_drop_down</i></div>
           

            <div id={`collapse${index}`} className="collapse"  data-parent="#accordionExample">
      
        <p><strong><i className="fas fa-id-badge mr-1"></i> Id:</strong>{" "}{post.id} </p>
      <p><strong> <i className="fas fa-wallet mr-1"></i> Salary:</strong>{" "}{post.employee_salary}</p>

       
      
    </div>
                </li>
            
        })


    }

    const getUpperBar=(currentPage,totalPage)=>{
        return <nav className="navbar navbar-light p-4 bg-light my-4">
            {currentPage==1 ? null :  <i className="material-icons btn btn-light rounded-circle p-0 mb-2 mr-1 text-info" onClick={()=>{
                props.childRenderParent(-1)
            }}>
arrow_left
</i>}
          
            <p className="text-secondary">Page: <strong>{currentPage}/{totalPage}</strong></p>
            {currentPage> props.totalPages ? null : <i className="material-icons btn btn-light rounded-circle p-0 mb-2 text-info ml-1" onClick={()=>{
                props.childRenderParent(1)
                
            }}>
arrow_right
</i>}
            <ul className="navbar-nav ml-auto">
                <div className="searchPanal p-1">
                    <input type="text" className="form-control inputCount" placeholder="Go to page"  max={props.totalPages}/>
                    </div>
                
                <button className="btn btn-danger d-inline searchButton" onClick={(e)=>{
let pageCount=document.querySelector(".inputCount")


if(pageCount.value <= props.totalPages){
   

    props.childRenderParent(pageCount.value,true)
    pageCount.value=null

}
                }}  >
                    <i className="fas fa-search"></i>
                </button>

            </ul>

        </nav>
    }

    
    

    
    return (
        <div className=" container my-4">
            {getUpperBar(props.currentPage, props.totalPages)}
            {getPostsUI(props.posts)}
          
           
            
            
        </div>
    )
}
