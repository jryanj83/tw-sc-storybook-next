import styled from "styled-components";
import tw from "twin.macro";

export const ButtonSC = styled.button`
    background: rgba(0,0,255, 1);
    color: white;
    border: 1px solid black;
    border-radius: 10px;
    padding: 1rem 1.5rem;
    font-size: 1.25rem;

    &:hover {
        background: rgba(0,0,255, .3);
    }
`;

const borderStyles = 'border rounded-2xl border-blue-100';
const buttonPadding = 'py-4 px-6'

export const ButtonTW = styled.button.attrs({
  className: `${borderStyles} ${buttonPadding}`
})`
  ${tw`bg-blue-900 text-white`}

  &:hover {
    ${tw`bg-blue-400 text-gray-300`}
  }
`;

export const TextSpan = styled.span`
  color: red;
`;