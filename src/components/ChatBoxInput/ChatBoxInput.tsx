import { ChangeEvent, FormEvent, MouseEvent } from "react";

interface propsInt {
  value: string;
  updateFunc: (e: ChangeEvent) => void;
  submitFunc: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

const ChatBoxInput = ({value, updateFunc, submitFunc} : propsInt) => {
  async function buttonPress (e : any){
    value = e.target.value
    updateFunc(e)
  }

  return ( 
    <form className="w-100 flex flex-col justify-center items-center " onSubmit={(e) => submitFunc(e)}>
      <div className="flex gap-5 mb-4 rounded-3xl border-black justify-start items-center border px-5 ">
        <button type='submit' onClick={buttonPress} value='Another Example' className="border-r border-black text-center h-10 pr-4 flex justify-center items-center">Another Example</button>
        <button type="submit" onClick={buttonPress} value='Simplify' className="border-r border-black pr-4 h-10" >Simplify</button>
        <button type="submit" onClick={buttonPress} value='Resources'>Resources</button>
      </div>
      <input value={value} className="input-background-color w-5/6 py-2 pl-5 rounded-3xl" onChange={(e) => updateFunc(e)} placeholder="Ask another question..."/>
    </form>
  );
}

export default ChatBoxInput;