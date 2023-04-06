import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import loadCSVData from "@/shared/loadCSVData";
import FormElements from "./FormElements";
import MenuResult from "./MenuResult";

type Props = {};

type FoodGroup = {
  fgid: string;
  foodgroup: string;
  fgcat_id: string;
  fgcat: string;
};

type AgeGroup = {
  fgid: string;
  gender: string;
  ages: string;
  servings: string;
};

const GetUserDetails = (props: Props) => {
  const [foodGroups, setFoodGroups] = useState<any[]>([]);
  const [ageGroups, setAgeGroups] = useState<string[]>([]);
  const [genderGroups, setGenderGroups] = useState<string[]>([]);

  const [foodData, setfoodData] = useState<any[]>([]);
  const [foodServingsData, setfoodServingsData] = useState<any[]>([]);
  const [directionalStatementsData, setDirectionalStatementsData] = useState<
    any[]
  >([]);

  const [resultReady, setResultReady] = useState<boolean>(false);
  const [resultObject, setResultObject] = useState<any[]>([]);

  const [memberCount, setMemberCount] = useState<number>(1);

  useEffect(() => {
    loadCSVData("foodgroups-en_ONPP.csv").then((response) => {
      const foodGroupsData = response;
      const fgData = foodGroupsData.map((fg: FoodGroup) => ({
        fgid: fg["fgid"],
        fgTitle: fg["foodgroup"],
      }));
      const fgUniq = Array.from(new Set(fgData.map((fg) => fg.fgTitle))).map(
        (fgTitle) => {
          return fgData.find((fg) => fg.fgTitle === fgTitle);
        }
      );
      setFoodGroups(fgUniq);
    });

    loadCSVData("servings_per_day-en_ONPP.csv").then((response) => {
      const fsData = response;
      setfoodServingsData(fsData);
      const ageGroupsSet = new Set(fsData.map((ag: AgeGroup) => ag["ages"]));
      const genderGroupsSet = new Set(
        fsData.map((ag: AgeGroup) => ag["gender"])
      );
      setAgeGroups([...ageGroupsSet]);
      setGenderGroups([...genderGroupsSet]);
    });

    loadCSVData("foods-en_ONPP_rev.csv").then((response) => {
      const fData = response;
      setfoodData(fData);
    });

    loadCSVData("fg_directional_satements-en_ONPP.csv").then((response) => {
      const dsData = response;
      setDirectionalStatementsData(dsData);
    });
  }, []);

  const handleCountChange = (e: any) => setMemberCount(e.target.value);

  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    let menuAdvice = [];
    const isValid = trigger();
    if (!isValid) {
      return;
    }

    for (let i = 1; i <= memberCount; i++) {
      const [servings] = foodServingsData.filter((fs) => {
        return (
          fs.fgid === data[`foodGroup${i}`] &&
          fs.gender === data[`gender${i}`] &&
          fs.ages === data[`age${i}`]
        );
      });
      const getRandomInt = (min: number, max: number) =>
        Math.floor(Math.random() * (max - min) + min);
      const foods = foodData.filter((fd) => {
        return fd.fgid === data[`foodGroup${i}`];
      });
      const foodIndex = getRandomInt(0, foods.length);
      const dirStmnts = directionalStatementsData.filter((ds) => {
        return ds.fgid === data[`foodGroup${i}`];
      });
      const dStmntsIndex = getRandomInt(0, dirStmnts.length);
      const menu = {
        id: i,
        name: data[`name${i}`],
        servings: servings.servings,
        food: foods[foodIndex].food,
        servingSize: foods[foodIndex]["srvgsz"],
        directionalStatement: dirStmnts[dStmntsIndex]["directionalstatement"],
      };
      menuAdvice.push(menu);
      foods.splice(foodIndex, 1);
      dirStmnts.splice(dStmntsIndex, 1);
    }
    setResultObject(menuAdvice);
    setResultReady(true);
  };
  return !resultReady ? (
    <div className="mt-10 justify-between gap-8 md:flex">
      <motion.div
        className="mt-10 basis-4/5 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <form target="_blank" onSubmit={handleSubmit(onSubmit)} method="POST">
          <div className="mt-5 max-w-[330px] rounded-md border-2 border-g-20 px-5 py-8 text-center">
            <h2 className="text-lg font-bold">
              Family Size
            </h2>
            <select
              className="mt-2 w-full rounded-lg bg-p-300 px-5 py-3 text-g-20 placeholder-white"
              onChange={handleCountChange}
              value={memberCount}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <FormElements
            ageGroups={ageGroups}
            genderGroups={genderGroups}
            foodGroups={foodGroups}
            register={register}
            errors={errors}
            famMemberCount={memberCount}
          />
          <input
            className="hover: mt-3 rounded-md bg-s-500 px-10 py-2 text-white hover:bg-p-500"
            type="submit"
            value="Get My Menu"
          />
        </form>
      </motion.div>
    </div>
  ) : (
    <MenuResult resultObject={resultObject} setResultReady={setResultReady} />
  );
};

export default GetUserDetails;
