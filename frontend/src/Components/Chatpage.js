import React from "react";
import { Box } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import Mychats from "./Mychats";
import Chatbox from "./Chatbox";
import Sidedrawer from "./miscellancious/Sidedrawer";
const Chatpage = () => {
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <Sidedrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="92vh"
        p="15px"
      >
        {user && <Mychats />}
        {user && <Chatbox />}
      </Box>
    </div>
  );
};

export default Chatpage;
