  <template>
      <div>
      </div>
  </template>


  <script>
      import apiRequest from 'util/axios';

      export default {
      name: `test`,
      components: {
          TList,
          TBox,
          TBoxTitle
      },
      data() {
          return {
          }
      },
      methods: {
          async testAxios () {
              try {
                  const response = await apiRequest.test.getName();
                  if(response.success) {
                      // 내용
                  }
              } catch (e) {
                  console.error(e)
              }

      }
  }

  </script>

  <style scoped>
  </style>
