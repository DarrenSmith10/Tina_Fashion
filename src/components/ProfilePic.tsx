/*Component for profile picture*/
import Image from 'next/image';

const ProfilePic = () => {
  return (
    <Image
      src="assets/Images/TestProfile.jpg"
      alt="Profile Picture"
      width={200}
      height={200}
    />
  );
};

export default ProfilePic;
