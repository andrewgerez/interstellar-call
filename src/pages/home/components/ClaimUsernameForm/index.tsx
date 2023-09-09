import { Button, TextInput } from '@drewdev-ui/react'
import { Form } from './styles'
import { ArrowRight } from 'phosphor-react'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput prefix="interstellar.com/" placeholder="seu-usuario" />
      <Button type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
