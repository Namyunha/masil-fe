type DimProps = {
  closeHandler: () => void;
};

export default function Dim({ closeHandler }: DimProps) {
  return (
    <div
      className="fixed z-dim left-0 top-0 w-screen h-screen bg-black opacity-50"
      onClick={closeHandler}
    />
  );
}
