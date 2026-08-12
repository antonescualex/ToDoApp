import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button className="Btn" type="button" aria-label="Creeaza o lista noua">
        <span className="sign">+</span>
        <span className="text">Create</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  right: 28px;
  bottom: 28px;
  z-index: 10;

  .Btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 64px;
    height: 64px;
    border: 3px solid #df8c0f;
    border-radius: 18px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    background-color: #e4a342;
    box-shadow: 4px 4px 0 #b96d10;
    transition:
      width 0.3s ease,
      transform 0.2s ease;
  }

  .sign {
    width: 100%;
    color: #fff8e9;
    font-size: 2.7rem;
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
    font-size: 1.1rem;
    font-weight: 700;
    transition:
      width 0.3s ease,
      opacity 0.2s ease;
  }

  .Btn:hover {
    width: 170px;
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

export default Button;
