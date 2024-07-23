import { GiWindmill } from "react-icons/gi";
import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { TbBeach } from "react-icons/tb";
import { MdOutlineVilla } from "react-icons/md";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
];

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex flex-row item-center justify-between overflow-x-auto">
        {categories.map((category) => {
          return (
            <CategoryBox
              key={category.label}
              icon={category.icon}
              label={category.label}
              description={category.description}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Categories;
