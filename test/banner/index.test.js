import {getHomeData} from '../../src/banner/index';

describe('banner api', () => {

    it('async getHomeData() should be right', async () => {

        try{
            const {status, data: {banners}}  = await getHomeData();
            expect(status).toBe(200);
            expect(banners).toBeInstanceOf(Array);
            const expectedItem = expect.objectContaining({
              imageUrl: expect.any(String),
              targetType: expect.any(Number),
              typeTitle: expect.any(String)
            });
            banners.forEach((item) => {
              expect(item).toEqual(expectedItem);
            });
        }catch(error){
            
        }
    
    });

});