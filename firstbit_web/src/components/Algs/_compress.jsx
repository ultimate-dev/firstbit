// Actions
import { showLoading, hideLoading } from "../../redux/actions";
// Helpers
import { post } from "../../helpers/http.helper";

export default async function compress(endpoint, data, cb, err) {
  if (data && data.file) {
    let formData = new FormData();
    formData.append("image", data.file);
    formData.append("settings", JSON.stringify(data.settings));
    showLoading();
    await post("/" + endpoint, formData).then((res) => {
      if (!res.error) {
        cb(res.output);
      } else {
        err({ message: res.message });
      }
      hideLoading();
    });
  }
}
