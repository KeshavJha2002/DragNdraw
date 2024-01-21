import { Tools, ToolsType } from "../types"
import { LuMousePointer, LuPencil } from "react-icons/lu";
import { FiSquare } from "react-icons/fi";
import { IoText } from "react-icons/io5";
import { PiMinusBold } from "react-icons/pi";
import "./action-bar-style.css";

type ActionBarProps = {
  tool: ToolsType;
  setTool: (tool: ToolsType) => void;
};

const ActionBar = ({ tool, setTool }: ActionBarProps) => {
  return (
    <div className="fixed top-[20px] p-[10px] z-2 flex left-[50%] gap-[20px] justify-normal bg-primary_bg_color rounded-[10px] border-solid border-[1px] border-border_color actionBar">
      {Object.values(Tools).map((t, index) => (
        <div
          className={`relative cursor-pointer rounded-[5px] p-[10px] border-solid border-[1px] border-transparent bg-primary_bg_color transition-all duration-400 ease-in-out hover:bg-secondary_bg_color ${tool === t ? "bg-selected_bg_color" : ""}`} 
          key={t}
          onClick={() => setTool(t)}
        > 
          <input className="cursor-pointer w-[20px] h-[20px] absolute opacity-0"
            type="radio"
            id={t}
            checked={tool === t}
            onChange={() => setTool(t)}
            readOnly
          />
          <label htmlFor={t} className="cursor-pointer absolute w-[1px] h-[1px] -m-[1px] p-[0] overflow-hidden border-0 clip-rect-0 whitespace-nowrap">{t}</label>
          {t === "selection" && <LuMousePointer />}
          {t === "rectangle" && <FiSquare />}
          {t === "line" && <PiMinusBold />}
          {t === "pencil" && <LuPencil />}
          {t === "text" && <IoText />}
          <span className={`absolute right-[3px] bottom-[0px] text-[0.7em] text-secondary_text_color ${tool === t ? "text-highlight_color" : ""}`}>{index + 1}</span>
        </div>
      ))}
    </div>
  );
}

export default ActionBar;