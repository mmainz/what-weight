import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { useRepsInput } from './useRepsInput';

describe('useRepsInput', () => {
  it('sets the value on change', () => {
    const { result } = renderHook(() => useRepsInput());

    act(() => result.current.repsInputProps.onChange('2', 2));

    expect(result.current.reps).toEqual(2);
    expect(result.current.repsInputProps.value).toEqual('2');
  });

  it('sets the reps to null on unparseable value', () => {
    const { result } = renderHook(() => useRepsInput());

    act(() => result.current.repsInputProps.onChange('abc', NaN));

    expect(result.current.reps).toEqual(null);
    expect(result.current.repsInputProps.value).toEqual('abc');
  });

  it('cannot go above the maximum value on change', () => {
    const { result } = renderHook(() => useRepsInput());

    act(() => result.current.repsInputProps.onChange('11', 11));

    expect(result.current.reps).toEqual(10);
    expect(result.current.repsInputProps.value).toEqual('10');
  });

  it('cannot go below the minimum value on change', () => {
    const { result } = renderHook(() => useRepsInput());

    act(() => result.current.repsInputProps.onChange('0', 0));

    expect(result.current.reps).toEqual(1);
    expect(result.current.repsInputProps.value).toEqual('1');
  });

  it('sets value to 1 when incrementing empty input', () => {
    const { result } = renderHook(() => useRepsInput());

    act(() => result.current.repsInputProps.onIncrement());

    expect(result.current.reps).toEqual(1);
    expect(result.current.repsInputProps.value).toEqual('1');
  });

  it('increments value by 1 when onIncrement is called', () => {
    const { result } = renderHook(() => useRepsInput('2'));

    act(() => result.current.repsInputProps.onIncrement());

    expect(result.current.reps).toEqual(3);
    expect(result.current.repsInputProps.value).toEqual('3');
  });

  it('cannot increment above the maximum value', () => {
    const { result } = renderHook(() => useRepsInput('10'));

    act(() => result.current.repsInputProps.onIncrement());

    expect(result.current.reps).toEqual(10);
    expect(result.current.repsInputProps.value).toEqual('10');
  });

  it('sets value to 1 when decrementing empty input', () => {
    const { result } = renderHook(() => useRepsInput());

    act(() => result.current.repsInputProps.onDecrement());

    expect(result.current.reps).toEqual(1);
    expect(result.current.repsInputProps.value).toEqual('1');
  });

  it('decrements value by 1 when onDecrement is called', () => {
    const { result } = renderHook(() => useRepsInput('3'));

    act(() => result.current.repsInputProps.onDecrement());

    expect(result.current.reps).toEqual(2);
    expect(result.current.repsInputProps.value).toEqual('2');
  });

  it('cannot decrement below the minimum value', () => {
    const { result } = renderHook(() => useRepsInput('1'));

    act(() => result.current.repsInputProps.onDecrement());

    expect(result.current.reps).toEqual(1);
    expect(result.current.repsInputProps.value).toEqual('1');
  });
});
