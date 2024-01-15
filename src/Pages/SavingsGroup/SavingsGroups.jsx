import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons'
import PublicGroups from './PublicGroups'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faArrowAltCircleRight, faSquare, faCreditCard, faPaperPlane, faHand, faCircle } from '@fortawesome/free-regular-svg-icons';
import CreateGroup from './CreateGroup'


const SavingsGroups = () => {
    const {logedInUser} =useContext(UserContext)
    const [data, setData] = useState({ count: 0, next: null, previous: null, results: [] });
    const [showBalance, setShowBalance] = useState(true); // State to track visibility
    const [buttonText, setButtonText] = useState('Hide balance'); // Initial text for the button

    const [showPublic, setShowPublic] = useState(false)
    const [showCreate, setShowCreate] = useState(false)


      const handlePublic=()=>{
        setShowPublic(true)
        setShowCreate(false)
      }

      const handleCreate=()=>{
        setShowPublic(false)
        setShowCreate(true)
      }
      
  return (
  <>
    {/* <div>{logedInUser}</div> */}
    <div className="accounts_display flex flex-col gap-2">



        <div className="account_action_toggles flex gap-2 w-[100%]">   
            <button><h1 onClick={handlePublic} className='text-xs'>Public Groups</h1></button>
            <button><h1 onClick={handleCreate} className='text-xs'>Create Group</h1></button>
        </div>

        <div className="t_and_history w-[100%] flex gap-2">
            <div className="account_actions w-[40%] rounded-lg bg-[#2D2A32]/50 h-[55vh] relative">
                {(!showPublic && !showCreate) &&(
                    <div className=' h-full w-full flex flex-col gap-3 justify-center items-center text-center'>
                    <FontAwesomeIcon icon={faHand} className='text-green-100'/>
                    </div>
                )}
                
                {showPublic && <PublicGroups />}
                {showCreate && <CreateGroup />}
            </div>
        </div>
        


    </div>
        
    
    
    </>
  )
}

export default SavingsGroups