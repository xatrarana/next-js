import Link from 'next/link';
import React from 'react'
import facebook from '@/assets/socialicons_/facebook.png'
import twitter from '@/assets/socialicons_/twitter.png'
import whatsapp from '@/assets/socialicons_/whatsapp.png'
import youtube from '@/assets/socialicons_/youtube.png'
import Image from 'next/image';
import FooterSubscription from './sites/FooterSubscription';
import logo from '@/assets/logo2.jpg'
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/16/solid';

const useFulLinks = [
    { name: "गृह", href: "/gallery" },
    { name: "हाम्रो बारेमा", href: "/download" },
    { name: "व्यवस्थापन", href: "/service-center" },
    { name: "सञ्चालक समिति", href: "/service-center" },
    { name: "अध्यक्षबाट सन्देश", href: "/service-center" },

]
const ICONS = [
   {name: "facebook", icon: facebook },
   {name: "twitter", icon: twitter},
   {name: "youtube", icon: youtube},
   {name: "whatsapp", icon: whatsapp},
]

const otherLinks = [
    { name: "सम्पर्क", href: "/contact" },
    { name: "सुचना", href: "/information" },
    { name: "ग्यालरी", href: "/gallery" },
]
const servicesLinks = [{
    name: "बचत सेवा",
    href: "/services/saving"
},
{
    name: "ऋण सेवा",
    href: "/services/loan"
},
{
    name: "मोबाइल-बैंकिङ्ग-सेवा",
    href: "/services/others"

}]
const socialMediaLinks = [
    {
      type: 'Facebook',
      link: '#https://www.facebook.com/yourusername',
    },
    {
      type: 'Twitter',
      link: '#https://twitter.com/yourusername',
    },
    {
      type: 'Whatsapp',
      link: '#https://www.instagram.com/yourusername',
    },
    
    {
      type: 'Youtube',
      link: '#https://www.youtube.com/channel/yourchannelid',
    },

  ];
  

const date = new Date()
const Footer = () => {
  return (
  <footer className="flex flex-col bg-green-500">
  <div className='footer w-full max-w-7xl mx-auto p-3  md:p-5 text-lg'>
    <div className=''>
      <div className=''>
        <Image className='rounded-full' width={100} height={100} src={logo} alt='logo' />
      </div>
      <div className='text-sm font-normal text-white mt-2'>
      <p className='flex items-center gap-x-2'> <MapPinIcon className='h-5 w-5 text-white'/> ठेगाना: बागभण्डा, काठमाडौं, नेपाल</p>
      <p className='flex items-center gap-x-2' > <EnvelopeIcon className='h-5 w-5 text-white'/> ईमेल: info@tri-jyoti.coop.np</p>
      </div>
    </div>
  <div className='text-base-content flex flex-col gap-y-2 '>
    <h6 className="footer-title">उपयोगी लिङ्कहरू</h6>
   {
    useFulLinks.map((nav) => {
        return (
            <Link key={nav.name} className='text-base-100 hover:text-yellow-400 text-md hover:underline hover:underline-offset-1' href={nav.href}>{nav.name}</Link>
        )
    })
   }
  </div> 
  <div className='text-base-content flex flex-col gap-y-2 '>
    <h6 className="footer-title">सेवा लिङ्कहरू</h6> 
    {
        servicesLinks.map((nav) => {
            return (
                <Link key={nav.name} className='text-base-100 hover:text-yellow-200 text-md hover:underline hover:underline-offset-1' href={nav.href}>{nav.name}</Link>
            )
        })
    }
  </div> 
  <div className='text-base-content flex flex-col gap-y-2 '>
    <h6 className="footer-title">अरू लिङ्कहरू</h6> 
    {
        otherLinks.map((nav) => {
            return (
                <Link key={nav.name} className='text-base-100 hover:text-yellow-200 text-md hover:underline hover:underline-offset-1' href={nav.href}>{nav.name}</Link>
            )
        })
    }
  </div> 
  <div className='text-base-content'>
    <h6 className="footer-title">सामाजिक लिङ्कहरू</h6> 
    <div className="grid grid-flow-col gap-4">
      
        {
            socialMediaLinks.map((nav, index) => {
              const isValidLink = nav.link.startsWith('#https://');
          
              return (
                <React.Fragment key={index}>
                  {isValidLink && (
                    <div className='bg-base-100 p-2 rounded-full'>
                      
                      {
                        ICONS.map((icon) => {
                          if(nav.type.toLowerCase() === icon.name.toLowerCase()) {
                            return (
                                <Link className='no-underline hover:underline' key={nav.type} href={nav.link.substring(1)}> 
                              <Image src={icon.icon} alt={nav.type} width={30} height={30} />
                      </Link>

                            )
                          }
                        })
  }
                    </div>
                  )}
                </React.Fragment>
              );
            })
          }
          
      
    </div>
    <FooterSubscription/>
  </div>
  </div>
  <aside className='w-full bg-white flex items-center justify-center py-3 px-3'>
    <p>Copyright &copy; {date.getFullYear()} - त्रि–ज्योति बचत तथा ऋण सहकारी संस्था लिमिटेड</p>
  </aside>
</footer>
  )
}

export default Footer