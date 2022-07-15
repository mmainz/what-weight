import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useRpeInput } from './useRpeInput';

describe('useRpeInput', () => {
  it('sets the value on change', () => {
    const { result } = renderHook(() => useRpeInput());

    act(() => result.current.rpeInputProps.onChange('6', 6));

    expect(result.current.rpe).toEqual(6);
    expect(result.current.rpeInputProps.value).toEqual('6');
  });

  it('sets the reps to null on unparseable value', () => {
    const { result } = renderHook(() => useRpeInput());

    act(() => result.current.rpeInputProps.onChange('abc', NaN));

    expect(result.current.rpe).toEqual(null);
    expect(result.current.rpeInputProps.value).toEqual('abc');
  });

  it('cannot go above the maximum value on change', () => {
    const { result } = renderHook(() => useRpeInput());

    act(() => result.current.rpeInputProps.onChange('11', 11));

    expect(result.current.rpe).toEqual(10);
    expect(result.current.rpeInputProps.value).toEqual('10');
  });

  it('cannot go below the minimum value on change', () => {
    const { result } = renderHook(() => useRpeInput());

    act(() => result.current.rpeInputProps.onChange('5', 5));

    expect(result.current.rpe).toEqual(6);
    expect(result.current.rpeInputProps.value).toEqual('6');
  });

  it('sets value to 6 when incrementing empty input', () => {
    const { result } = renderHook(() => useRpeInput());

    act(() => result.current.rpeInputProps.onIncrement());

    expect(result.current.rpe).toEqual(6);
    expect(result.current.rpeInputProps.value).toEqual('6');
  });

  it('increments value by 0.5 when onIncrement is called', () => {
    const { result } = renderHook(() => useRpeInput('6'));

    act(() => result.current.rpeInputProps.onIncrement());

    expect(result.current.rpe).toEqual(6.5);
    expect(result.current.rpeInputProps.value).toEqual('6.5');
  });

  it('cannot increment above the maximum value', () => {
    const { result } = renderHook(() => useRpeInput('10'));

    act(() => result.current.rpeInputProps.onIncrement());

    expect(result.current.rpe).toEqual(10);
    expect(result.current.rpeInputProps.value).toEqual('10');
  });

  it('sets value to 6 when decrementing empty input', () => {
    const { result } = renderHook(() => useRpeInput());

    act(() => result.current.rpeInputProps.onDecrement());

    expect(result.current.rpe).toEqual(6);
    expect(result.current.rpeInputProps.value).toEqual('6');
  });

  it('decrements value by 0.5 when onDecrement is called', () => {
    const { result } = renderHook(() => useRpeInput('7'));

    act(() => result.current.rpeInputProps.onDecrement());

    expect(result.current.rpe).toEqual(6.5);
    expect(result.current.rpeInputProps.value).toEqual('6.5');
  });

  it('cannot decrement below the minimum value', () => {
    const { result } = renderHook(() => useRpeInput('6'));

    act(() => result.current.rpeInputProps.onDecrement());

    expect(result.current.rpe).toEqual(6);
    expect(result.current.rpeInputProps.value).toEqual('6');
  });
});
