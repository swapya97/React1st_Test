
import './App.css';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import {  MdOutlineCardGiftcard} from "react-icons/md";
import {  MdOutlinePayments} from "react-icons/md";
import { AiOutlineSetting} from "react-icons/ai";
import { MdToggleOff} from "react-icons/md";
import { AiOutlineMail} from "react-icons/ai";
import {AiFillPlusCircle} from "react-icons/ai";
// font family

function App() {
  return (
    <section>
      
    <div className="body">
       <div className="leftSide">
        <div className='image'>
        <img  src={require('./Assets/profile_picture.jpeg')} alt="profile"></img>            
         <p className='name'>Swapnil Akulwar </p>
        </div>
         
         <div className='icon'>
         <span> <AiOutlineHome className='sym'/>&emsp;Home</span>
         <span><AiOutlineFileText className='sym'/>&emsp;Deposites</span>
         <span><MdOutlineCardGiftcard className='sym'/>&emsp;Offers</span>
         <span><MdOutlinePayments className='sym'/>&emsp;Payments</span>
         <span><AiOutlineSetting className='sym'/>&emsp;Settings</span>
         </div>
         <div className='toggle'>
          <span ><MdToggleOff /></span>
          
         </div>
       </div >
       <div className="rightSide">
 {/* first div */}
         <div id='rightfirstDiv'>    
            <div className='mailbox'><AiOutlineMail/>  </div>
            <img className='rightimg' src={require('./Assets/profile_picture.jpeg')} alt="profile"></img>   
         </div>
         <div id='secondDiv'>
           <div className='active2'><p className='active'>Active Deposite </p> &emsp;<p className='two'>2</p> </div>
           <div className='plus'><AiFillPlusCircle/></div>
         </div>
         <div id='thirdDiv'>
           <div className='index'>
            <p className='propertytext'>PROPERTY</p> <p>MOVE IN DATE</p> <div className='sidebar'> <p>RENT</p> <p>DEPOSITE</p> <p>STATUS</p></div> 
           </div>
           
           <div className='info'>
            <span className='firstLineOfIndex'><img className='infoImg' src={require('./Assets/car.jpg.webp')} alt="profile"></img> <p className='lost'>771 Lost Round</p></span>
            <span>25 February 2020</span> <div className='sidebar'><span>$3000</span> <span>$1000</span> <span>Awaiting Bank Processing</span> <span className='dot'></span></div>
           </div>
           <hr className='hr'/>
           <div className='info'>
            <span className='firstLineOfIndex'><img className='infoImg' src={require('./Assets/square.jpg')} alt="profile"></img> <p className='lost'>1491 Jagged Arbor</p></span>
            <span>12 March 2020</span> <div className='sidebar'><span>$2300</span> <span>$2000</span> <span>Awaiting Bank Processing</span> <span className='dot2'></span></div>
           </div>
           <hr className='hr'/>
           <div className='button'><button className='buttonFont'>ALL ACTIVE DEPOSITE</button></div>
         </div>
         
         <div id='thirdDiv'>
           {/* button div */}
         
          {/* second index div */}
          <div id='secondDiv'>
           <div className='active2'><p className='active'>Closed Deposite </p> &emsp;<p className='two'>8</p> </div>
          
         </div>
            <div className='index'>
            <p className='propertytext'>PROPERTY</p> <p>MOVE IN DATE</p> <div className='sidebar'> <p>RENT</p> <p>DEPOSITE</p> <p>STATUS</p></div> 
           </div>
           
           <div className='info'>
            <span className='firstLineOfIndex'><img className='infoImg' src={require('./Assets/sky.jpg.webp')} alt="profile"></img> <p className='lost'>1694 Noble Cape</p></span>
            <span>3 February 2020</span> <div className='sidebar'><span>$2300</span> <span>$2000</span> <span>Awaiting Bank Processing</span> <span className='dot2'></span></div>
           </div>
           <hr className='hr'/>
           <div className='info'>
            <span className='firstLineOfIndex'><img className='infoImg' src={require('./Assets/mosque.jpg')} alt="profile"></img> <p className='lost'>1141 Tawny Muze</p></span>
            <span>12 February 2020</span> <div className='sidebar'><span>$2500</span> <span>$1500</span> <span>Awaiting Bank Processing</span> <span className='dot4'></span></div>
           </div> 
           <hr className='hr'/>
           <div className='button'><button className='buttonFont'>ALL CLOSED DEPOSITE</button></div>
         </div>
        
       </div>
  
     
       
       
    </div>
    </section>
  );
}

export default App;
