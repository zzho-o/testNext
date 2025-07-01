import { useQuery as useTanstackQuery } from "@tanstack/react-query";

/**
 * 예시 데이터를 비동기로 fetch하는 함수
 * @returns {Promise<any>} 사용자 데이터 리스트
 * @throws API 요청 실패 시 에러 발생
 */
const fetchExample = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("API 요청 중 에러가 발생했습니다.");
  return res.json();
};

/**
 * 예시용 React Query 커스텀 훅
 * - "example" 쿼리키로 fetchExample 실행
 * @returns React Query useQuery 리턴값 (data, isLoading, error 등)
 */
export const useExampleQuery = () =>
  useTanstackQuery({
    queryKey: ["example"],
    queryFn: fetchExample,
  });
