import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Container, Input, Row } from 'reactstrap';
// import { DistributeURIPath } from '../../Helpers/';
import { FetchImage, UploadeImage, LoadingImage } from '../../Store/Image/ActionMethods/ActionCreater';


const UploadFile = () => {
    const dispatch = useDispatch();
    const [image, setImage] = useState([]);
    const [errorMsg, setErrorMsg] = useState('')
    const ImagesState = useSelector(state => state.images)

    // console.log(ImagesState);

    useEffect(() => {
        dispatch(FetchImage([]));
    }, [dispatch])
    


    const ValidateForm = async e => {
        e.preventDefault();
        await dispatch(LoadingImage(true));
        await setErrorMsg('');
        if (image.length === 1) {
            await dispatch(UploadeImage(image));
            document.getElementById("image-form").reset();
        } else {
            await setErrorMsg('Please Choose only one image');
        }

    }


    return (
        <>
            <Container fluid={true} >
                <Row >
                    <div className="bg_fpage">
                        <div className="form_cont">
                            <form onSubmit={(e) => ValidateForm(e)} className="form-group d-flex has-feedback martop_for_ser_bar" id="image-form">
                                <Input className="form-control  ps-4 me-4 " name="Search" type="file" onChange={(e) => setImage(e.target.files)} placeholder="search" accept="image/x-png,image/gif,image/jpeg,image/jpg,,image/png" />
                                <Button type="submit" outline color="primary" className="btn btn-outline-light" disabled={ImagesState.loading} >{ImagesState.loading === true ? "Uploading..." : "UPLOAD"}</Button>
                            </form>
                            <span className="text-white" hidden={ImagesState.loading===false ? !ImagesState.loading : !ImagesState.loading}> Uploading...</span>
                            <div className="text-danger">{errorMsg}</div>
                        </div>


                        <Container fluid={true} className="text-white">
                            <Row>
                                Total images uploaded : {ImagesState.images && ImagesState.images.length}
                                {/* {ImagesState && ImagesState.images && ImagesState.images.length > 0 ?

                                    ImagesState.images.map(x =>
                                        <Col lg="3" key={x._id}>
                                            <h2 className="text-white mt-5">{x.file_name && x.file_name}</h2>
                                            <img width="99%" alt="#objectImage" src={DistributeURIPath(x.url)} className="img-fluid mt-4" />
                                        </Col>) : ''
                                } */}
                            </Row>
                        </Container>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default UploadFile
