import logoPath from '@assets/images/logo.png'
import avatarPath from '@assets/images/avatar.png'
const TheHeader = () => {
  
  return (
    <div className="bg-[#DDE5B6] w-4/5 mx-auto rounded-b-xl flex justify-between p-5 shadow-2xl">
      <div>
        <img src={logoPath} alt="logo" />
      </div>
      <div className="flex text-2xl gap-5 bg-[#ADC178] p-3 rounded-xl">
        <img className="w-7 h-7" src={avatarPath} alt="avatar" />
        <span className="my-auto">account name</span>
      </div>
    </div>
  )
}
export default TheHeader;