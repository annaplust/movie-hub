export const createMockResource = <T>(initialValue: T, loading = false) => {
  let value = initialValue;
  let loadingState = loading;
  return {
    value: () => value,
    isLoading: () => loadingState,
    setValue: (newValue: T) => (value = newValue),
    setLoading: (isLoading: boolean) => (loadingState = isLoading),
  };
};
