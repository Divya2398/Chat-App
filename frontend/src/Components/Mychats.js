import React, { useEffect, useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
const Mychats = () => {
  const [loggedUser, setLoggedUser] = useState("");
  const { user, setUser, selectedChat, setSelectedChat, chats, setChats } =
    ChatState();
  const toast = useToast();

  //fetch chat
  const fetchChats = async () => {
    console.log("userid", user._id);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get("/api/chat", config);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top-left",
      });
    }
  };
  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, []);
  return <div>Mychats</div>;
};

export default Mychats;
