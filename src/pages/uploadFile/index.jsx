import React from 'react'
import { Button, Col, Container, Input, Row } from 'reactstrap';

const UploadFile = () => {
    return (
        <>
            <Container fluid={true} >
                <Row >
                    <div className="bg_fpage">
                        <div className="form_cont">
                            <div className="form-group d-flex has-feedback martop_for_ser_bar ">
                                <Input className="form-control  ps-4 me-4 " name="Search" type="file" placeholder="search" />
                                <Button outline color="primary" className="btn btn-outline-light"  >UPLOAD</Button>
                            </div>
                        </div>


                        <Container fluid={true}>
                            <Row>
                                <Col lg="6">
                                    <Row>
                                        <Col sm="6">
                                            <img alt="personimage" src={'images/img2.jpg'} className="img-fluid mt-4" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default UploadFile
