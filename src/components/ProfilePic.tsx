/*Component for profile picture*/
import Image from 'next/image';

const ProfilePic = () => {
  return (
    <div className="relative h-90 w-90 overflow-hidden rounded-full border-4 border-white shadow-lg">
    <Image
    
      src="assets/Images/TestProfile.jpg"
      alt="Profile Picture"
      width={400}
      height={400}
    />
    </div>
  );
};

export default ProfilePic;
