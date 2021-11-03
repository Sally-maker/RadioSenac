import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 9;
  flex-direction: column;
`;

export const Tab = styled.div`
  z-index: 3;
  position: fixed;
  padding: 11px 0 15px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  width: 68%;
  cursor: pointer;
  background: var(--primary);
  color: var(--radio-light-hover);
  border-bottom: 2px solid var(--radio-light-hover);
  &:hover {
    background: var(--radio-dark-hover);
    transition: 1.3s;
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-top: 60px;
`;
