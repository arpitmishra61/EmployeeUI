import React, { Component } from 'react'
import {api} from '../config/api'
import Posts from '../components/Posts'

export default class Home extends Component {
    state={
        renderPostsFlag:false,
      
      
        postsPerPage:100,
        currentPage:1,
        totalPages:0,
        totalPosts:0,
        currentPosts:[]


    }
childRenderParent=(flag,flag2)=>{
    if(flag==1 && !flag2)
        this.setState({
            currentPage:this.state.currentPage+1
            
        },()=>{
            this.setPageInfos(this.state.posts)
        })
        else
        if(flag !=-1 && flag2)
        {
            this.setState({
            currentPage:flag
            
        },()=>{
            this.setPageInfos(this.state.posts)
        })

        }
        else
        this.setState({
            currentPage:this.state.currentPage-1
            
        },()=>{
            this.setPageInfos(this.state.posts)
        })
    }

setPageInfos=(posts)=>{


    const indexOfLastPost=this.state.currentPage* this.state.postsPerPage
    const indexOfFirstPost=indexOfLastPost - this.state.postsPerPage
    const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost)
   
    this.setState({currentPosts:currentPosts,renderPostsFlag:true,totalPosts:posts.length,totalPages:Math.ceil(posts.length/this.state.postsPerPage)})
}
    getResult=async ()=>{
        const res= await fetch(api.url);
        const posts= await res.json();
      
       
        this.setState({
            posts:posts,
            loadingFlag:true
        },()=>{
             this.setPageInfos(this.state.posts);

        })
        
       
        

    }
 
    render() {
     
        return this.state.renderPostsFlag ? <Posts posts={this.state.currentPosts} currentPage={this.state.currentPage} childRenderParent={this.childRenderParent} totalPages={this.state.totalPages} postsPerPage={this.state.postsPerPage} />    :
            <div className="Home" >
                <div className="card p-4 container">
                   
<div className="text-center">
                    <img src="https://image.flaticon.com/icons/png/512/609/609027.png" alt=""/>
                </div>
                <hr/>
                 <h1 className="display-4 text-center">
                        Get User Profile
                    </h1>
                    <div className="text-center"> <button className="btn btn-info mt-3" onClick={this.getResult}>Get All User Profiles</button></div>
                   
                </div>
                
                
            </div>
        
    }
}
