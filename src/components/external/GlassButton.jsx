import {styled} from 'solid-styled-components';
import Button from "../reusable/Button.jsx";

const GlassButton = (props) => {
    return (
        <StyledWrapper>
            <Button className="btn" animate={true} {...props}>
                {props.children}
            </Button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .btn {
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
    border: none;
    outline: none;
    border-radius: 0.4rem;
    cursor: pointer;
    text-transform: uppercase;
    background-color: rgb(14, 14, 26);
    color: rgb(234, 234, 234);
    font-weight: 700;
    transition: 0.6s;
    box-shadow: 0px 0px 60px #1f4c65;
    -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));
  }

  .btn:active {
    scale: 0.92;
  }

  .btn:hover {
    background: rgb(2,29,78);
    background: white;
    opacity: 0.85;
    color: #5b5eff;
  }`;

export default GlassButton;
