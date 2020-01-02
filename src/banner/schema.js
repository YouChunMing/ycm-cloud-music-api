import { normalize, schema } from "normalizr";
import uuidv3 from "uuid/v3";

export function normalizeHomeData(banners) {
  const bannerSchema = new schema.Entity(
    "banners",
    {},
    {
      idAttribute: (value, parent, key) => {
        return uuidv3(value.imageUrl, uuidv3.URL);
      }
    }
  );
  const normalizedBanners = normalize(banners, [bannerSchema]);
  return normalizedBanners;
}
