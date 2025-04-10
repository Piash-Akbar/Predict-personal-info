
const getPredictedAge = async (name: string) => {
    const res = await fetch(`https://api.agify.io?name=${name}`);
    const data = await res.json();
    return data;
  };

const getPredictedGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io?name=${name}`);
    const data = await res.json();
    return data;
  };

const getPredictedNationality = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io?name=${name}`);
    const data = await res.json();
    return data;
  };

interface Params {
    params: {name: string};
  }

export default async function Page({ params }: Params) {
  const name = params.name;
  const ageData = await getPredictedAge(name);
  const genderData = await getPredictedGender(name);
  const nationalityData = await getPredictedNationality(name);

  const[age,gender,nationality] = await Promise.all([ageData,genderData,nationalityData]);

    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1 className="text-2xl font-bold">
            Predictions for {name}
          </h1>
          <div>Age: {age?.age}</div>
          <div>Gender: {gender?.gender}</div>
          <div>Nationality: {nationality?.country[0]?.country_id}</div>
        </main>
      </div>
    );
  }
  