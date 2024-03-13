import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import Map from "../Map";
import ContactForm from "./ContactForm";

const contactDetails = {
    address:{
        address: "काठमाडौं, नेपाल",
    },
    phones: {
        primary: "+977-9841234567",
        secondary: "+977-9841234567"
    },
    emails: {
        primary: "info@test.com.np"
    }
}
const Contact = () => {
  return (
    <div className="form-container  flex flex-col gap-y-4">
        <div className="mb-3">
        <h1 className="text-2xl font-bold bg-green-500 text-white  px-10 py-3">
        सम्पर्क
        </h1>
      </div>
        <div className="flex justify-between ">
            <div className="w-full bg-gray-100 p-3 rounded-md  max-w-sm mx-auto flex flex-col gap-y-4">
               <div className="flex items-center  rounded-md h-20 p-5">
                <div className="flex items-center justify-center">
                    <MapIcon className="h-10 w-10  text-green-500"/>
                </div>
                <div className="data px-4">
                    <h3>ठेगाना</h3>
                    <p>{contactDetails.address.address}</p>
                </div>
               </div>
               <div className="flex items-center   rounded-md h-20 p-5">
                <div className="flex items-center justify-center">
                    <PhoneIcon className="h-10 w-10 text-green-500"/>
                </div>
                <div className="data px-4">
                    <h3>फोन नम्बरहरु</h3>
                    <p>{contactDetails.phones.primary}</p>
                    <p>{contactDetails.phones?.secondary}</p>
                </div>
               </div>
               <div className="flex items-center  rounded-md h-20 p-5">
                <div className="flex items-center justify-center">
                    <EnvelopeIcon className="h-10 w-10 text-green-500"/>
                </div>
                <div className="data px-4">
                    <h3>इमेल</h3>
                    <p>{contactDetails.emails.primary}</p>
                </div>
               </div>
              
            </div>
            <ContactForm/>
        </div>
        <div className="">
            <Map/>
        </div>
    </div>
  );
};

export default Contact;

