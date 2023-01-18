import React from 'react';

const Experience = () => {
    return (
        <div className='experience'>
            <h3>Expériences</h3>
            <div className='exp-1'>
                <h4>Apprenti développeur web - Gestion Sports</h4>
                <h5>2021-2022</h5>
                <p>
                    {/* Les missions qui m'ont été confiées sont la modification, la correction des fonctionnalités ainsi que le
                    développement de nouvelles fonctionnalités pour les sites et
                    applications clients. */}
                    Une année en alternance qui m'a permit d'acquérir des compétences dans le développement web.
                    En effet, des missions tels que la modification, la correction ou encore le développement de nouvelles fonctionnalités pour les sites et
                    applications clients m'ont été confiées. 
                </p>
            </div>
            <div className='exp-2'>
                <h4>Stage - Compagnie financière de participation</h4>
                <h5>2020-2020</h5>
                <p> Stage en entreprise faisant parti du BTS Système numérique, ce
                    stage m'a fait découvrir un nouveau logiciel tel que "Talend",
                    et m'a permit de manipuler des bases de données.
                </p>
            </div>
        </div>
    );
};

export default Experience;