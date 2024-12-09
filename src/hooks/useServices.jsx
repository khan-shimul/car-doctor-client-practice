import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";

const useServices = (asc, search) => {
  const {
    isPending,
    error,
    data: services,
  } = useQuery({
    queryKey: ["services", { asc, search }],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/services?sort=${asc ? "asc" : "desc"}&search=${search}`
      );
      return response.data;
    },
  });

  return [isPending, error, services];
};

export default useServices;
