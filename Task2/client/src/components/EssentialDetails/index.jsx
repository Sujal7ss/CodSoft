import detail from "./detail"

export default function EssentialDetails() {
  return (
    <div className="flex flex-row justify-evenly border h-44 mt-4 bg-slate-50 items-center">
      {detail.map((det) => <div>
        <h2 className="text-gray-400 text-md m-auto">{det.title}</h2>
        <p className="font-bold text-xl m-auto">{det.value}</p>
      </div>)}
      
      
    </div>
  );
}
