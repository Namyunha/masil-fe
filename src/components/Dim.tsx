type DimProps = {
  closeHandler: () => void;
};

export default function Dim({ closeHandler }: DimProps) {
  return (
    <div
      className="fixed z-dim left-0 right-0 top-0 mx-auto my-0 max-w-screen_max h-full bg-black opacity-80"
      onClick={closeHandler}
    />
  );
}
