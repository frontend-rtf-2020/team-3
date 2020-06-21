import React from "react";
import VK, { Auth } from "react-vk";

const VKRegistration = () => {
  return (
    <VK apiId={7515170}>
      <Auth
        options={{
          onAuth: (user) => {
            console.log(user);
          },
        }}
      />
    </VK>
  );
};

export default VKRegistration;
