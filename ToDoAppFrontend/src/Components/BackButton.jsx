import styled from "styled-components";

const StyledWrapper = styled.div`
  --button-size: clamp(48px, 7vw, 64px);
  --expanded-size: clamp(
    calc(var(--button-size) * 2.1),
    18vw,
    calc(var(--button-size) * 2.4)
  );

  position: absolute;
  left: clamp(14px, 3vw, 28px);
  bottom: clamp(14px, 3vw, 28px);
  z-index: 10;

  .Btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: var(--button-size);
    height: var(--button-size);

    border: clamp(2px, 0.3vw, 3px) solid #df8c0f;
    border-radius: calc(var(--button-size) * 0.28);

    cursor: pointer;
    position: relative;
    overflow: hidden;
    background-color: #e4a342;
    box-shadow: calc(var(--button-size) * 0.06) calc(var(--button-size) * 0.06)
      0 #b96d10;

    transition:
      width 0.3s ease,
      transform 0.2s ease;
  }

  .sign {
    width: 100%;
    color: #fff8e9;
    font-size: calc(var(--button-size) * 0.5);
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: width 0.3s ease;
  }

  .text {
    position: absolute;
    right: 0;
    width: 0;
    opacity: 0;
    color: #fff8e9;
    font-size: calc(var(--button-size) * 0.27);
    font-weight: 700;

    transition:
      width 0.3s ease,
      opacity 0.2s ease;
  }

  .Btn:hover {
    width: var(--expanded-size);
  }

  .Btn:hover .sign {
    width: 32%;
  }

  .Btn:hover .text {
    width: 68%;
    opacity: 1;
  }

  .Btn:active {
    transform: translate(3px, 3px);
    box-shadow: 1px 1px 0 #b96d10;
  }
`;

export default function BackButton() {
  return (
    <StyledWrapper>
      <button className="Btn" type="button" aria-label="Înapoi">
        <span className="sign">◀</span>
        <span className="text">Back</span>
      </button>
    </StyledWrapper>
  );
}
