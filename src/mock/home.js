import Mock from 'mockjs'

export default {
  getHomeData: () => {
    return {
      code: 20000,
      data: {
        videoData: [
          {
            name: 'SpringBoot',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'vue',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'node',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: '小程序',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'react',
            value: Mock.Random.float(1000, 10000, 0, 2)
          }
        ]
      }
    }
  }
}
