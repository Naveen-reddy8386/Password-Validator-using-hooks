import {useState} from 'react'
import {Container, Inner, Head, Text, Input, Error} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const changePassword = event => setPassword(event.target.value)
  return (
    <Container>
      <Inner>
        <Head>Password Validator</Head>
        <Text>Check how strong and secure is your password</Text>
        <Input type="password" value={password} onChange={changePassword} />
        {password.length >= 8 ? null : (
          <Error>Your password must be at least 8 characters</Error>
        )}
      </Inner>
    </Container>
  )
}
export default PasswordValidator
