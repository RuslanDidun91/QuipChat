'use client'

import { useCallback, useMemo } from "react";
import { FullConversationType } from "@/app/types";
import { useRouter } from "next/navigation";
import { Conversation, Message, User } from "@prisma/client";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import clsx from "clsx";


interface ConversationBoxProps {
  data: FullConversationType,
  selected?: boolean;
}


const ConversationBox: React.FC<ConversationBoxProps> = ({ data, selected }) => {
  return (
    <div>ConversationBox</div>
  )
}

export default ConversationBox