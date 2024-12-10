type Props = {
  setsearchpage: React.Dispatch<React.SetStateAction<boolean>>;

  searchpage: boolean;
};

const Searchpage = ({ searchpage, setsearchpage }: Props) => {
  return (
    <div className="fixed opacity-95 inset-0  bg-primary z-30 ">
      <div
        className="text-white"
        onClick={() => {
          setsearchpage(!searchpage);
        }}
      >
        X
      </div>
    </div>
  );
};

export default Searchpage;
