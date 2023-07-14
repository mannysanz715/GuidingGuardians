import Image from 'next/image'
import NavBar from '@/components/NavBar/NavBar'
import InputBanner from '@/components/InputBanner/InputBanner'
import SubBanner from '@/components/SubBanner/SubBanner'
import InfoSection from '@/components/InfoSection/InfoSection'


export default function Home() {
  return (
    <div className=''>
      <NavBar />
      <InputBanner />
      <SubBanner page='home' title="Make tutoring easy and fun!" info="With Guiding Guardians, help your child with schoolwork in no time. Our AI powered chatbot helps you and your child walk through problems with step-by-step help, example problems, and more!"/>
      <InfoSection />
    </div>
  )
}
