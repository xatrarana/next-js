import styles from './styles.module.css'
const noticeData = ["आपसी सहयोग, सद्भाव र सामूहिक हितका लागि सहकारी",'लिखित तथा प्रयोगात्मक परिक्षामा सफल आबेदकहरुको नामावली प्रकाशन साथै अन्तर्वार्ता हुने बारेको सूचना']
const Notice = () => {
  return (
   <div className='flex bg-white'>
     <div id="notice-container" className={`h-9 flex items-center justify-end  w-full ${styles.noticeContainer}`}>
      <div onMouseEnter={e => {console.log("hellow")}} className={`${styles.notice} `}>{
        noticeData.map((notice, index) => {
          return <span  key={index}> { ` | ${notice} | ` } </span>

        })
      }</div>
    </div>
      <div className=' w-24 h-9 flex items-center justify-center bg-blue-400 '>
        <p className='text-white font-bold'>सुचना</p>
   </div>
   </div>
  );
};

export default Notice;

