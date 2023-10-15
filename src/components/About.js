import { useState } from "react";

// const Section = ({title, description}) => {
//   const [isvisible, SetIsVisible] = useState(false);
//   return (
//     <div className="border-2 m-2 p-3">
//       <h1 className="text-xl font-bold">{title}</h1>
//     { isvisible? <button className="font-thin underline" onClick={()=> SetIsVisible(false)}>Hide</button>
//       :<button className="font-thin underline" onClick={()=> SetIsVisible(true)}>Show</button>}
//       {isvisible && <h3>{description}</h3>}
//     </div>
//   );
// };

const About = () => {
  const Section = ({ title, description }) => {
    const [isvisible, SetIsVisible] = useState(false);
    return (
      <div className="border-2 m-2 p-3">
        <h1 className="text-xl font-bold">{title}</h1>
        {isvisible ? (
          <button
            className="font-thin underline"
            onClick={() => SetIsVisible(false)}
          >
            Hide
          </button>
         ) : (
          <button
            className="font-thin underline"
            onClick={() => SetIsVisible(true)}
          >
            Show
          </button>
        )}
        {isvisible && <h3>{description}</h3>}
      </div>
    );
  };

  return (
    <div>
      <Section
        title={"About company"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum perspiciatis obcaecati voluptatem quae dicta! Inventore aperiam at sequi ipsam incidunt debitis quasi, sunt, reiciendis molestiae, est rerum temporibus. Placeat nisi quisquam ab aliquid. Sed cupiditate modi iusto amet quam. Vero accusantium libero nihil autem ipsa deleniti tenetur natus maiores tempora?"
        }
      />
      <Section
        title={"Our Members or Our Team "}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum perspiciatis obcaecati voluptatem quae dicta! Inventore aperiam at sequi ipsam incidunt debitis quasi, sunt, reiciendis molestiae, est rerum temporibus. Placeat nisi quisquam ab aliquid. Sed cupiditate modi iusto amet quam. Vero accusantium libero nihil autem ipsa deleniti tenetur natus maiores tempora?"
        }
      />
      <Section
        title={"career"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum perspiciatis obcaecati voluptatem quae dicta! Inventore aperiam at sequi ipsam incidunt debitis quasi, sunt, reiciendis molestiae, est rerum temporibus. Placeat nisi quisquam ab aliquid. Sed cupiditate modi iusto amet quam. Vero accusantium libero nihil autem ipsa deleniti tenetur natus maiores tempora?"
        }
      />
    </div>
  );
};

export default About;
