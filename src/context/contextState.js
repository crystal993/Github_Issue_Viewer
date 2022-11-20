export const loadingState = {
  loading: true,
  data: [],
  error: null,
};

export const detailSuccess = data => ({
  loading: false,
  data,
  error: null,
});

export const mainSuccess = data => ({
  loading: false,
  data: data,
  error: null,
});

export const errors = error => ({
  loading: false,
  data: null,
  error: error,
});
