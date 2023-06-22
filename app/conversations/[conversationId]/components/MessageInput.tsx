'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors
}
const MessageInput: React.FC<MessageInputProps> = ({ placeholder,
  id, type, required, register }) => {


  return (
    <div className="relative w-full">
      <input id={id}
        type={type}
        autoComplete={id}
        placeholder={placeholder}
        {...register(id, { required })}
        className="text-black font-light py-2 px-4bg-neutral-100 
          w-full rounded-full focus:outline-none"/>
    </div>
  )
}

export default MessageInput