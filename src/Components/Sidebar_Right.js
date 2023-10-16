import React  from 'react'
import Gola from './PieChart.js'

import  "./Sidebar_Right.css"
// import Gola from './Series.js';

import { BsHandThumbsUp } from "react-icons/bs";
import { SlSocialGoogle } from "react-icons/sl";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { MdLibraryBooks } from "react-icons/md";
import { MdOutlineAccountBalanceWallet} from "react-icons/md";
import { IoBagOutline} from "react-icons/io5";
import { VscChevronDown } from "react-icons/vsc";
import { BsFillClipboardPlusFill} from "react-icons/bs";



const Sidebar_Right = ()=>
{
 return (
      <div className='right'>
         
         
         <div className='top1'>
           <h4 className='shah'>
           Hello Shahrukh
           <BsHandThumbsUp className='icon'/> 
           </h4>

            <div className='serchBar'>
               <div className='SerchIn'>
               <SlSocialGoogle/>
               <p>Search</p>
               </div>
            </div>
         </div>





         <div className="top2">
         <div className='earning'>
            <div className='doller'>
               <AiOutlineDollarCircle className="ic cir" />
            </div>

            <div className='ear'>
               <p className='Ear'>Earning</p>
               <h4>$198K</h4>
               <div className='upic'>
                   <AiOutlineArrowUp className='up'/>
                   <p><p className='per'>37.8%</p> this month</p> 
               </div>
            </div>
         </div>






         
         <div className='earning  '>
         <div className=' Book doller '>
               <MdLibraryBooks className="ic book" />
            </div>

            <div className='ear'>
               <p className='Ear'>Orders</p>
               <h4>$2.4k</h4>
               <div className='upic'>
                   <AiOutlineArrowDown className='Down '/>
                   <p><p className='Ram per'>2%</p> this month</p> 
               </div>
            </div>
         </div>







         <div className='earning'>
         <div className='doller '>
               <MdOutlineAccountBalanceWallet className="ic wallet" />
            </div>

            <div className='ear'>
               <p className='Ear'>Balance</p>
               <h4>$2.4k</h4>
               <div className='upic'>
                   <AiOutlineArrowDown  className='Down'/>
                   <p><p className='Ram per'>2%</p> this month</p> 
               </div>
            </div>
         </div>




         <div  className='earning'>
         <div className='doller Bag '>
               <IoBagOutline className="ic bag" />
            </div>

            <div className='ear'>
               <p className='Ear'>Total Sales</p>
               <h4>$89K</h4>
               <div className='upic'>
                   <AiOutlineArrowUp className='up'/>
                   <p><p className='per'>11%</p> this month</p> 
               </div>
            </div>
         </div>
     </div>





         <div className='top3'>
             <div className='month'>
               <div className='chartTop'>
                  <div className='TopHeading'>
                     <h3>Overview</h3>
                     <p className='topcon'>Monthly Earning</p>
                  </div>
                  <div className='qantity'>
                     <p className='topcon'>Quantity</p>
                     <VscChevronDown/>
                  </div> 
               </div>

               <div className='barchart'>
                  <div className='B0'>
                     <p>Jan</p>
                     <div className='c1'></div>
                     
                  </div>

                  <div className='B0'>
                     <p>Feb</p> 
                     <div className='c2'></div>
                     
                  </div>

                  <div className='B0'>
                     <p>Mar</p>   
                     <div className='c3'></div>
                  </div>

                  <div className='B0'>
                     <p>Apr</p>  
                     <div className='c4'></div>
                  </div>

                  <div className='B0'>
                      <p>May</p>
                     <div className='c5'></div>
                   
                  </div>

                  <div className='B0'>
                      <p>Jun</p>
                     <div className='c6'></div>
                     
                  </div>
                  <div className='B0'>
                     <p>Jul</p>
                     <div className='c7'></div>
                     
                  </div>

                  <div className='B0'>
                  <p>Aug</p>
                     <div className='c8'></div>
                     
                  </div>

                  <div className='B0'>
                     <p>Sep</p>
                     <div className='c9'></div>
                     
                  </div>

                  <div className='B0'>
                      <p>Oct</p>
                     <div className='c10'></div>
                     
                  </div>

                  <div className='B0'>
                     <p>Nov</p>
                     <div className='c11'></div>
                     
                  </div>

                  <div className='B0'>
                  <p>Dec</p>
                    <div className='c12'></div>
                     
                  </div>
               </div>

             </div>


             <div className='PiChart'>
               <div className='content'>
                   <h3>
                     Customers
                   </h3>
                   <p className='prod'>
                     Customers that buy products
                   </p>
               </div>
               
               <div className='ooo'>
                       <Gola/>
               </div>
             </div>
         </div>
         


         {/* <div className='top3'>

         </div> */}


            
         <div className='top4'>

             <div className='bott'>
               <div>
               <h3>Product Sell</h3>
               </div>
               
               <div className='top'>
                  
                  <div  className='vs'>
                        <div className='s'>
                          <SlSocialGoogle/>
                           <p className='topcon'>Search</p>
                        </div>
                  </div>
                  <div className='vs'>
                     <div className='s'>
                        <p className='topcon'>Last 30 Days</p>
                        <VscChevronDown/>
                     </div> 
                  </div>
               </div>
             </div>


               <div className='bbb'>
                  <div className='allc'>
                     <div>
                           <p>PName</p>
                     </div> 
                     <div className='stp'>
                           <p>Stock</p>
                           <p>Price</p>
                           <p>TotalSales</p>
                     </div>
                  </div>

                  <div className='line'>
                  </div>

                  <div className='bb'>
                     <div className='ab'>
                       <div>
                       <BsFillClipboardPlusFill className='rr'/>
                       </div>
                       <div className='d'>
                           <h4>Abstrack 3D</h4>
                           <p className='yy'>Practice Makes Man Better</p>
                       </div>
                     </div>
                        
                     <div className='aaa'>
                        <p>32 in stock</p>
                        <h3>$45.99</h3>
                        <p>20</p>
                     </div>
                  </div>

                  <div className='bb'>
                     <div className='ab'>
                       <div>
                       <BsFillClipboardPlusFill className='rr'/>
                       </div>
                       <div className='d'>
                           <h4>Abstrack 3D</h4>
                           <p className='yy'>Practice Makes Man Better</p>
                       </div>
                     </div>
                        
                     <div className='aaa'>
                        <p>32 in stock</p>
                        <h3>$45.99</h3>
                        <p>20</p>
                     </div>
                  </div>
               </div>
                  
         </div>

      </div>
    )
 }

 export default Sidebar_Right

