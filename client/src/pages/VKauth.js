import React, { Component } from 'react';
import VK, {Auth} from 'react-vk';

import { Button} from 'react-bootstrap'

const VKRegistration = () => {
    return (
        <VK apiId={7515170} >
          <Auth options={{
                  onAuth: user => {
                    console.log(user);
                  },
            }}/>
        </VK>
    )
};


  export default VKRegistration;