import styled from 'styled-components';

type ContainerProps = {
    showbackground: string;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.showbackground === 'true' ? '#1550FF': '#E2E3E3'};
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
    width: 40px;
    height: 40px;
    opacity: ${props => props.opacity ?? 1};
`;