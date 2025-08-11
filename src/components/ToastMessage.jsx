import { useContext, useState } from "react";
import { Col, Row, Toast } from "react-bootstrap";
import GlobalContext from "../helpers/context/app.context";
export default function ToastMessage({ errorBody }) {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Row>
        <Col>
          <Toast onClose={() => setShow(false)} show={show} delay={5000}>
            <Toast.Header className={"bg-danger"}>
              <strong className="me-auto" style={{ color: "white" }}>
                {errorBody}
              </strong>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            </Toast.Header>
          </Toast>
        </Col>
      </Row>
    </div>
  );
}
