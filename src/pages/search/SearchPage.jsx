import React from "react";
import Movies from "../../components/MoviesCom";
import { useGetSearchQuery } from "../../redux/api/movie.api";
import { Input, Empty } from "antd";
import { useSearchParams } from "react-router-dom";
const { Search } = Input;

const SearchPage = () => {
  // const [query, setQuery] = useState("")
  const [params, setParams] = useSearchParams();

  const query = params.get("q") || "";

  const onSearch = (value) => {
    // setQuery(value)
    params.set("q", value);
    setParams(params);
  };
  const { data, isSuccess } = useGetSearchQuery(
    { include_adult: false, query: query },
    { skip: !query }
  );

  return (
    <div className="container  max-w-7xl mx-auto p-6">
      <div className="max-w-[600px] mx-auto  mb-4">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          autoFocus
          defaultValue={query}
        />
      </div>
      {!data?.total_results && <Empty />}

      <Movies data={data} />
    </div>
  );
};

export default SearchPage;
