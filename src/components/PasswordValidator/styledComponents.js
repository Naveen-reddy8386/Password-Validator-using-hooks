import styled from 'styled-components'

export const Container = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Inner = styled.div`
  background-color: #383a4e;
  height: 350px;
  width: 500px;
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Head = styled.h1`
  color: #ffffff;
  font-family: Roboto;
  font-size: 40px;
`
export const Text = styled.p`
  color: #f8fafc;
  font-size: 14px;
  margin-top: 0px;
`
export const Input = styled.input`
  height: 37px;
  margin-top: 27px;
  outline: none;
  width: 300px;
  background-color: #edeeff;
  border: none;
  padding: 10px;
  color: #383a4e;
`
export const Error = styled.p`
  color: #ef4444;
  font-size: 12px;
`
