import styled from '@emotion/styled'

type Props = {
  href: string
  icon?: string
  text: string
}

export const Button = ({ icon, text, ...rest }: Props) => (
  <Wrapper {...rest}>
    {icon && <i className={`fab ${icon}`} />}
    {text}
  </Wrapper>
)

const Wrapper = styled.a`
  display: inline-block;
  background-color: #b0a583;
  font-size: 20px;
  padding: 10px 20px;
  margin-bottom: 20px;
  border: none;
  color: #fff;
  border-radius: 5px;

  & i {
    margin-right: 10px;
  }
`
