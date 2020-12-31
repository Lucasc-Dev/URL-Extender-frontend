import {
  Container,
  Header,
  Title,
  Subtitle,
  FormContainer,
  InputContainer,
  InputTitle,
  Input,
  Button,
  ButtonText,
} from '../styles/pages/MainPage';

export default function Home() {
  return (
    <Container>
      <Header>
        <Title>Enshort, expand or create a custom URL!</Title>

        <Subtitle>Convert an URL to a giant or tiny one!</Subtitle>
      </Header>

        <FormContainer>
          <InputContainer>
            <InputTitle>Original URL</InputTitle>

            <Input type="text" />
          </InputContainer>

          <InputContainer>
            <InputTitle>Custom name</InputTitle>

            <Input type="text" />
          </InputContainer>

          <Button type="submit">
            <ButtonText>Create URL</ButtonText>
          </Button>
        </FormContainer>
    </Container>
  )
}
