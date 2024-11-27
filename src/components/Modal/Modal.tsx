"use client";

import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  children: ReactNode;
  className?: string;
}

const Modal: FC<ModalProps> = ({ open, children, className }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const container = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    container.current = document.querySelector<HTMLElement>("#modal");
    setMounted(true);
  }, []);

  useEffect(() => {
    const body = document.querySelector("body")!;
    body.style.overflowY = open ? "hidden" : "auto";
    return () => {
      body.style.overflowY = "auto";
    };
  }, [open]);

  if (!container) return null;

  return container && mounted && open
    ? createPortal(
        <div ref={modalRef} className={className}>
          {children}
        </div>,
        container.current!
      )
    : null;
};

export default Modal;
