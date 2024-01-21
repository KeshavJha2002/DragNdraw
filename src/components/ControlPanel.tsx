import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "./control-panel-style.css";
import { PiMinus, PiPlus } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import {
  HiOutlineArrowUturnLeft,
  HiOutlineArrowUturnRight,
} from "react-icons/hi2";

type ControlPanelProps = {
  undo: () => void;
  redo: () => void;
  onZoom: (scale: number) => void;
  scale: number;
  setScale: (scale: number) => void;
};

const ControlPanel = ({
  undo,
  redo,
  onZoom,
  scale,
  setScale,
}: ControlPanelProps) => {
  return (
    <>
      <div className="w-[300px] flex fixed gap-[20px] left-[20px] bottom-[20px] z-2">
        <div className="flex rounded-[8px] bg-panel_bg_color">
          <Tippy content="Zoom Out">
            <button className="rounded-tl-[8px] rounded-bl-[8px] text-[#27272c] bg-transparent text-[0.9rem] border-none py-[10px] px-[15px] hover:bg-hover_bg_color" onClick={() => onZoom(-0.1)} aria-label="Zoom Out">
              <PiMinus />
            </button>
          </Tippy>
          <Tippy content={`Set scale to 100%`}>
            <button className="text-[#27272c] bg-transparent text-[0.9rem] border-none py-[10px] px-[15px] hover:bg-hover_bg_color"
              onClick={() => setScale(1)}
              aria-label={`Set scale to 100%`}
            >
              {new Intl.NumberFormat("en-GB", { style: "percent" }).format(
                scale
              )}
            </button>
          </Tippy>
          <Tippy content="Zoom In">
            <button className="rounded-tr-[8px] rounded-br-[8px] text-[#27272c] bg-transparent text-[0.9rem] border-none py-[10px] px-[15px] hover:bg-hover_bg_color" onClick={() => onZoom(0.1)} aria-label="Zoom In">
              <PiPlus />
            </button>
          </Tippy>
        </div>

        <div className="editPanel">
          <Tippy content="Undo last action">
            <button className="rounded-tl-[8px] rounded-bl-[8px] text-[#27272c] bg-transparent text-[0.9rem] border-none py-[10px] px-[15px] hover:bg-hover_bg_color" onClick={undo} aria-label="Undo last action">
              <HiOutlineArrowUturnLeft />
            </button>
          </Tippy>
          <Tippy content="Redo last action">
            <button className="rounded-tr-[8px] rounded-br-[8px] text-[#27272c] bg-transparent text-[0.9rem] border-none py-[10px] px-[15px] hover:bg-hover_bg_color" onClick={redo} aria-label="Redo last action">
              <HiOutlineArrowUturnRight />
            </button>
          </Tippy>
        </div>
      </div>{" "}
      <a className="text-[#27272c] bg-transparent text-[0.9rem] border-none z-[2] fixed bottom-[20px] right-[20px] rounded-[8px] flex gap-[8px] items-center py-[10px] px-[15px] hover:underline bg-panel_bg_color link" href="https://github.com/KeshavJha2002" target="_blank">
        <FiGithub />
        Created by Keshav
      </a>
    </>
  );
}

export default ControlPanel;