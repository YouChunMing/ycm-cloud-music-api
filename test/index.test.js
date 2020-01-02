import * as Api from "../src/index";

describe("Api", () => {
  it("从Api中导出了banner模块", () => {
    const expectedApi = expect.objectContaining({
      banner: expect.any(Object)
    });
    expect(Api).toEqual(expectedApi);
  });
});
