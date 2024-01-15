import React, { useEffect, useState } from 'react'
import MyPiggyboxes from './MyPiggyboxes'
import WithdrawPiggybox from './WithdrawPiggybox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons'
import DepositPiggybox from './DepositPiggybox'
import CreatePiggybox from './CreatePiggybox'
import DeletePiggybox from './DeletePiggybox'


const Piggybox = () => {

  const [showWithdraw, setShowWithdraw] = useState(false)
  const [showDeposit, setShowDeposit] = useState(false)
  const [showCreate, setShowCreate] = useState(false)
  const [showDelete, setShowDelete] = useState(false)

  const handleWithdrawal=()=>{
    setShowWithdraw(!showWithdraw)
    setShowDeposit(false)
    setShowCreate(false)
    setShowDelete(false)
  }
  const handlePiggyDeposit=()=>{
    setShowWithdraw(false)
    setShowCreate(false)
    setShowDelete(false)
    setShowDeposit(!showDeposit)

  }
  const handlePiggyCreate=()=>{
    setShowWithdraw(false)
    setShowDeposit(false)
    setShowDelete(false)
    setShowCreate(!showCreate)
  }

  const handlePiggyDelete=()=>{
    setShowWithdraw(false)
    setShowDeposit(false)
    setShowCreate(false)
    setShowDelete(!showDelete)
  }



  return (
    <div className='flex flex-col gap-3'>
      <MyPiggyboxes/>

      <div className="t_and_history w-[100%] flex gap-2">
      <div className="piggybox_actions w-[50%] flex flex-col gap-3 ">
        <div className="account_action_toggles flex gap-2 w-[100%]">   
              <button><h1 onClick={handleWithdrawal} className='text-xs'>Withdraw</h1></button>
              <button><h1 onClick={handlePiggyDeposit} className='text-xs'>Deposit</h1></button>
              <button><h1 onClick={handlePiggyCreate} className='text-xs'>Create</h1></button>
              <button><h1 onClick={handlePiggyDelete} className='text-xs'>Delete</h1></button>
          </div>
              <div className="account_actions w-full h-[55vh] overflow-y-scroll relative">
                  {(!showWithdraw && !showDeposit && !showCreate && !showDelete) &&(
                      <div className='bg-[#2D2A32]/50 h-full w-full rounded-lg flex flex-col gap-3 justify-center items-center text-center'>
 <lord-icon
            src="https://cdn.lordicon.com/ksdjzsym.json"
            trigger="hover"
            stroke="bold"
            colors="primary:#ffffff,secondary:#ffffff"
            style={{width:25, height:25}}>
        </lord-icon>                      <span className='text-white '></span>
                      </div>
                  )}
                  
                  {showWithdraw &&< WithdrawPiggybox />}
                  {showDeposit &&< DepositPiggybox />}
                  {showCreate &&< CreatePiggybox />}
                  {showDelete &&< DeletePiggybox />}

              </div>
          </div>


          </div>
    </div>
  )
}

export default Piggybox