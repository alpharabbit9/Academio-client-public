
import React from 'react';
import { BannerComp } from './BannerComp';
import SponsorPartner from './SponsorPartner';
import Stats from './Stats';
import JoinAsTeacher from './JoinAsTEacher';
import DownloadApp from './DownloadApp';
import Newsletter from './Newsletter';
import HotCourses from './HotCourses';

const Home = () => {
    return (
        <div>
            <BannerComp></BannerComp>

            <section>
                <SponsorPartner></SponsorPartner>
            </section>
            <section className='w-11/12 mx-auto mt-12 mb-12'>

            <HotCourses></HotCourses>

            </section>
            <section className='w-11/12 mx-auto  mt-12 mb-12'>
                <Stats></Stats>
            </section>
            <section className='w-11/12 mx-auto mt-3 mb-3'>
                <JoinAsTeacher></JoinAsTeacher>
            </section>
            <section className='mt-12 mb-12'>
                <div className='text-center mt-3 mb-3'>
                    <h2 className="text-4xl font-bold text-gray-800 mb-3">Experience Academia on Your Fingertips</h2>
                    <p className='text-gray-600 mb-12'>Get instant access to top courses, real-time updates</p>
                </div>
                <DownloadApp></DownloadApp>
            </section>
            <section>
                <Newsletter></Newsletter>
            </section>
        </div>
    );
};

export default Home;