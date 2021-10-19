import React, { useState, useEffect } from 'react'
import { BsSearch } from "react-icons/bs";
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, CardGroup, Col, Container, Input, InputGroup, Row } from 'reactstrap';
import { DistributeURIPath } from '../../Helpers/';
import { FetchImage } from '../../Store/UploadImage/ActionMethods/ActionCreater';
import Footer from '../../Componants/Footer';


const LandingPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const ImagesState = useSelector(state => state.images)


    // console.log(ImagesState);

    //separate array in two parts
    var i, j, Temporary = [], chunk = 2;
    for (i = 0, j = ImagesState.images.length; i < j; i += chunk) {
        Temporary.push(ImagesState.images.slice(i, i + chunk));
    }

    // console.log(Temporary);

    useEffect(() => {
        dispatch(FetchImage([]));
    }, [dispatch])

    const GotoDetails = (e, data) => {
        e.preventDefault();
        sessionStorage.setItem('images', JSON.stringify(data));
        history.push('/detail')
    }

    return (
        <>
            <Container fluid={true}>
                <Row>
                    <CardGroup className="p-0">
                        <div className="bg_fpage ">
                            <div className="info_cont">
                                <div className="d-flex justify-content-end">
                                    <NavLink className=" text-white text-right me-4 no_decoration" to="/archive" >ARCHIVE</NavLink>
                                    <p className=" text-white text-right">INFO</p>
                                </div>
                            </div>

                            <div className="form_cont">
                                <InputGroup className="form-group d-flex has-feedback martop_for_ser_bar ">
                                    <Input className="form-control input_search_bar ps-4 me-4 " name="Search" type="text" placeholder="search" /><span className="BsSeacrh"><BsSearch /></span>
                                    <Button outline color="primary" className="btn btn-outline-light"  >SEARCH</Button>
                                </InputGroup>

                                <Container fluid={true} className="mt-4">
                                    <Row>
                                        <Col sm="3">
                                            <p className="text-white sort_txt"><span>SORT :</span> DATE NEWEST TO OLDEST</p>
                                        </Col>
                                        <Col sm="3">
                                            <p className="text-white sort_txt"><span> MATCH TYPE</span> ALL</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            {Temporary && Temporary.length > 0 ?
                                Temporary.map((x, i) =>
                                    <Container fluid={true} key={i} className="pb_3r  border_botto_for_cont_fluid p_l_r marg_top_for_F_IMG">
                                        <Row>
                                            <Col lg="6">
                                                <div className="row" onClick={(e) => GotoDetails(e, x)}>
                                                    {x.length > 0 && x.map(y => 
                                                    <div className="col-sm-6" key={y._id} >
                                                        <img alt="personimage" src={DistributeURIPath(y.url)} className="img-fluid img1 " />
                                                    </div>
                                                    )}
                                                    {/* <div className="col-sm-6">
                                                        <img alt="personimage" src="images/img2.jpg" className="img-fluid " />
                                                    </div> */}
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <p className="text-white sort_txt"><span>No RC166DB9C720</span></p>
                                                <p className="text-white sort_txt mb-0"><span>27/11/2016</span></p>
                                                <p className="text-white sort_txt"><span>11:02:43</span></p>
                                                <p className="text-white sort_txt mt-5 mb-2"><span>28/11/2016</span></p>
                                                <p className="text-white woman_txt mt-0 mb-1">Woman is pictured with a phrase on her face that reads "Out Temer" during a protest against a constitutional amendment, known as PEC 55, that limits public spending, in Sao Paulo</p>
                                                <p className="text-white sort_txt mt-0 "><span>REUTERS/NACHO DOCE</span></p>
                                                <p className="text-white sort_txt mt-5 mb-2"><span>c.1610</span></p>
                                                <p className="text-white woman_txt mt-0 mb-1">Portrait of a Man in Classical Dress, possibly Philip Herbert, 4th Earl of Pembroke by Marcus Gheeraerts II</p>
                                                <p className="text-white sort_txt mt-0 "><span>© TATE</span></p>
                                            </Col>
                                        </Row>
                                    </Container>
                                ) :
                                <Container fluid={true} className=" pb_3r  border_botto_for_cont_fluid p_l_r marg_top_for_F_IMG">
                                    <Row>
                                        <Col lg="6">
                                            <div className="row" onClick={() => history.push('/detail')}>
                                                <div className="col-sm-6  ">
                                                    <img alt="personimage" src="images/img1.jpg" className="img-fluid img1 " />
                                                </div>
                                                <div className="col-sm-6">
                                                    <img alt="personimage" src="images/img2.jpg" className="img-fluid " />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg="6">
                                            <p className="text-white sort_txt"><span>No RC166DB9C720</span></p>
                                            <p className="text-white sort_txt mb-0"><span>27/11/2016</span></p>
                                            <p className="text-white sort_txt"><span>11:02:43</span></p>
                                            <p className="text-white sort_txt mt-5 mb-2"><span>28/11/2016</span></p>
                                            <p className="text-white woman_txt mt-0 mb-1">Woman is pictured with a phrase on her face that reads "Out Temer" during a protest against a constitutional amendment, known as PEC 55, that limits public spending, in Sao Paulo</p>
                                            <p className="text-white sort_txt mt-0 "><span>REUTERS/NACHO DOCE</span></p>
                                            <p className="text-white sort_txt mt-5 mb-2"><span>c.1610</span></p>
                                            <p className="text-white woman_txt mt-0 mb-1">Portrait of a Man in Classical Dress, possibly Philip Herbert, 4th Earl of Pembroke by Marcus Gheeraerts II</p>
                                            <p className="text-white sort_txt mt-0 "><span>© TATE</span></p>
                                        </Col>
                                    </Row>
                                </Container>
                            }

                            {/* <Container fluid={true} className="pb_3r border_botto_for_cont_fluid p_l_r mt-5">
                                <Row>
                                    <Col lg="6" onClick={() => history.push('/detail')}>
                                        <Row>
                                            <Col sm="6">
                                                <img alt="personimage" src="images/img3.jpg" className="img-fluid img1 " />
                                            </Col>
                                            <Col sm="6">
                                                <img alt="personimage" src="images/img4.jpg" className="img-fluid " />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg="6">
                                        <p className="text-white sort_txt"><span>No RC166DB9C720</span></p>
                                        <p className="text-white sort_txt mb-0"><span>27/11/2016</span></p>
                                        <p className="text-white sort_txt"><span>11:02:43</span></p>
                                        <p className="text-white sort_txt mt-5 mb-2"><span>28/11/2016</span></p>
                                        <p className="text-white woman_txt mt-0 mb-1">A woman sits next to a dog during the fifth edition of the "Mi Mascota" (My Pet) fair in Malaga</p>
                                        <p className="text-white sort_txt mt-0 "><span>REUTERS/NACHO DOCE</span></p>
                                        <p className="text-white sort_txt mt-5 mb-2"><span>c.1610</span></p>
                                        <p className="text-white woman_txt mt-0 mb-1">The Fortune-Teller by John Russell</p>
                                        <p className="text-white sort_txt mt-0 "><span>© TATE</span></p>
                                    </Col>
                                </Row>
                            </Container>

                            <Container fluid={true} className=" pb_3r border_botto_for_cont_fluid p_l_r mt-5">
                                <Row>
                                    <Col lg="6" onClick={() => history.push('/detail')}>
                                        <Row>
                                            <Col sm="6">
                                                <img alt="personimage" src="images/img5.jpg" className="img-fluid img5 " />
                                            </Col>
                                            <Col sm="6">
                                                <img alt="personimage" src="images/img1.jpg" className="img-fluid " />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col lg="6">
                                        <p className="text-white sort_txt"><span>No RC166DB9C720</span></p>
                                        <p className="text-white sort_txt mb-0"><span>27/11/2016</span></p>
                                        <p className="text-white sort_txt"><span>11:02:43</span></p>
                                        <p className="text-white sort_txt mt-5 mb-2"><span>28/11/2016</span></p>
                                        <p className="text-white woman_txt mt-0 mb-1">A woman carries balloons as she walks along a street in Old Havana, following the announcement of the death of Cuban revolutionary leader, in Cuba</p>
                                        <p className="text-white sort_txt mt-0 "><span>REUTERS/NACHO DOCE</span></p>
                                        <p className="text-white sort_txt mt-5 mb-2"><span>c.1610</span></p>
                                        <p className="text-white woman_txt mt-0 mb-1">The West End of a Church, in Italy or France by Richard Cooper Junior</p>
                                        <p className="text-white sort_txt mt-0 "><span>© TATE</span></p>
                                    </Col>
                                </Row>
                            </Container> */}
                            {/* --Footer-- */}
                            <Footer />
                        </div>
                    </CardGroup>
                </Row>

            </Container>
        </>

    )
}

export default LandingPage
