import { Tools, ToolsType } from "../types";

import { LuMousePointer, LuPencil } from "react-icons/lu";
import { FiSquare } from "react-icons/fi";
import { IoText } from "react-icons/io5";
import { PiMinusBold } from "react-icons/pi";

type ActionBarProps = {
  tool: ToolsType;
  setTool: (tool: ToolsType) => void;
};

export function ActionBar({ tool, setTool }: ActionBarProps) {
  return (
    <div className="fixed top-[20px] left-1/2 transform -translate-x-1/2 z-20 p-[0.3rem] bg-primary-bg-color rounded-lg border border-border-color shadow-md flex gap-2 justify-center">
      {Object.values(Tools).map((t, index) => (
        <div
          className={`cursor-pointer relative rounded-md border text-[1rem] border-transparent p-3 bg-primary-bg-color transition duration-300  ${
            tool === t ? "bg-selected-bg-color" : "hover:bg-secondary-bg-color"
          }`}
          key={t}
          onClick={() => setTool(t)}
        >
          <input
            type="radio"
            id={t}
            checked={tool === t}
            onChange={() => setTool(t)}
            readOnly
            className="cursor-pointer w-3 h-3 absolute opacity-0"
          />
          <label
            htmlFor={t}
            className="cursor-pointer absolute w-1 h-1 p-0 m-(-1) overflow-hidden .clip whitespace-nowrap border-0"
          >{t}</label>
          {t === "selection" && <LuMousePointer className="text-primary-text-color w-3 h-3"/>}
          {t === "rectangle" && <FiSquare className="text-primary-text-color w-3 h-3" />}
          {t === "line" && <PiMinusBold className="text-primary-text-color  w-3 h-3" />}
          {t === "pencil" && <LuPencil className="text-primary-text-color  w-3 h-3" />}
          {t === "text" && <IoText className="text-primary-text-color  w-3 h-3" />}

          <span className="absolute top-[1.35rem] right-[0.35rem] text-[0.6rem] text-secondary-text-color">
            {index + 1}
          </span>
        </div>
      ))}
    </div>
  );
}
