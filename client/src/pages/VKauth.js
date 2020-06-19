import VK, {Auth} from react-vk;

const Login = () => {
    return (
        <VK apiId={your_api_id}>
          <Auth options={{
                  onAuth: user => {
                    console.log(user);
                  },
            }}/>
        </VK>
    )
};