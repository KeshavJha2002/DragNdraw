import { BsQuestionCircle } from "react-icons/bs";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export const Info = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="z-2 absolute top-[20px] right-[20px] p-[10px] bg-primary *:text-primary_bg_color rounded-[8px] hover:bg-primary_hover transition duration-400 ease-in-out border-none"
        aria-label="Open information dialog"
        onClick={() => setOpen(true)}
      >
        <BsQuestionCircle />
      </button>
      <Dialog
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          style: {
            borderRadius: "10px",
          },
        }}
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
          className="text-cerner bg-primary text-primary_bg_color"
        >
          How to Use DragNdraw
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          className="absolute top-[8px] right-[8px]"
        >
          <CloseIcon className="text-primary_bg_color" />
        </IconButton>
        <div className="p-[20px] text-primary_text_color max-w-[500px] leading-6">
          <p className="font-bold">Welcome to DragNdraw! Get started with these simple steps:</p>
          <ul className="list-style-none mt-[10px] mb-[20px] mx-0">
            <li className="mb-[10px]">
              <strong className="font-bold text-primary">Choose a Tool:</strong> Select from pencil, line,
              rectangle, or text tools to start drawing.
            </li>
            <li className="mb-[10px]">
              <strong className="font-bold text-primary">Draw & Move:</strong> Click and drag on the canvas to
              draw. Select an element and drag to move.
            </li>
            <li className="mb-[10px]">
              <strong className="font-bold text-primary">Edit Text:</strong> Select the text tool and click on the
              canvas to start typing.
            </li>
            <li className="mb-[10px]">
              <strong className="font-bold text-primary">Zoom:</strong> Use Ctrl + Scroll to zoom in and out of the
              canvas.
            </li>
            <li className="mb-[10px]">
              <strong className="font-bold text-primary">Pan:</strong> Hold Space and drag to move around the
              canvas, or hold the middle mouse button.
            </li>
          </ul>
          <p className="font-bold">Keyboard Shortcuts:</p>
          <ul className="list-style-none mt-[10px] mb-[20px] mx-0">
            <li className="mb-[10px]">
              <strong className="font-bold text-primary">Undo:</strong> Ctrl + Z
            </li>
            <li className="mb-[10px]">
              <strong className="font-bold text-primary">Redo:</strong> Ctrl + Y or Ctrl + Shift + Z
            </li>
            <li className="mb-[10px]">
              <strong className="font-bold text-primary">Zoom In:</strong> Ctrl + Plus
            </li>
            <li className="mb-[10px]">
              <strong className="font-bold text-primary">Zoom Out:</strong> Ctrl + Minus
            </li>
          </ul>
          <p className="font-bold">Enjoy creating your masterpiece!</p>
        </div>
      </Dialog>
    </div>
  );
}