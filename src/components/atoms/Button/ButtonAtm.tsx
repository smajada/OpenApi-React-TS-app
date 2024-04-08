import styled from 'styled-components';

type Props = {
    variant: 'red' | 'orange' | 'green';
    children: React.ReactNode;
};

/**
 * Button component with custom styling.
 */
export const ButtonAtm = styled.button<Props>`
    background-color: ${(props) => props.variant};
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s;
    &:hover {
        transform: translateY(-2px);
    }
`;
