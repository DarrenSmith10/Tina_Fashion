/*Component for profile picture*/
import Image from 'next/image';

const ProfilePic = () => {
  return (
    <div className="flex justify-left mb-4">
    <Image
    
      src="assets/Images/HandBag_6.jpg"
      alt="Profile Picture"
      width={200}
      height={200}
    />
    </div>
  );
};

export default ProfilePic;
