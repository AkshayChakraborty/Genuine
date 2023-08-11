import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardSkeleton = () => {
    return (
        <>
            <div className="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch">
                <div className="course-item">
                    <Skeleton height={200} width={350}/>
                    {/* <img src="http://via.placeholder.com/640x360" className="card-img-top" alt="..." /> */}
                    <div className="course-content">
                        <h3><Skeleton /></h3>
                        <h3><a href="course-details.html"><Skeleton /></a></h3>
                        <p><Skeleton /></p>
                        <span><Skeleton /></span>
                        <div className="trainer d-flex justify-content-between align-items-center">
                            <div className="trainer-profile d-flex align-items-center">
                                <Skeleton circle={true} height={60} width={60} />
                                <span><Skeleton /></span>
                            </div>
                            <div className="trainer-rank d-flex align-items-center">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardSkeleton