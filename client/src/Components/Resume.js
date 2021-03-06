import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import {OpenSourceSectionStyled, ServicesSectionStyled} from "./ServicesSection";
import CertificationCard from "./CertificationCard";
import CheckIcon from '@material-ui/icons/Check';
import axios from "axios";
import SmallestTitle from "./SmallestTitle";

function Resume() {
    const briefcase = <BusinessCenterIcon/>
    const school = <SchoolIcon/>
    const certification = <CardMembershipIcon/>
    const check = <CheckIcon/>
    const [certifications, setCertifications] = useState([]);
    const [opensources, setOpensources] = useState([]);
    const [workingExperiences, setWorkingExperiences] = useState([]);
    const [educationExperiences, setEducationExperiences] = useState([]);



    useEffect(() => {
        const getCertifications = async () => {
            const dbCertifications = await axios.get('/api/resume/certifications')
            setCertifications(dbCertifications.data)
        }
        getCertifications();
    }, [])

    useEffect(() => {
        const getWorkingExperiences = async () => {
            const dbWorkingExperiences = await axios.get('/api/resume/workingExperiences')
            setWorkingExperiences(dbWorkingExperiences.data)
        }
        getWorkingExperiences();
    }, [])

    useEffect(() => {
        const getEducationExperiences = async () => {
            const dbEducationExperiences = await axios.get('/api/resume/educationExperiences')
            setEducationExperiences(dbEducationExperiences.data)
        }
        getEducationExperiences();
    }, [])
    useEffect(() => {
        const getOpenSourceContributions = async () => {
            const dbOpenSource = await axios.get('/api/resume/openSourceContribution')
            console.log(dbOpenSource.data)
            setOpensources(dbOpenSource.data)
        }
        getOpenSourceContributions();
    }, [])
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'}/>
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'}/>
                    <SmallestTitle icon={check} title={'????????? ????????? ???????????? ???????????? ???????????????'}/>
                </div>
                <div className="resume-content">
                    {
                        workingExperiences.map((workingExperience) => (
                            <ResumeItem
                                key={workingExperience.title}
                                year={workingExperience.year}
                                title={workingExperience.title}
                                subTitle={workingExperience.subTitle}
                                text={workingExperience.text}
                            />
                        ))
                    }
                </div>
                <div className="small-title u-small-title-margin" >
                    <SmallTitle icon={school} title={'Education Experience'}/>
                    <SmallestTitle icon={check} title={'????????? ????????? ???????????? ???????????? ???????????????'}/>

                </div>
                <div className="resume-content">
                    {
                        educationExperiences.map((educationExperience) => (
                            <ResumeItem
                                key={educationExperience.title}
                                year={educationExperience.year}
                                title={educationExperience.title}
                                subTitle={educationExperience.subTitle}
                                text={educationExperience.text}
                            />
                        ))
                    }


                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={certification} title={'Certification'}/>
                </div>
                <ServicesSectionStyled>
                    <div className="services">
                        {
                            certifications.map((certification) => (
                                <CertificationCard
                                    key={certification.id}
                                    image={certification.image}
                                    title={certification.title}
                                    List={certification.contents.split(",")}
                                />
                            ))
                        }
                    </div>
                </ServicesSectionStyled>

                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={certification} title={'Open Source Contribution'}/>
                </div>
                <OpenSourceSectionStyled>
                    <div className="services">
                        {
                            opensources.map((opensource) => (
                                <CertificationCard
                                    key={opensource.opensource_id}
                                    image={opensource.image}
                                    title={opensource.title}
                                    List={opensource.contents.split(",")}
                                />
                            ))
                        }
                    </div>
                </OpenSourceSectionStyled>
            </InnerLayout>
        </ResumeStyled>
    )
}


const ResumeStyled = styled.section`
  .small-title {
    display: flex;
    justify-content: space-between;
    padding-bottom: 3rem;
    @media screen and (max-width:700px){
      flex-direction: column;
    }
  }

  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume