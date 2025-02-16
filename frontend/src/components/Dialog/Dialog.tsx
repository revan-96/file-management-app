import React, { useEffect, useRef } from "react";
import {
  AcceptButton,
  CancelButton,
  CloseButton,
  ModalContent,
  ModalOverlay,
} from "./Dialog.styles";
import closeicon from "../../assets/icons/close.svg";

interface AccessibleModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  close?: string;
  accept?: string;
  title?: string;
  isContextMenu?: boolean;
  className?: string;
}

const AccessibleModal: React.FC<AccessibleModalProps> = ({
  isOpen,
  onClose,
  children,
  close,
  accept,
  title,
  isContextMenu,
  className,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Focus management: When the modal opens, focus the first interactive element.
  useEffect(() => {
    if (isOpen) {
      const firstFocusableElement = modalRef.current?.querySelector(
        "button, a, input, select, textarea"
      ) as HTMLElement;
      firstFocusableElement?.focus();
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = ""; // Reset background scrolling when modal is closed
    }
  }, [isOpen]);

  // Trap focus inside the modal
  const trapFocus = (e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      const focusableElements = Array.from(
        modalRef.current?.querySelectorAll(
          'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  // Close the modal when ESC is pressed
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay
      role="dialog"
      aria-labelledby="modal-title"
      aria-hidden={!isOpen}
      aria-modal="true"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      className={
        className
          ? className + (isContextMenu ? " contextMenu" : "")
          : isContextMenu
          ? "contextMenu"
          : ""
      }
      onClick={onClose}
    >
      <ModalContent
        className="modal-content"
        ref={modalRef}
        onKeyDown={trapFocus}
        tabIndex={0}
      >
        {title && (
          <header>
            <h2 id="modal-title">{title}</h2>
            <CloseButton onClick={onClose}>
              <img
                src={closeicon}
                alt="Close Button Icon"
                width="30"
                height="30"
              ></img>
            </CloseButton>
          </header>
        )}
        <main>{children}</main>
        {(close || accept) && (
          <footer>
            <CancelButton onClick={onClose}>{close}</CancelButton>
            <AcceptButton onClick={onClose}>{accept}</AcceptButton>
          </footer>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default AccessibleModal;
