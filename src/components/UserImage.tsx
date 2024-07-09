import Image from 'next/image';

type UserImageProps = {
  src: string;
};

export default function UserImage({ src }: UserImageProps) {
  return (
    <div className="flex justify-center items-center w-24 h-24 rounded-full bg-primary overflow-hidden border border-primary">
      <Image src={src} alt="userImage" width={24} height={24} />
    </div>
  );
}
