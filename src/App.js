import React, {useState} from 'react';
import Icons from "./components/Icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardBody, Button, Container, Col, Row } from 'reactstrap';
import './App.css';

const itemArray = new Array(9).fill("empty")

const App = () => {

    const [isCross, setIsCross] = useState(false)
    const [winMessege, setWinMessege] = useState("")

    const reload = () => {
        setIsCross(false);
        setWinMessege("");
        itemArray.fill("empty", 0,9)
    };

    const checkWinner = () => {
        if (itemArray[0] === itemArray[1] &&
            itemArray[0] === itemArray[2] &&
            itemArray[0] !== "empty")
        {
            setWinMessege(`${itemArray[0]} won`);
        } else if (
            itemArray[3] !== "empty" &&
            itemArray[3] === itemArray[4] &&
            itemArray[4] === itemArray[5])
        {
            setWinMessege(`${itemArray[3]} won`);
        } else if (
            itemArray[6] !== "empty" &&
            itemArray[6] === itemArray[7] &&
            itemArray[7] === itemArray[8])
        {
            setWinMessege(`${itemArray[6]} won`);
        } else if (
            itemArray[0] !== "empty" &&
            itemArray[0] === itemArray[3] &&
            itemArray[3] === itemArray[6])
        {
            setWinMessege(`${itemArray[0]} won`);
        } else if (
            itemArray[1] !== "empty" &&
            itemArray[1] === itemArray[4] &&
            itemArray[4] === itemArray[7])
        {
            setWinMessege(`${itemArray[1]} won`);
        } else if (
            itemArray[2] !== "empty" &&
            itemArray[2] === itemArray[5] &&
            itemArray[5] === itemArray[8])
        {
            setWinMessege(`${itemArray[2]} won`);
        } else if (
            itemArray[0] !== "empty" &&
            itemArray[0] === itemArray[4] &&
            itemArray[4] === itemArray[8])
        {
            setWinMessege(`${itemArray[0]} won`);
        } else if (
            itemArray[2] !== "empty" &&
            itemArray[2] === itemArray[4] &&
            itemArray[4] === itemArray[6])
        {
            setWinMessege(`${itemArray[2]} won`);
        }
    };

    const changeItem = itemNumber => {
        if (winMessege) {
            return toast(winMessege, { type: "success" });
        }

        if (itemArray[itemNumber] === "empty") {
            itemArray[itemNumber] = isCross ? "cross" : "circle"
            setIsCross(!isCross)
        } else {
            return toast("already filled", { type: "error" })
        }
        checkWinner();
    }

  return (
    <Container className="p-5">
        <ToastContainer />
        <Row>
            <Col md={6} className="offset-md-3">
                {winMessege ? (
                    <div className="mb-2 mt-2">
                        <h1 className="text-success text-uppercase text-center">
                            {winMessege}
                        </h1>
                        <Button color="success" block onClick={reload}>
                            Reload Game
                        </Button>
                    </div>
                ) : (
                    <h1 className="text-center text-warning">
                        {isCross ? "Cross" : "Circle"} Turns
                    </h1>
                )}
                <div className="grid">
                    {itemArray.map((item, index) => {
                        return(
                            <Card color="warning" onClick={() => changeItem(index)}>
                                <CardBody className="box">
                                    <Icons name={item}/>
                                </CardBody>
                            </Card>
                        )
                    })}
                </div>

            </Col>
        </Row>
    </Container>
  );
}

export default App;
