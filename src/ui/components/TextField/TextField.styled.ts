import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputLabel = styled.label`
  font-size: 14px;
  color: var(--default-black);
`

export const Input = styled.input`
  width: 345px;
  height: 48px;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 10px 0;
  padding: 0 20px;
  border: 1px solid var(--main-color-transparent);
  background: transparent;
  color: var(--default-black);

  :focus {
    border: 1px solid var(--main-color);
  }
`

export const ErrorMessage = styled.span`
  color: red;
  font-size: 10px;
`
