import { normalizeHomeData } from "../../src/banner/schema";
import uuidv3 from "uuid/v3";

describe("banner normalize", () => {
  it("normalize home data should be right, banner id comes from uuidv3(imageUrl, uuidv3.URL)", () => {
    const data = [
      { typeTitle: "广告一", imageUrl: "http://jpg1", targetType: 1 },
      { typeTitle: "广告二", imageUrl: "http://jpg2", targetType: 2 }
    ];

    let banners = {},
      result = [];
    data.forEach(item => {
      const id = uuidv3(item["imageUrl"], uuidv3.URL);
      (banners = {
        ...banners,
        [id]: {
          ...item
        }
      }),
        result.push(id);
    });

    const normalizedData = normalizeHomeData(data);
    expect(normalizedData).toEqual({
      entities: {
        banners: banners
      },
      result: result
    });
  });
});
