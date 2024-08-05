import React, { useState } from 'react';
import Challenge from './Challenge';

const ChallengeList = ({ challenges }) => {

    return (
        <div>
            {challenges.map(challenge =>
                <div key={challenge.id}>
                    <Challenge challenge={challenge} />
                </div>)
            }
        </div>
    );
};

export default ChallengeList;