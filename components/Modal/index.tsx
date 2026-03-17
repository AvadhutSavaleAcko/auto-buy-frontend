import React, { ReactNode, FC, useEffect } from "react";
import dynamic from "next/dynamic";

import { useIsDesktop } from "@utils/device";
import { ChildrenWrapper, ModalHeading } from "./styles";

const ModalMobile = dynamic(
  () =>
    import("@acko-tech/building-blocks.ui.modal").then((c) => c.ModalMobile),
  { ssr: true }
);

const ModalDesktop = dynamic(
  () =>
    import("@acko-tech/building-blocks.ui.modal").then((c) => c.ModalDesktop),
  { ssr: true }
);

export interface ModalProps {
  /** Modal title or custom header content */
  modalHeading?: string | ReactNode;
  /** Whether the modal is visible */
  show: boolean;
  /** Called when modal should close (e.g. close button, overlay click) */
  onClose: () => void;
  /** Modal body content */
  children: ReactNode;
  /** Hide the close (X) button */
  hideCloseButton?: boolean;
  /** Prevent closing when clicking overlay */
  disableOverlayClose?: boolean;
  /** Optional footer content (e.g. sticky CTA) */
  footer?: ReactNode;
  /** Optional max width for desktop modal */
  maxWidth?: string;
  /** Optional max height for desktop modal */
  maxHeight?: string;
  /** Optional className */
  className?: string;
}

const Modal: FC<ModalProps> = ({
  modalHeading,
  show,
  onClose,
  children,
  hideCloseButton = false,
  disableOverlayClose = false,
  footer,
  maxWidth = "504px",
  maxHeight = "85vh",
}) => {
  const isDesktop = useIsDesktop();
  const ModalComponent = isDesktop ? ModalDesktop : ModalMobile;

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <ModalComponent
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      urlhash=""
      show={show}
      onHide={onClose}
      disableOverlayClose={disableOverlayClose}
      showOverlayBackground
      wrapperStyles={{
        padding: isDesktop ? "2rem" : "1.5rem 1.25rem 1.25rem",
        maxHeight: maxHeight,
        zIndex: 1000,
        ...(footer && { paddingBottom: "0px" }),
      }}
      padding={isDesktop ? "2rem" : "1.5rem 1.25rem 1.25rem"}
      bodyMargin=""
      styles={{ overflow: "auto !important" }}
      hideCloseButton={hideCloseButton}
      hideTopPadding={hideCloseButton}
      bodyStyles={{ margin: "0px" }}
      closeButtonStyles={{ top: "0rem" }}
      header={
        modalHeading ? (
          <ModalHeading
            onClick={(e) => e.stopPropagation()}
          >
            {modalHeading}
          </ModalHeading>
        ) : undefined
      }
    >
      <ChildrenWrapper onClick={(e) => e.stopPropagation()}>
        {children}
        {footer}
      </ChildrenWrapper>
    </ModalComponent>
  );
};

export default Modal;
