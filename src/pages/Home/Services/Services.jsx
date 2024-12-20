import ServiceCard from "./ServiceCard";
import { useState } from "react";
import useServices from "../../../hooks/useServices";

const Services = () => {
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState("");
  const [isPending, error, services] = useServices(asc, search);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
  };

  if (isPending) {
    return (
      <div className="flex mx-auto">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (error) return <p>`An error has occurred: ${error.message}`</p>;

  return (
    <section className="my-10">
      <div className="text-center md:w-1/2 flex flex-col mx-auto gap-y-2">
        <h3 className="text-[#FF3811] text-xl font-medium">Service</h3>
        <h3 className="font-bold text-4xl text-[#151515]">Our Service Area</h3>
        <p className="text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don not look even slightly
          believable.{" "}
        </p>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <input type="submit" value="Search" className="btn ml-2" />
        </form>
        <button onClick={() => setAsc(!asc)} className="btn btn-secondary">
          {asc ? "Price: Hight to Low" : "Price: Low to Hight"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-7">
        {services.map((service) => (
          <ServiceCard key={service.service_id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
