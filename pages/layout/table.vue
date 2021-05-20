<template>
  <mm_page id="page_table">
    <header>
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view url="/">
                <h3>
                  <span>表格</span>
                  <span class="fr">&lt; 返回</span>
                </h3>
              </mm_view>
            </mm_col>
          </mm_row>
        </mm_container>
      </mm_warp>
    </header>
    <main>
      <mm_warp>
        <mm_container>
          <mm_row>
            <mm_col width="100">
              <mm_view>
                <mm_btn class="btn_primary" @click.native="small = !small">切换大小</mm_btn>
                <mm_btn class="btn_primary" @click.native="invert = !invert">反色</mm_btn>
              </mm_view>
            </mm_col>
            <mm_col width="100">
              <mm_card>
                <div class="card_head">
                <span>{{ list[0].title }}</span>
                <mm_btn class="btn_primary-x fr ml-1" @click.native="$copy(list[0].code)">复制代码</mm_btn>
                <mm_btn class="btn_primary fr" @click.native="is_show(0)">显示代码</mm_btn>
                </div>
                <div class="card_body">
                  <mm_table type="1" :class="{'table-sm': small, 'invert': invert }">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </mm_table>
                </div>
              </mm_card>
            </mm_col>
            <mm_col width="100">
              <mm_card>
                <div class="card_head">
                <span>{{ list[1].title }}</span>
                <mm_btn class="btn_primary-x fr ml-1" @click.native="$copy(list[1].code)">复制代码</mm_btn>
                <mm_btn class="btn_primary fr" @click.native="is_show(1)">显示代码</mm_btn>
                </div>
                <div class="card_body">
                  <mm_table type="2" :class="{'table-sm': small, 'invert': invert }">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </mm_table>
                </div>
              </mm_card>
            </mm_col>
            <mm_col width="100">
              <mm_card>
                <div class="card_head">
                <span>{{ list[2].title }}</span>
                <mm_btn class="btn_primary-x fr ml-1" @click.native="$copy(list[2].code)">复制代码</mm_btn>
                <mm_btn class="btn_primary fr" @click.native="is_show(2)">显示代码</mm_btn>
                </div>
                <div class="card_body">
                  <mm_table type="3" :class="{'table-sm': small, 'invert': invert }">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </mm_table>
                </div>
              </mm_card>
            </mm_col>
            <mm_col width="100">
              <mm_card>
                <div class="card_head">
                <span>{{ list[3].title }}</span>
                <mm_btn class="btn_primary-x fr ml-1" @click.native="$copy(list[3].code)">复制代码</mm_btn>
                <mm_btn class="btn_primary fr" @click.native="is_show(3)">显示代码</mm_btn>
                </div>
                <div class="card_body">
                  <mm_table type="4" :class="{'table-sm': small, 'invert': invert }">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </mm_table>
                </div>
              </mm_card>
            </mm_col>
          </mm_row>
        </mm_container>
      </mm_warp>
    </main>
    <!-- 模态窗 -->
    <mm_modal v-model="show" mask="true" display="center">
      <mm_card>
        <div class="card_head center">
          <span>{{ obj.title }}</span>
        </div>
        <div class="card_body">
          <expand_pre :code="obj.code"><code class="html"></code></expand_pre>
        </div>
        <div class="card_foot">
          <mm_group><button class="btn_primary fr" @click="show = false">关闭代码</button></mm_group>
        </div>
      </mm_card>
    </mm_modal>
  </mm_page>
</template>

<script>
  export default {
    data() {
      return {
        small: false,
        invert: false,
        show: false,
        obj: {
          title:"",
          code:``
        },
        list: [
          {
            title: "样式一",
            code: `<mm_table type="1" {css}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</mm_table>`
          },
          {
            title: "样式二",
            code: `<mm_table type="2" {css}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</mm_table>`
          },
          {
            title: "样式三",
            code: `<mm_table type="3" {css}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</mm_table>`
          },
          {
            title: "样式四",
            code: `<mm_table type="4" {css}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</mm_table>`
          },
        ]
      }
    },
    methods:{
      is_show(i) {
        this.show = !this.show;
        if (this.show && i >= 0) {
          var o = JSON.stringify(this.list[i]);
          var json = JSON.parse(o);
          var code = json.code;
          var css = "";
          if(this.small || this.invert){
            css = 'class="';
            if(this.small){
              css += 'table-sm';
            }
            if(this.small && this.invert){
              css += ' ';
            }
            if(this.invert){
              css += 'invert';
            }
            css += '" ';
          }
          code = code.replace("{css}", css);
          json.code = code;
          this.obj = json;
        } else {
          this.obj = {
            title: '',
            code: ''
          };
        }
      }
    }
  }
</script>

<style>
</style>
