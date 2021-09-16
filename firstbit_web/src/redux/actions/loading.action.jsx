// Store
import store from "../store";

const SHOW_LOADING = "SHOW_LOADING";
const HIDE_LOADING = "HIDE_LOADING";

export function showLoading(duration = 0) {
  store.dispatch({
    type: SHOW_LOADING,
  });

  if (duration > 0) {
    setTimeout(() => hideLoading(), duration);
  }
}

export function hideLoading() {
  store.dispatch({
    type: HIDE_LOADING,
  });
}
