import React from "react";
import { styled, connect } from "frontity";

const SubmitModal = ({ modalOpened, setModalOpened, maxWidth, children }) => {
  return (
    <>
      <Modal
        className="submit-modal"
        maxWidth={maxWidth}
        isOpened={modalOpened}
      >
        <Wrapper className="submit-modal__wrapper">
          <Close aria-label="close" onClick={() => setModalOpened(false)}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.3327 14.0001C27.3327 21.3639 21.3631 27.3334 13.9993 27.3334C6.63555 27.3334 0.666016 21.3639 0.666016 14.0001C0.666016 6.63628 6.63555 0.666748 13.9993 0.666748C21.3631 0.666748 27.3327 6.63628 27.3327 14.0001ZM7.36632 20.6331C6.97579 20.2426 6.97579 19.6094 7.36632 19.2189L12.5851 14.0001L7.36632 8.78126C6.97579 8.39074 6.97579 7.75757 7.36632 7.36705C7.75684 6.97652 8.39001 6.97652 8.78053 7.36705L13.9993 12.5859L19.2182 7.36705C19.6087 6.97652 20.2419 6.97652 20.6324 7.36705C21.0229 7.75757 21.0229 8.39074 20.6324 8.78126L15.4136 14.0001L20.6324 19.2189C21.0229 19.6094 21.0229 20.2426 20.6324 20.6331C20.2419 21.0236 19.6087 21.0236 19.2182 20.6331L13.9993 15.4143L8.78053 20.6331C8.39001 21.0236 7.75684 21.0236 7.36632 20.6331Z"
                fill="#4279B8"
              />
            </svg>
          </Close>
          {children}
        </Wrapper>
      </Modal>
      <Blocker isOpened={modalOpened} />
    </>
  );
};

const Blocker = styled.div`
  position: fixed;
  z-index: 2;
  background: #1313134d;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  transition: opacity 0.2s;
  ${({ isOpened }) => !isOpened && `opacity: 0; pointer-events: none;`};
`;

const Close = styled.button`
  position: absolute;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  top: 21px;
  right: 24px;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  &:hover {
    & svg path {
      fill: #394c62;
    }
  }
  &:active {
    & svg path {
      fill: #4279b8;
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  padding: 96px 117px;
`;

const Modal = styled.div`
  position: fixed;
  z-index: 5;
  left: 50%;
  top: 50%;
  border-radius: 20px;
  background: var(--white);
  transform: translate(-50%, calc(-50% - 38px));
  width: 100vw;
  transition: opacity 0.2s;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "674px")};
  ${({ isOpened }) => !isOpened && `opacity: 0; pointer-events: none;`};
`;

export default connect(SubmitModal, { injectProps: false });
