import { Button, TextInput } from '@drewdev-ui/react'
import { useForm } from 'react-hook-form'
import { ArrowRight } from 'phosphor-react'
import { Form } from './styles'
import { z } from 'zod'

const claimUsernameFormSchema = z.object({
  username: z.string(),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        prefix="interstellar.com/"
        placeholder="seu-usuario"
        {...register('username')}
      />
      <Button type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
