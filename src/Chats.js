import React from 'react'
import './Chats.css'
import Chat from './Chat';

function Chats() {
  return (
    <div className="chats">
        <Chat 
            name="Sarah"
            message="Yo What's up, I love you!"
            timestamp="5 hours ago"
            profilePic="https://cdn.britannica.com/47/188647-050-396A58A5/Sarah-Silverman-2011.jpg"
        />
        <Chat 
            name="Mark"
            message="Want to make music with me?"
            timestamp="10 hours ago"
            profilePic="https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/02/22/5805b45c-5447-11ea-8948-c9a8d8f9b667_972x_054848.jpg"
        />
        <Chat 
            name="Dean"
            message="I know we just met, but I love you!"
            timestamp="5 days ago"
            profilePic="https://pyxis.nymag.com/v1/imgs/3f1/4fe/e30892f035a7548bbf1659e8995e7b7b71-06-james-dean.rsquare.w600.jpg"
        />
        <Chat 
            name="Melissa"
            message="It was nice meeting, but I don't like your hair"
            timestamp="1 year ago"
            profilePic="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2022_28/3562183/melissa-chan-byline-2022.jpg"
        />
    </div>
  )
}

export default Chats;