type Props = {
  ageGroups: string[];
  genderGroups: string[];
  foodGroups: any[];
  register: (a: string, b: any) => any;
  errors: any;
  famMemberCount: number;
};

type Props2 = {
  ageGroups: string[];
  genderGroups: string[];
  foodGroups: any[];
  register: (a: string, b: any) => any;
  errors: any;
  famMemberCount: number;
  memberId: number;
};

const InputTemplate = ({
  ageGroups,
  genderGroups,
  foodGroups,
  register,
  errors,
  memberId
}: Props2) => {
  const inputStyles = "w-full rounded-lg bg-p-300 px-5 py-3 placeholder-white mt-2 text-g-20";

  return (<div
    className="mt-5 max-w-[330px] rounded-md border-2 border-g-100 px-5 py-8 text-center"
  >
    <p className=''>{`Family Member ${memberId}`}</p>
    <input
      className={inputStyles}
      type="text"
      placeholder="NAME"
      {...register(`name${memberId}`, {
        required: true,
        maxLength: 100,
      })}
    />
    {errors[`name${memberId}`] && (
      <p className="mt-1 text-p-500">
        {errors[`name${memberId}`].type === "required" && "This is a required field"}
        {errors[`name${memberId}`].type === "maxLength" &&
          "Maximum allowed charactrers is 100"}
      </p>
    )}

    <select
      className={inputStyles}
      {...register(`age${memberId}`, { required: "This is a required filed" })}
    >
      <option value="">-AGE-</option>
      {ageGroups.map((ag, index) => (
        <option key={index + 1} value={ag}>
          {ag}
        </option>
      ))}
    </select>
    {errors[`age${memberId}`] && (
      <p className="mt-1 text-p-500">
        {errors[`age${memberId}`] && (errors[`age${memberId}`].message as string)}
      </p>
    )}

    <select
      className={inputStyles}
      {...register(`gender${memberId}`, { required: "This is a required filed" })}
    >
      <option value="">-GENDER-</option>
      {genderGroups.map((gg, index) => (
        <option key={index + 1} value={gg}>
          {gg}
        </option>
      ))}
    </select>
    {errors[`gender${memberId}`] && (
      <p className="mt-1 text-p-500">
        {errors[`gender${memberId}`] && (errors[`gender${memberId}`].message as string)}
      </p>
    )}

    <select
      className={inputStyles}
      {...register(`foodGroup${memberId}`, { required: "This is a required filed" })}
    >
      <option value="">-FOOD PREFERENCE-</option>
      {foodGroups.map((fg, index) => (
        <option key={index + 1} value={fg.fgid}>
          {fg.fgTitle}
        </option>
      ))}
    </select>
    {errors[`foodGroup${memberId}`] && (
      <p className="mt-1 text-p-500">
        {errors[`foodGroup${memberId}`] && (errors[`foodGroup${memberId}`].message as string)}
      </p>
    )}
  </div>)
};

const FormElements = (props: Props) => {
  const templates = [];
  for (let i = 1; i <= props.famMemberCount; i++) {
    templates.push(<InputTemplate {...props} key={i} memberId={i} />);
  }
  return (
    <div className="mt-5 items-center justify-between gap-2 md:flex md:flex-wrap">
      {templates}
    </div>
  );
};

export default FormElements;
