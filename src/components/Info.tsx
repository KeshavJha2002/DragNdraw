import { BsQuestionCircle } from "react-icons/bs";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export function Info() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="z-20 absolute top-[20px] right-[20px] p-2 rounded-lg border-none bg-primary transition duration-300 hover:bg-primary-hover"
        aria-label="Open information dialog"
        onClick={() => setOpen(true)}
      >
        <BsQuestionCircle className="text-primary-bg-color" />
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
          className="DialogTitle bg-primary text-primary-bg-color text-center"
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
          className="IconButton"
        >
          <CloseIcon className="CloseIcon text-primary-bg-color" />
        </IconButton>
        <div className="infoContent p-4 max-w-500 line-height-6 text-primary-text-color">
          <p className="font-bold">Welcome to DragNdraw! Get started with these simple steps:</p>
          <ul className="list-none my-2">
            <li>
              <strong className="text-primary">Choose a Tool:</strong> Select from pencil, line, rectangle, or text tools to start drawing.
            </li>
            <li>
              <strong className="text-primary">Draw & Move:</strong> Click and drag on the canvas to draw. Select an element and drag to move.
            </li>
            <li>
              <strong className="text-primary">Edit Text:</strong> Select the text tool and click on the canvas to start typing.
            </li>
            <li>
              <strong className="text-primary">Zoom:</strong> Use Ctrl + Scroll to zoom in and out of the canvas.
            </li>
            <li>
              <strong className="text-primary">Pan:</strong> Hold Space and drag to move around the canvas, or hold the middle mouse button.
            </li>
          </ul>
          <p className="font-bold">Keyboard Shortcuts:</p>
          <ul className="list-none my-2">
            <li>
              <strong className="text-primary">Undo:</strong> Ctrl + Z
            </li>
            <li>
              <strong className="text-primary">Redo:</strong> Ctrl + Y or Ctrl + Shift + Z
            </li>
            <li>
              <strong className="text-primary">Zoom In:</strong> Ctrl + Plus
            </li>
            <li>
              <strong className="text-primary">Zoom Out:</strong> Ctrl + Minus
            </li>
          </ul>
          <p className="mb-2">Enjoy creating your masterpiece!</p>
        </div>
      </Dialog>
    </div>
  );
}
