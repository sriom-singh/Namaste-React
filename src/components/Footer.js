import insta from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import github from '../assets/github.png';

 const Footer = () => {
  return (
    <div className="flex flex-col w-full align-middle text-center my-8">

    <h1 className="">Created with 🧡💚💝</h1>
    <p className="text-xs">©sriom_sharan 2024-25</p>
    
    <div className="flex gap-2 justify-center mt-3">
    <p className='font-thin text-sm'>Follow on - </p>
      <img src={insta}></img>
      <img src={twitter}></img>
      <img src={github}></img>

    </div>
    </div>
  )
}

export default Footer;