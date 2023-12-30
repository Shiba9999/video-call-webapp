import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const Room = () => {
    const {roomID}=useParams()
    let myMeeting = async (element) => {

      
        const appID =894232291 ;
        const serverSecret = "fd2374f85aaf83f547b217b85dc2e661";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,Date.now().toString(),"shiba");
       
        
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
               container: element,
               sharedLinks: [
                 {
                   name: 'Personal link',
                   url:
                    window.location.protocol + '//' + 
                    window.location.host + window.location.pathname +
                     '?roomID=' +
                     roomID,
                 },
               ],
               scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
               },
          });
         };
  return (
    <div  ref={myMeeting}>
    
    </div>
  )
}

export default Room