import { notification } from "antd";

export const Notify = (type,message) =>{
    return notification[type]({
        message: message,
        duration: 2,
        placement:"bottomRight"
      });
}