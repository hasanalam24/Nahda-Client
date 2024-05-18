import { Parallax } from "react-parallax";
import { GiFountainPen } from "react-icons/gi";
import { GiOpenBook } from "react-icons/gi";
import { MdPhoneAndroid } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";

const Counts = () => {
    return (
        <div>
            <div className="border-b-2 border-red-500 w-max py-4 mx-auto">
                <h1 className="text-4xl text-center">Our Students Activities</h1>
            </div>

            <div className="my-10">
                <Parallax blur={10} bgImage="https://i.ibb.co/yd3Js2R/count-Student.jpg" bgImageAlt="the cat" strength={200}>
                    <div className="flex gap-10 items-center justify-center my-16">
                        <div className="flex flex-col items-center justify-center">
                            <GiFountainPen className="text-6xl text-white"></GiFountainPen>
                            <p className="text-3xl font-medium text-white">1425+</p>
                            <p className="text-3xl font-medium text-white">Running Students</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <GiOpenBook className="text-6xl text-white"></GiOpenBook>
                            <p className="text-3xl font-medium text-white">425+</p>
                            <p className="text-3xl font-medium text-white">Teachers</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <MdPhoneAndroid className="text-6xl text-white"></MdPhoneAndroid>
                            <p className="text-3xl font-medium text-white">926+</p>
                            <p className="text-3xl font-medium text-white">Online Students</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <GrAchievement className="text-6xl text-white"></GrAchievement>
                            <p className="text-3xl font-medium text-white">15+</p>
                            <p className="text-3xl font-medium text-white">Achivements</p>
                        </div>
                    </div>
                </Parallax>
            </div>
        </div>
    );
};

export default Counts;