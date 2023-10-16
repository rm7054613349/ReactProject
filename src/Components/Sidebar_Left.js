import { RiSettingsLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BiWalletAlt} from "react-icons/bi";
import { TbPray } from "react-icons/tb";
import { SiHelpdesk } from "react-icons/si";
import { TiChevronRight } from "react-icons/ti";
import { VscChevronDown } from "react-icons/vsc";
import { BsFillHCircleFill } from "react-icons/bs";
import './Sidebar_Left.css';

const Sidebar_Left=()=> 
{
    return (
      <div className='left'>

         <div className='Dash_main'>
             <RiSettingsLine className="setting"/>
             <p className='Dash'>Dashboard</p>
         </div> 


         <div  className="Dash_Under">
         
                <div className="a">
                <RxDashboard/>
                <p>Dashboard</p>
                </div>

                

            <div className="q">
                <div className="b">
                <MdOutlineProductionQuantityLimits/>
                <p>Product</p>
                </div>

                <div>
                <TiChevronRight/>
                </div>
            </div>

            <div className="r">
                <div className="c">
                <RiCustomerService2Fill/>
                <p>Customer</p>
                </div>

                <div>
                <TiChevronRight/>
                </div>
            </div>

            {/* <div className="s">
                <div className="d">
                <BiWalletAlt/>
                <p>Income</p>
                </div>

                <div>
                <TiChevronRight/>
                </div>
            </div> */}


            <div className="r">
                <div className="c">
                <BiWalletAlt/>
                <p>Incomeee</p>
                </div>

                <div>
                <TiChevronRight/>
                </div>
            </div>

            <div className="t">
                <div className="e">
                <TbPray/>
                <p>Promote</p>
                </div>

                <div>
                <TiChevronRight/>
                </div>
            </div>

            <div className="u">
                <div className="f">
                <SiHelpdesk/>
                <p>Help</p>
                </div>

                <div>
                <TiChevronRight/>
                </div>
            </div>
         </div>



         <div className="Dash_Bottom">
            <div className="bottom">
                <div className="co">
                    <BsFillHCircleFill className="fi"/>
                    <div>
                    <h5>
                        Hardik
                        </h5>
                        <pre>
                        CricketerIndiaaaaaaaa
                        </pre>
                    </div> 
                </div>

                <div>
                    <VscChevronDown className="vs"/>
                </div>
            </div>

         </div>

      </div>
    )
}

export default Sidebar_Left

