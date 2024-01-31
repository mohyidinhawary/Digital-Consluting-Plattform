import about from "../../assets/about.svg";
import Heading from "../../layouts/heading/heading.component";
import Button from "../../layouts/button/button.component";

export default function About() {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className=" w-full md:w-2/4">
        <img src={about} alt="img" />
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2">
        <Heading variant="add">About US ?</Heading>
        <p className=" text-lightText">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          molestiae consequuntur iste placeat recusandae qui nesciunt possimus.
        </p>

        <Button variant="create" size="lg">
          Contact US
        </Button>
      </div>
    </div>
  );
}
