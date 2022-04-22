import * as S from './SubmitButton.styled'

export function SubmitButton( props: any ) {
  return (
    <S.Container>
      <button type='submit'>{props.title || "Entrar"}</button>
    </S.Container>
  )
}
