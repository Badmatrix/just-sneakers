/* eslint-disable react/prop-types */
import SneakersDetail from "../Components/SneakersDetail";
import SneakersImages from "../components/SneakersImages";


export default function Homepage({display,handleSetDisplay }) {
  
  return (
    <div className="rlative my-5 flex flex-col items-center gap-10 px-2 py-3 md:my-10 md:flex-row">
      <SneakersImages
        display={display}
        handleSetDisplay={handleSetDisplay}
        
      />
      <SneakersDetail display={display} />
    </div>
  );
}
