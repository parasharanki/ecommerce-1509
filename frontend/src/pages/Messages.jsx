import React from 'react'
import Sidebar from '../Components/Reusables/Sidebar'
import ChatUI from '../Components/Reusables/ChatUI'

const Messages =()  =>{
  return (
  <>
<Sidebar>
  <div className="pl-8 pt-8">
    <ChatUI/>
  </div>
</Sidebar>

  </>
  )
}

export default Messages