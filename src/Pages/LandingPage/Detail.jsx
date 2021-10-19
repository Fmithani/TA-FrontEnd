import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap';
import { BsList, BsArrowLeft, BsSquare, BsCircle } from "react-icons/bs";
import { IoTriangleOutline } from "react-icons/io5";
import { NavigateBack } from '../../Helpers';
import Footer from '../../Componants/Footer';

const Detail = () => {

    const [data, setData] = useState(JSON.parse(sessionStorage.getItem('images')) || []);
    
    const useDigitalUnit = 'em';
    const [borderColor, setBorderColor] = useState('');

    console.log(data);

    // Dummy json response
    const box = [{
        label: "THE MAN HAS A BEARD",
        dimesions: {
            Width: 9.8639934659004211,
            Height: 4.9859102964401245,
            Left: 7.007833735086023808,
            Top: 1
        }
    },
    {
        label: "THE MAN HAS A FACE",
        dimesions: {
            Width: 12.8639934659004211,
            Height: 9.9859102964401245,
            Left: 21.007833735086023808,
            Top: 10
        }
    }];


    const MouseHover = (condition) => {
        setBorderColor(`${condition}`)
    }



    return (
        <>
            <Container fluid={true} >
                <Row >
                    <div className="bg_fpage">
                        <div className="  info_cont ">
                            <div className="d-flex w-100 justify-content-between">
                                <p className=" text-white text-right" onClick={() => NavigateBack()}><BsArrowLeft className="arrow_css" />BACK TO GALLERY</p>
                                <p className=" text-white text-right">INFO</p>
                            </div>
                        </div>
                        <Container fluid={true} className=" pb_3r p_l_r marg_top_for_F_IMG">
                            <Row>
                                <Col sm="6">
                                    <Row>
                                        <Col sm="11" className="relative" style={{ overflow: "visible" }}>
                                            <div className="relative_pos_for_bracket  ">
                                                <img alt="images" src="images/img1.jpg" className="img-fluid img_of_text_1  "></img>
                                                {box && box.length > 0 && box.map((x, i) =>
                                                    <span
                                                        key={i + 1}
                                                        className={borderColor === 'All' || borderColor === `${i + 1}` ? "text_change" : "text"}
                                                        style={{ width: `${x.dimesions.Width}${useDigitalUnit}`, height: `${x.dimesions.Height}${useDigitalUnit}`, top: `${x.dimesions.Top}${useDigitalUnit}`, left: `${x.dimesions.Left}${useDigitalUnit}` }}
                                                        onMouseEnter={() => MouseHover(i + 1)} onMouseLeave={() => MouseHover('')}
                                                    ></span>
                                                )}
                                            </div>
                                            <div className="txt_cont_on_img_click">
                                                <p className="text-white fs_13 mb-0"><span>AI STATEMENT</span></p>
                                                <p className="text-white  fs_13 "><span>A WOMAN TALKING ON A CELL PHONE.</span></p>
                                                <p className="text-white  fs_13 mt-5 mb-2"><span>28/11/2016</span></p>
                                                <p className="text-white mb-0  fs_13 "><span>
                                                    WOMAN IS PICTURED WITH A PHRASE ON HER FACE THAT READS "OUT TEMER" DURING A PROTEST AGAINST A CONSTITUTIONAL AMENDMENT, KNOWN AS PEC 55, THAT LIMITS PUBLIC SPENDING, IN SAO PAULO.</span></p>
                                                <p className="text-white mb-0  fs_13"><span>AUTHOR: NACHO DOCE.</span></p>
                                                <p className="text-white  fs_13 "><span>SOURCE: REUTERS</span></p>
                                                <div className="p_r_for_bord_img_s">
                                                    <p className=" text-white bor_bott_for_dot_text_img_det woman_txt fs_13 mt-4 mb-3"><span><BsSquare className={`${borderColor === 'All' || borderColor !== '' ? "text_col_blue" : "colr_white"} blue_icon_for`} onMouseEnter={() => MouseHover('All')} onMouseLeave={() => MouseHover('')} /> OBJECTS 20.00%</span></p>

                                                    {box && box.length > 0 && box.map((x, i) =>
                                                        <pre key={i + 1} onMouseEnter={() => MouseHover(i + 1)} onMouseLeave={() => MouseHover('')} className={`${borderColor === 'All' || borderColor === `${i + 1}` ? "text_col_blue" : "text-white"} fs_13 mt-3`}><span>{i + 1} {x.label}</span></pre>
                                                    )}

                                                    <p className="text-white bor_bott_for_dot_text_img_det woman_txt fs_13 mt-4 mb-2"><span><BsCircle className="blue_icon_for" />FACES 0.00%</span></p>
                                                    <p className="text-white  fs_13 "><span>NO FACES FOUND</span></p>
                                                    <p className="text-white bor_bott_for_dot_text_img_det woman_txt fs_13 mt-4 mb-2"><span><IoTriangleOutline className="blue_icon_for" /> COMPOSITION 60.00%</span></p>
                                                    <p className="text-white bor_bott_for_dot_text_img_det woman_txt fs_13 mt-4 mb-2"><span><BsList className="blue_icon_for" /> CONTEXT 20.00%</span></p>
                                                </div>
                                                <p className="text-white mb-0  fs_13 "><span>TAGS</span></p>
                                                <p className="text-white  fs_13 "><span>PERSON, INDOOR, WOMAN, LOOKING, GIRL</span></p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col sm="6">
                                    <Row>
                                        <Col sm="11" className="relative  ">
                                            <div className="relative_pos_for_bracket   ">
                                                <img alt="images" src="images/img2.jpg" className=" img-fluid img_of_text_1"></img>
                                                <h2 className="w_20 "><span className="text2"></span></h2>
                                                <h2 className="w_20 "><span className="text3"></span></h2>
                                                <h2 className="w_20 "><span className="text4"></span></h2>
                                                <h2 className="w_20 "><span className="text5"></span></h2>
                                                <h2 className="w_20 "><span className="text2"></span></h2>
                                                <h2 className="w_20 "><span className="text2"></span></h2>
                                            </div>
                                            <div className="txt_cont_on_img_click_2">
                                                <p className="text-white fs_13 mb-0"><span>C.1610</span></p>
                                                <p className="text-white  fs_13 mb-0"><span>PORTRAIT OF A MAN IN CLASSICAL DRESS, POSSIBLY PHILIP HERBERT, 4TH EARL OF PEMBROKE</span></p>
                                                <p className="text-white  fs_13 mb-0 "><span>AUTHOR: MARCUS GHEERAERTS II</span></p>
                                                <p className="text-white  fs_13 "><span>SOURCE: TATE </span></p>
                                                <div className="p_r_for_bord_img_s">
                                                    <p className="text-white bor_bott_for_dot_text_img_det woman_txt fs_13 mt-4 mb-2"><span><BsSquare className="blue_icon_for" /> OBJECTS 20.00%</span></p>
                                                    <pre className="text-white  fs_13 mt-3 mb-0 "><span>1	THE NOSE OF A MAN</span></pre>
                                                    <pre className="text-white  fs_13 mb-0  "><span>2	MAN WITH MOUTH OPEN </span></pre>
                                                    <pre className="text-white  fs_13 mb-0 "><span>3	A MAN WITH A BEARD </span></pre>
                                                    <pre className="text-white  fs_13 mb-0 "><span>4	THE EYES OF A MAN </span></pre>
                                                    <p className="text-white bor_bott_for_dot_text_img_det woman_txt fs_13 mt-4 mb-2"><span><BsCircle className="blue_icon_for" />FACES 0.00%</span></p>
                                                    <p className="text-white  fs_13 mb-0"><span>SUBJECT 1</span></p>
                                                    <p className="text-white  fs_13 mb-0 "><span>AGE: 38</span></p>
                                                    <p className="text-white  fs_13 mb-0 "><span>GENDER: MALE</span></p>
                                                    <p className="text-white bor_bott_for_dot_text_img_det woman_txt fs_13 mt-4 mb-2"><span><IoTriangleOutline className="blue_icon_for" /> COMPOSITION 60.00%</span></p>
                                                    <p className="text-white bor_bott_for_dot_text_img_det woman_txt fs_13 mt-4 mb-2"><span><BsList className="blue_icon_for" /> CONTEXT 20.00%</span></p>
                                                </div>
                                                <p className="text-white mb-0  fs_13 "><span>TAGS</span></p>
                                                <p className="text-white  fs_13 "><span>PERSON, HOLDING, WOMAN, BLACK, PHOTO</span></p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                        {/* --Footer-- */}
                        <Footer />
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Detail
