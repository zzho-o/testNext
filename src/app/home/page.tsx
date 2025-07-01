"use client";

import { useExampleQuery } from "@/hooks/useQuery";

const Home = () => {
  const { isLoading, error } = useExampleQuery();

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2"></div>
    </div>
  );
};

export default Home;
