import Accordion from "react-bootstrap/Accordion";

export default function Specs({ product }) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>CPU</Accordion.Header>
        <Accordion.Body style={{ textWrap: "wrap" }}>
          {product && product.description && product.description.cpu ? product.description.cpu : "TBA"}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>GPU</Accordion.Header>
        <Accordion.Body style={{ textWrap: "wrap" }}>
          {product && product.description && product.description.gpu ? product.description.gpu : "TBA"}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>RAM</Accordion.Header>
        <Accordion.Body style={{ textWrap: "wrap" }}>
          {product && product.description && product.description.ram ? product.description.ram : "TBA"}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Internal Storage</Accordion.Header>
        <Accordion.Body style={{ textWrap: "wrap" }}>
          {product && product.description && product.description.cpu ? product.description.cpu : "TBA"}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
