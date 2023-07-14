import { ChangeEvent, FormEvent, MouseEvent } from "react";

interface propsInt {
  value: string;
  updateFunc: (e: ChangeEvent) => void;
  submitFunc: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

const ChatBoxInput = ({value, updateFunc, submitFunc} : propsInt) => {
  return ( 
    <form className="w-100 flex justify-center items-center " onSubmit={(e) => submitFunc(e)}>
      <input value={value} className="input-background-color w-5/6 py-2 pl-5 rounded-3xl" onChange={(e) => updateFunc(e)} placeholder="Ask another question..."/>
    </form>
  );
}

export default ChatBoxInput;