type ResultType = {
  id: number;
  name: string;
  servings: string;
  servingSize: string;
  food: string;
  directionalStatement: string;
};
type Props = {
  resultObject: ResultType[];
  setResultReady: (a: boolean) => void;
};

const MenuResult = ({ resultObject, setResultReady }: Props) => {
  return (
    <>
      <div className="mt-5 items-center justify-between gap-2 md:flex md:flex-wrap">
        {resultObject.map((result: ResultType, index: number) => (
          <div key={index + 1} className="mt-5 rounded-md border-2 border-g-20 px-5 py-8 text-center max-w-[330px]">
            <h2 className="text-lg font-bold">{`Here is a menu for ${result.name.toUpperCase()}`}</h2>
            <p className="my-3">
              Consume {result.servings} servings of {result.food} a day. One
              serving is equal to {result.servingSize}.
            </p>
            <p className="my-3 text-xs font-bold">
              Recommendations: {result.directionalStatement}.
            </p>
          </div>
        ))}
      </div>
      <input
        className="hover: mt-3 rounded-md bg-s-500 px-10 py-2 text-white hover:bg-p-500"
        type="button"
        value="Do it again!"
        onClick={() => setResultReady(false)}
      />
    </>
  );
};

export default MenuResult;
