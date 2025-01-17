
import React from 'react';
import { BannerComp } from './BannerComp';
import SponsorPartner from './SponsorPartner';
import Stats from './Stats';
import JoinAsTeacher from './JoinAsTEacher';
import DownloadApp from './DownloadApp';
import Newsletter from './Newsletter';

const Home = () => {
    return (
        <div>
            <BannerComp></BannerComp>

            <section>
                <SponsorPartner></SponsorPartner>
            </section>
            <section className='w-11/12 mx-auto  mt-3 mb-3'>
                <Stats></Stats>
            </section>
            <section className='w-11/12 mx-auto mt-3 mb-3'>
                <JoinAsTeacher></JoinAsTeacher>
            </section>
            <section className='mt-3 mb-3'>
                <DownloadApp></DownloadApp>
            </section>
            <section>
                <Newsletter></Newsletter>
            </section>
        </div>
    );
};

export default Home;