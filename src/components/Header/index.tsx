import { Container, Content } from "./styles";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <div>
          <span>to</span>
          <span>do</span>
        </div>
      </Content>
    </Container>
  );
}
