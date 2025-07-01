"use client";

import { Button } from "@/components/ui/button";
import { useExampleQuery } from "@/hooks/useQuery";
import { useExampleStore } from "@/stores/useExampleStore";

const Home = () => {
  const { count, increase } = useExampleStore();
  const { isLoading, error } = useExampleQuery();

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div>Count: {count}</div>
        <Button onClick={increase}>+</Button>
      </div>

      {/* <ul>
        {data.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Home;
