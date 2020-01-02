import { getHomeData } from "../../src/banner/index";
import HTTPClient from "../../src/httpClient";

jest.mock("../../src/httpClient");

describe("banner api", () => {
  it("get banner home data successfully", async () => {
    const mockedData = require("./banner.json");

    HTTPClient.get.mockImplementationOnce((url, config) => {
      return Promise.resolve({
        data: mockedData
      });
    });

    const { data } = await getHomeData();

    expect(data).toEqual(
      expect.objectContaining({
        entities: expect.any(Object),
        result: expect.any(Array)
      })
    );

    data.result.forEach((item, index) => {
      expect(data.entities.banners[item]).toEqual(mockedData.banners[index]);
    });
  });
});
