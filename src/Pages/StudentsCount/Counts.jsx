import { Parallax } from "react-parallax";


const Counts = () => {
    return (
        <div className="my-10">
            <Parallax blur={10} bgImage="https://i.ibb.co/yd3Js2R/count-Student.jpg" bgImageAlt="the cat" strength={200}>
                <div className="flex gap-10 items-center justify-center my-16">
                    <div>
                        <p className="text-3xl font-medium text-white">1425+</p>
                        <p className="text-3xl font-medium text-white">Students</p>
                    </div>
                    <div>
                        <p className="text-3xl font-medium text-white">1425+</p>
                        <p className="text-3xl font-medium text-white">Students</p>
                    </div>
                    <div>
                        <p className="text-3xl font-medium text-white">1425+</p>
                        <p className="text-3xl font-medium text-white">Students</p>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Counts;