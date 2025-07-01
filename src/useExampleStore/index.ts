import { create } from 'zustand';

import type { ExampleState } from './type';

/**
 * 전역 상태 관리용 예제 Zustand 스토어
 * - count: 숫자 상태
 * - increase: count 값을 1 증가시키는 함수
 *
 * @example
 * const { count, increase } = useExampleStore();
 */
export const useExampleStore = create<ExampleState>(set => ({
  count: 0,
  increase: () => set(state => ({ count: state.count + 1 })),
}));
