import React, { Fragment } from 'react'
import { ShareLayout } from '../../components/core'

const MyAllotmentContainer: React.FC = () => {
    return (
        <Fragment>
            <ShareLayout leftHeader rightHeader buttons={{ export: true, reload: true }}>
                <h1>My Allotment</h1>
                <p>This is the My Allotment page.</p>
            </ShareLayout>
        </Fragment>
    )
}

export default MyAllotmentContainer;