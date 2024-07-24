interface Props {
  edu: string;
  year: string;
  description: string;
  bgColor?: string;
}

const Education = (props: Props) => {
  const { edu, year, description, bgColor } = props;

  return (
    <div className={`flex flex-col gap-3 ${bgColor} p-5 rounded-sm`}>
      <div className="flex flex-row justify-between">
        <label className="font-semibold">{edu}</label>
        <div className="font-semibold">{year}</div>
      </div>
      <p className="text-justify">{description}</p>
    </div>
  );
};

export default Education;
