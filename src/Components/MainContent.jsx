import React, { useContext, useState } from 'react'
import Account from '../Pages/Accounts/Account'
import {SidebarContext } from '../Pages/Main/Dashboard'
import Piggybox from '../Pages/Piggyboxes/Piggybox'
import Default from '../Pages/Default'
import SavingsGroups from '../Pages/SavingsGroup/SavingsGroups'
import Transfer from '../Pages/Transfer/Transfer'


const MainContent = (props) => {

  const SidebarContent = useContext(SidebarContext)
  console.log(SidebarContent)

  return (
    <>
    
    {/* <div className='text-white/70'>{props.name}</div> */}
    {SidebarContent?.isDefault && <Default name = {props.name} />}

    {SidebarContent?.isAccounts && <Account />}
    {SidebarContent?.isPiggyboxes && <Piggybox />}
    {SidebarContent?.isSavings && <SavingsGroups />}
    {SidebarContent?.isTransfer && <Transfer />}
    
    </>
  )
}

export default MainContent