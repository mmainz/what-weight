import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useWeightInput } from './useWeightInput';

describe('useWeightInput', () => {
  it('sets the value on change', () => {
    const { result } = renderHook(() => useWeightInput());

    act(() => result.current.weightInputProps.onChange('2.5', 2.5));

    expect(result.current.weight).toEqual(2.5);
    expect(result.current.weightInputProps.value).toEqual('2.5');
  });

  it('sets the reps to null on unparseable value', () => {
    const { result } = renderHook(() => useWeightInput());

    act(() => result.current.weightInputProps.onChange('abc', NaN));

    expect(result.current.weight).toEqual(null);
    expect(result.current.weightInputProps.value).toEqual('abc');
  });

  it('cannot go below the minimum value on change', () => {
    const { result } = renderHook(() => useWeightInput());

    act(() => result.current.weightInputProps.onChange('0', 0));

    expect(result.current.weight).toEqual(1);
    expect(result.current.weightInputProps.value).toEqual('1');
  });

  it('sets value to 2.5 when incrementing empty input', () => {
    const { result } = renderHook(() => useWeightInput());

    act(() => result.current.weightInputProps.onIncrement());

    expect(result.current.weight).toEqual(2.5);
    expect(result.current.weightInputProps.value).toEqual('2.5');
  });

  it('increments value by 2.5 when onIncrement is called', () => {
    const { result } = renderHook(() => useWeightInput('5'));

    act(() => result.current.weightInputProps.onIncrement());

    expect(result.current.weight).toEqual(7.5);
    expect(result.current.weightInputProps.value).toEqual('7.5');
  });

  it('increments value to the next 2.5 increment when value is odd', () => {
    const { result } = renderHook(() => useWeightInput('3.5'));

    act(() => result.current.weightInputProps.onIncrement());

    expect(result.current.weight).toEqual(5);
    expect(result.current.weightInputProps.value).toEqual('5');
  });

  it('sets value to 1 when decrementing empty input', () => {
    const { result } = renderHook(() => useWeightInput());

    act(() => result.current.weightInputProps.onDecrement());

    expect(result.current.weight).toEqual(1);
    expect(result.current.weightInputProps.value).toEqual('1');
  });

  it('decrements value by 2.5 when onDecrement is called', () => {
    const { result } = renderHook(() => useWeightInput('5'));

    act(() => result.current.weightInputProps.onDecrement());

    expect(result.current.weight).toEqual(2.5);
    expect(result.current.weightInputProps.value).toEqual('2.5');
  });

  it('decrements value to the next 2.5 increment when value is odd', () => {
    const { result } = renderHook(() => useWeightInput('3.5'));

    act(() => result.current.weightInputProps.onDecrement());

    expect(result.current.weight).toEqual(2.5);
    expect(result.current.weightInputProps.value).toEqual('2.5');
  });

  it('cannot decrement below the minimum value', () => {
    const { result } = renderHook(() => useWeightInput('1'));

    act(() => result.current.weightInputProps.onDecrement());

    expect(result.current.weight).toEqual(1);
    expect(result.current.weightInputProps.value).toEqual('1');
  });
});
