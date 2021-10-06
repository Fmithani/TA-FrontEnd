import React from 'react'
import { Container, Row, Col } from 'reactstrap'

function Footer() {
    return (
        <>
            <Container fluid={true} className="p_l_r">
                <Row className="footer_cont mt-5">
                    <Col className="d-flex justify-content-between flex-wrap mt-5">
                        <p className="text-white footer_txt">TERMS</p>
                        <p className="text-white footer_txt">PRIVACY & COOKIES</p>
                        <p className="text-white footer_txt">CONTACT</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer