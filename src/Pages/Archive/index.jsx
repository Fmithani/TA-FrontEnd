import React from 'react'
import { NavigateBack } from '../../Helpers';
import { Button } from 'reactstrap'

function Archive() {
    return (
        <div>
          <div className="bg_fpage d-flex justify-content-center align-items-center  flex-column ">
                  <h1 className="text-white">Coming Soon</h1>
                 <Button onClick={() => NavigateBack()} outline color="primary" className="btn btn-outline-light"  >GO BACK</Button>
              </div>
          </div>
     
    )
}

export default Archive