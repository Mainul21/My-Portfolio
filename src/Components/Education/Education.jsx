import Institute from "./Institute";

const Education = () => {
  const institutes = [
    {
      name: "Titas Gas Adarsha High School",
      location: "Demra, Dhaka",
      degree: 'Secondary School Certificate',
      Year: "2018",
      Result: "4.67/5.00",
      image: 'https://i.ibb.co.com/MpXKq1g/titas.jpg'
    },
    {
      name: "Government Tolaram College",
      location: "Chashara, Naraynganj",
      degree: 'Higher Secondary School Certificate',
      Year: "2020",
      Result: "4.50/5.00",
      image: 'https://i.ibb.co.com/nrbbFmz/college.jpg'
    },
    {
      name: "BRAC University",
      location: "Kha 224, Bir Uttam Rafiqul Islam Avenue, Merul Badda, Dhaka",
      degree: 'Bachelors of Computer Science',
      Year: "2021 - Present",
      Result: "3.34/4.00",
      image: 'https://i.ibb.co.com/hVd4DS6/brac.jpg'
    },
  ];

  return <div className="md:px-10 md:py-10 space-y-5 border-b mb-5">
    <div className="p-4 mb-3">
      <h1 className="md:text-5xl text-3xl font-bold text-center">Educational <span className="text-amber-500">Institutes</span></h1>
    </div>
    {institutes.map(institute=><Institute institute={institute}></Institute>)}
  </div>;
};

export default Education;
