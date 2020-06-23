import React,{useEffect} from 'react'
import '../android1.css'
import '../android2.css'
import PostData from '../data/CardPage.json'
import { makeStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import App from '../App'

const useStyles = makeStyles(theme => ({
   root: {
   backgroundColor: "#3f0a24"
   },
   root1: {
      opacity:1
   },
   root3: {
      opacity:0.2
   }
}));

export default function Cardpage({props}) {
   const classes = useStyles();
   const [posterIndex,setIndex]=React.useState([]);
   useEffect(() => {
      valueFromApp()
   },[posterIndex.length])
  
   const valueFromApp = async ()=>{
      if (window.Mobile){
         const response=await window.Mobile.getPosterValue();
         setIndex(response)
         ReactDOM.render(<App props={posterIndex}/>, document.getElementById('root'));
      }
  }
   const handleRedirect = index => () => {
      if (window.Mobile)
         window.Mobile.openplayer();
   }
   
   return (
      <div className={classes.root}>
         <div class="_192RvH">
            <div class="_3M589S _4XLGta">
               <div class="jxBPRE">
                  <ul>
                     {PostData.map((movie,index)=>(
                        <li class="_2MD6A4 tst-card-wrapper tst-hoverable-card">
                           <div class="NLVUFR tst-title-card _2LQvA6 _AsdWD">
                              <div class="ctTZXu _2Q1eQS tst-packshot tst-packshot-link"> 
                                 <div class="cYn2iz" style={{paddingTop:150}}></div>
                                 <div class="_21C_Q5">
                                    <picture> 
                                       <div className={index>props? classes.root3:classes.root1}>
                                          <img src={movie.poster} style={{cursor:"pointer"}} onClick={handleRedirect(index)}></img>
                                       </div>
                                    </picture>
                                 </div>
                              </div>
                           </div>
                        </li>      
                     ))}       
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}