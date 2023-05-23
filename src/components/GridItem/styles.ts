import styled from 'styled-components';

type ContainerProps = {
    showbackground: string;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.showbackground === 'true' ? '#D6F6D5': '#E2E3E3'};
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

type IconProps = {
    opacity?: number;
}

export const Icon = styled.img<IconProps>`
    width: 90px;
    height: 90px;
    opacity: ${props => props.opacity ?? 1};
`;