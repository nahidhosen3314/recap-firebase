import { IoLocationSharp } from "react-icons/io5";
import { FaShower } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { FaVectorSquare } from "react-icons/fa6";

import properties from "../../public/properties.json";
import { Link } from "react-router-dom";

const RecentProperties = () => {

    return (
        <div className="py-10">
            <div className="container">
                <h3 className="mb-6">Recent Properties</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                    
                    {
                        properties.map((item, idx) => {
                            return(
                                <div key={idx} className="hover:shadow-xl transition-all duration-300 ">
                                    <div className="relative overflow-hidden">
                                        <img className="aspect-[1/0.7] w-full object-cover hover:scale-105 hover:transform hover:rotate-2 transition-all duration-500" src={item.image} alt="" />
                                        <div className="absolute top-2 left-2 bg-heading px-2 py-1 inline-block text-white">
                                            For {item.status}
                                        </div>
                                    </div>
                                    <div className="bg-slate-200 p-4">
                                        <h4 className="text-primary">{item.price}</h4>
                                        <h5>{item.title}</h5>
                                        <div className="space-y-2 flex flex-wrap items-center gap-2">
                                            <IoLocationSharp />
                                            <p className="!mt-0">{item.location}</p>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-4 mb-4">
                                            <div className="flex items-center gap-2">
                                                <IoBed />{item.facilities[1].bed_room}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaShower />{item.facilities[2].bath}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaVectorSquare />{item.area}
                                            </div>
                                        </div>
                                        <Link to={`/property/${item?.id}`}>
                                            <button className="tw-btn btn-primary">View property</button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </div>
    );
};

export default RecentProperties;
