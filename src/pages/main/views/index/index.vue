<template>
  <div class="entry-container" id="entry" v-cloak>
    <section class="search-container">
      <div class="inner">
        <div class="item search">
          <a href="javascript:;" class="search-link" @click="subSearch">
            <i class="fa fa-search"></i>
          </a>
          <form @submit.prevent="subSearch" autocomplete="off" action="">
            <input type="search" class="search-input" placeholder="宝贝名称" v-model="search">
          </form>
          <a href="javascript:;" v-if="search" class="fork-link" @click="clear">
            <i class="fa fa-times-circle"></i>
          </a>
        </div>
        <div class="item cart">
          <a href="javascript:;" class="link">
            <img src="~@/assets/images/cart_b.png">
            <span class="nums">{{ index_data.cartProductCount }}</span>
          </a>
        </div>
      </div>
    </section>
    <section class="banner">
      <!-- <m-swipe swipeid="swipe" ref="banner" :autoplay="0">
        <div v-for="(top, key, index) in banners" class="swiper-slide" :key="index" slot="swiper-con">
          <a :href="top.webUrl" class="link">
            <span class="img-con">
              <img :data-src="top.image" class="swiper-lazy silde-img">
            </span>
          </a>
        </div>
      </m-swipe> -->
      <div class="service">
        <div class="items">
          <img src="public/img/mobile/items.png">100%原人手制
        </div>
        <div class="items">
          <img src="public/img/mobile/items.png">限量发行
        </div>
        <div class="items">
          <img src="public/img/mobile/items.png">永久保值换购
        </div>
      </div>
    </section>
    <section class="trance">
      <div class="inner">
        <a href="javascript:;" class="items">
          <img src="public/img/mobile/index_ma.png"><br>美壶
        </a>
        <a href="javascript:;" class="items">
          <img src="public/img/mobile/index_au.png"><br>拍卖
        </a>
        <a href="javascript:;" class="items">
          <img src="public/img/mobile/index_ar.png"><br>手艺人
        </a>
        <a href="javascript:;" class="items">
          <img src="public/img/mobile/index_en.png"><br>百科
        </a>
      </div>
    </section>
    <section class="presale">
      <!-- <m-swipe swipeid="swipeN" ref="presale" :autoplay="0" :pagination="preSales.length>1" pagination-type="custom">
        <div v-for="(item, index) in preSales" class="swiper-slide" :key="index" slot="swiper-con">
          <a href="javascript:;" class="content">
            <div class="left">
              <div class="title"><img src="public/img/mobile/pre_sale.png"><span class="t">预售宝贝</span></div>
              <div class="text">距离{{ item.status === 0 ? '开始': '结束'}}时间</div>
              <div class="time"><m-time :end-time="item.discountTime" :callback="end"></m-time></div>
              <div class="tip">{{ item.advanceSaleDays }}天后发货</div>
            </div>
            <div class="right">
              <img :src="item.defaultImage">
              <div class="t"><span class="s">限额{{ item.singleCount }}位</span></div>
            </div>
          </a>
        </div>
      </m-swipe> -->
    </section>
    <section class="newsale">
      <div class="title">新品首发&nbsp;<a href="javascript:;" class="arr-link">更多&nbsp;<span class="arr"></span></a></div>
      <div class="art-list">
        <div class="line">
          <div class="inner">
            <div class="comma">
              <img src="public/img/mobile/comma_l.png"><span class="text">不止不同，美壶不断刷新</span><img src="public/img/mobile/comma_r.png">
            </div>
            <div class="txt">每一个作品<br>都有打动你的故事</div>
          </div>
        </div>
      </div>
      <div class="others">
        <ul class="line-list clearfix">
          <li class="line" v-for="(itemN, index) in newProduct" :key="index">
            <div class="inner">
              <a href="javascript:;" class="link">
                <img :src="itemN.defaultImage" class="photo">
                <span class="cont">
                  <span class="title overText">{{ itemN.name }}</span>
                  <span class="info">
                    <span class="left overText">{{ itemN.artistName }}</span>
                    <span class="right">{{ itemN.volumes[0] }}cc</span>
                  </span>
                </span>
              </a>
            </div>
          </li>
        </ul>
      </div>

    </section>
    <section class="optimization">
      <div class="title">为你优选 <a href="javascript:;" class="link">更多&nbsp;<span class="arr"></span></a></div>
      <div class="content">
        <div class="others">
          <ul class="ul clearfix">
            <li class="pro-item" v-for="(itemO, index) in preferenceProduct" :key="index">
              <a href="javascript:;" class="link">
                <img :src="itemO.defaultImage">
                <span class="sta">
                  <span class="item left" :class="[ itemO.status==0 ? 'gray' : 'red' ]"></span>
                  <span class="item right">{{ itemO.volumes[0] }}cc</span>
                </span>
              </a>
              <div class="detail">
                <div class="info">{{ itemO.artistName }}{{ itemO.name }}</div>
                <div class="time">{{ itemO.subTitle }}&nbsp;</div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </section>
    <section class="auction">
      <div class="title">拍卖<a href="javascript:;" class="link">更多&nbsp;<span class="arr"></span></a></div>
      <div class="content">
        <div class="fir">
          <a href="javascript:;" class="link">
            <img :src="auctions_fir.defaultImage">
          </a>
          <div class="sta">
            <div class="item left" :class="[ auctions_fir.status==0 ? 'gray' : 'red' ]">{{ auctions_fir.statusName }}</div>
            <div class="item right">{{ auctions_fir.bidCount }}次出价</div>
          </div>
        </div>
        <div class="others">
          <ul class="ul clearfix">
            <li class="pro-item" v-for="(itemA, index) in auctions_data" :key="index">
              <a href="javascript:;" class="link">
                <img :src="itemA.defaultImage">
                <span class="sta">
                  <span class="item left" :class="[ itemA.status==0 ? 'gray' : 'red' ]">{{ itemA.statusName }}</span>
                  <span class="item right">{{ itemA.bidCount }}次出价</span>
                </span>
              </a>
              <div class="detail">
                <div class="info">{{ itemA.name }}</div>
                <div class="time">结拍时间:&nbsp;{{ itemA.auctionTime }}</div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </section>
    <section class="artist">
      <div class="title">守艺人&nbsp;<a href="javascript:;" class="arr-link">更多&nbsp;<span class="arr"></span></a></div>
      <div class="art-list">
        <div class="line des">
          <div class="inner">
            <div class="comma">
              <img src="public/img/mobile/comma_l.png"><span class="text">30+位匠人入驻</span><img src="public/img/mobile/comma_r.png">
            </div>
            <div class="txt">心手相通<br>载大道与咫尺之器</div>
          </div>
        </div>
        <div class="line">
          <div class="inner">
            <a href="javascript:;" class="link">
              <img :src="artists_fir.defaultImage" class="photo">
            </a>
          </div>
        </div>
      </div>
      <div class="others">
        <ul class="line-list clearfix">
          <li class="line" v-for="(item, index) in artists_data" :key="index">
            <div class="inner">
              <a href="javascript:;" class="link">
                <img :src="item.defaultImage" class="photo">
              </a>
            </div>
          </li>
        </ul>
      </div>

    </section>

    <section class="recommend">
      <div class="title">精选推荐</div>
      <div class="rec-list">
        <div class="line" v-for="(item, index) in recommends" :key="index">
          <div class="inner">
            <a href="javascript:;" class="link">
              <span class="img-container">
                <img :src="item.defaultImage" class="pro-img">
                <span class="pro-mark">
                  <small class="marks" :class="'mark-' + i" v-for="(i, ind) in item.tags" :key="ind">{{ tagN[i] }}</small>
                </span>
              </span>
              <span class="pro-title overText">{{ item.name }}</span>
              <span class="pro-vtitle overTextH2">{{ item.subTitle }}</span>
              <span class="pro-v">容量：<span class="v">{{ item.volumes }}cc</span></span>
            </a>
          </div>
        </div>
      </div>
      <a href="javascript:;" class="arr-link">查看更多&nbsp;<span class="arr"></span></a>
    </section>
    <footer class="footer">
      <div class="inner">
        <a href="javascript:;" class="link chosen">
          <img src="public/img/mobile/i_home_d.png"><br>首页
        </a>
        <a href="javascript:;" class="link">
          <img src="public/img/mobile/i_hu_g.png"><br>选壶
        </a>
        <a href="javascript:;" class="link">
          <img src="public/img/mobile/i_artist_g.png"><br>守艺人
        </a>
        <a href="javascript:;" class="link">
          <img src="public/img/mobile/i_account_g.png"><br>我的
        </a>
      </div>
    </footer>
    <a href="javascript:;" class="tel-icon" @click="confirm">
      <img src="public/img/mobile/i_tel.png">
    </a>
    <confirm v-if="showConfirm" @ok="ok" @no="no" :callback="call" :title="'联系方式'" :msg="'18018320606（刘先生）'" :oktxt="'拨打'"></confirm>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import router from "@/pages/main/router.js";
import store from "@/pages/main/store.js";
import { apiHome } from "@/components/api.js";
export default {
  mounted: function() {
    let vue = this;
    apiHome({}, router, store)
      .then(response => {
        let _data = JSON.parse(response);

        vue.index_data = _data.data;
        vue.banners = _data.data.adSwiper;
        vue.preSales = _data.data.promotion;
        vue.newProduct = _data.data.newProduct;
        vue.preferenceProduct = _data.data.preferenceProduct;
        vue.auctions_fir = _data.data.auction[0];
        vue.auctions_data = _data.data.auction.slice(1);
        vue.artists_fir = _data.data.artist[0];
        vue.artists_data = _data.data.artist.slice(1);
        vue.recommends = _data.data.product;

        // console.log("-------------------------------");
        // console.log(vue.auctions_fir.status);
        // console.log("-------------------------------");
        // console.log(vue.auctions_data);
        // console.log("-------------------------------");
      })
      .catch(error => {
        console.log("error: " + error);
      });

    let swipe_banner = this.$refs.banner;
    if (swipe_banner && swipe_banner.dom) {
      this.swipe_banner = swipe_banner.dom;
    }

    let swipe_presale = this.$refs.presale;
    if (swipe_presale && swipe_presale.dom) {
      this.swipe_presale = swipe_presale.dom;
    }

    /*     window.addEventListener(
      "scroll",
      function() {
        vue.showTop = tools.getScrollTop() >= tools.getWindowHeight();
      },
      false
    ); */
  },
  data: function() {
    return {
      showTop: false,

      index_data: {},

      search: "",
      swipe_banner: "",
      swipe_presale: "",
      banners: {},
      preSales: {},
      newProduct: {},
      preferenceProduct: {},
      auctions_fir: {},
      auctions_data: {},
      artists_fir: {},
      artists_data: {},
      recommends: {},

      tagN: ["爆品", "新品上市"],

      showConfirm: false /* 显示confirm组件 */,
      msg: ""
    };
  },
  watch: {},
  methods: {
    clear() {
      let vue = this;
      vue.search = "";
    },
    subSearch() {
      // let vue = this;
      // let _url = config.searchUrl;
      // if (vue.search) {
      //   _url += vue.search;
      //   location.href = _url;
      // }
    },
    end() {},
    top() {},
    confirm(item, callback) {
      let vue = this;
      vue.showConfirm = true;
      console.log(callback);
    },
    no() {
      let vue = this;
      vue.showConfirm = false;
    },
    ok(callback, obj) {
      let vue = this;
      vue.showConfirm = false;
      if (callback) {
        callback(obj);
      }
    },
    call() {
      location.href = "tel:18018320606";
      console.log("call...");
    }
  },
  name: "index",
  components: {}
};
</script>
<style lang="scss">
@import "@/assets/styles/common.scss";
.entry-container {
  @extend %page;
  background-color: $color-f5f5f5;
  .search-container {
    position: relative;
    width: calc(710 / 750 * 100%);
    padding: 0 calc(20 / 750 * 100%);
    margin-bottom: calc(15 / 750 * 100%);
    height: 45px;
    background-color: $color-white;
    .inner {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 45px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      .item {
        position: relative;
        -moz-box-flex: 1; /* Firefox */
        -webkit-box-flex: 1; /* Safari 和 Chrome */
        box-flex: 1;
      }
      .search {
        position: relative;
        width: calc(620 / 710 * 100%);
        margin: 0 0 0 calc(20 / 710 * 100%);
        a.search-link {
          position: absolute;
          top: 50%;
          left: 3%;
          transform: translateY(-50%);
          color: $color-d8d8d8;
        }
        input.search-input {
          width: 100%;
          border: none;
          background-color: $color-f0f0f0;
          border-radius: 4px;
          height: $font-size-t24;
          line-height: $font-size-t24;
          text-indent: 12%;
        }
        a.fork-link {
          position: absolute;
          top: 50%;
          right: 3%;
          transform: translateY(-50%);
          color: $color-d8d8d8;
        }
      }
      .cart {
        width: calc(90 / 710 * 100%);
        margin: 0 calc(20 / 710 * 100%) 0 0;
        .link {
          position: relative;
          display: block;
          width: 100%;
          text-align: center;
          img {
            width: calc(36 / 90 * 100%);
          }
          .nums {
            position: absolute;
            top: -8px;
            right: 0;
            z-index: 1;
            font-size: 1.2rem;
            display: inline-block;
            width: 1.3rem;
            height: 1.3rem;
            padding: 1%;
            text-align: center;
            line-height: 1.3rem;
            color: #fff;
            background-color: #1d1d1d;
            border-radius: 50%;
          }
        }
      }
    }
  }
  .banner {
    width: 100%;
    .link {
      .img-con {
        display: block;
        width: 100%;
        padding-bottom: calc(420 / 750 * 100%);
        img.silde-img {
          position: absolute;
          top: 50%;
          left: 0;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          width: 100%;
          border: none;
        }
      }
    }
    .en-pagination {
      background-color: white;
    }
    .service {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      background-color: $color-white;
      width: calc(690 / 750 * 100%);
      padding: 0 calc(30 / 750 * 100%);
      .items {
        position: relative;
        -moz-box-flex: 1; /* Firefox */
        -webkit-box-flex: 1; /* Safari 和 Chrome */
        box-flex: 1;
        width: calc(100% / 3);
        padding: calc(25 / 750 * 100%) 0;
        text-align: center;
        color: $color-666;
        img {
          width: 12%;
          margin-right: 2%;
          vertical-align: sub;
        }
      }
    }
  }
  .trance {
    position: relative;
    width: 100%;
    padding-bottom: calc(180 / 750 * 100%);
    margin-top: calc(15 / 750 * 100%);
    .inner {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      .items {
        position: relative;
        -moz-box-flex: 1; /* Firefox */
        -webkit-box-flex: 1; /* Safari 和 Chrome */
        box-flex: 1;
        width: 25%;
        height: 100%;
        text-align: center;
        font-size: $font-size-t13;
        img {
          width: 40%;
          margin-bottom: 5%;
          margin-top: 15%;
        }
      }
    }
  }
  .presale {
    width: 100%;
    background-color: $color-white;
    margin-top: calc(15 / 750 * 100%);
    .content {
      position: relative;
      width: calc(650 / 750 * 100%);
      padding: calc(30 / 750 * 100%) calc(50 / 750 * 100%);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      .left {
        -moz-box-flex: 1; /* Firefox */
        -webkit-box-flex: 1; /* Safari 和 Chrome */
        box-flex: 1;
        align-self: flex-start;
        width: calc(372 / 650 * 100% - 2px);
        .title {
          position: relative;
          width: 100%;
          font-size: 0;
          padding-bottom: calc(42 / 372 * 100%);
          img {
            position: absolute;
            top: 12%;
            left: 0;
            width: 9%;
          }
          .t {
            position: absolute;
            top: 0;
            left: 12%;
            font-size: $font-size-t14;
          }
        }
        .text {
          width: 100%;
          color: $color-666;
          margin: 6% 0;
        }
        .time {
          width: 100%;
          margin: 6% 0;
          .time-block {
            background-color: $color-white;
            border-radius: 4px;
            border: 1px solid $color-d8d8d8;
          }
        }
        .tip {
          width: 100%;
          color: $color-905641;
        }
      }
      .right {
        width: calc(278 / 650 * 100%);
        -moz-box-flex: 1; /* Firefox */
        -webkit-box-flex: 1; /* Safari 和 Chrome */
        box-flex: 1;
        position: relative;
        border: 1px solid $color-f5f5f5;
        border-radius: 4px;
        img {
          width: 100%;
        }
        .t {
          position: absolute;
          right: -6%;
          bottom: 2%;
          border-radius: 50%;
          background-color: $color-333;
          color: $color-white;
          width: calc(90 / 278 * 100%);
          padding-bottom: calc(90 / 278 * 100%);
          .s {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            display: block;
            width: 70%;
            height: 70%;
            text-align: center;
            line-height: $font-size-t13;
          }
        }
      }
    }
    .swiper-pagination {
      text-align: left;
    }
    .swiper-container-horizontal > .swiper-pagination-bullets {
      left: 15%;
      bottom: 12%;
    }
    .swiper-pagination-bullet {
      background: $color-905641;
      margin: 0 3px;
    }
  }
  .newsale {
    width: 100%;
    background-color: $color-f5f5f5;
    padding-bottom: calc(15 / 750 * 100%);
    .title {
      width: 100%;
      text-align: center;
      font-size: $font-size-t14;
      padding: calc(40 / 750 * 100%) 0;
      .arr-link {
        display: inline-block;
        font-size: $font-size-t12;
        .arr {
          display: inline-block;
          border: 4px solid $color-f5f5f5;
          border-left-color: $color-905641;
          width: 0;
          height: 0;
        }
      }
    }
    .art-list {
      width: 100%;
      background-color: $color-white;
      .line {
        position: relative;
        width: 100%;
        padding-bottom: calc(260 / 750 * 100%);
        .inner {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          text-align: center;
          .comma {
            width: 100%;
            font-size: $font-size-t15;
            margin: 5% 0 4% 0;
            img {
              width: 6%;
              vertical-align: text-bottom;
            }
            .text {
              display: inline-block;
              margin: 0 3%;
            }
          }
          .txt {
            color: $color-666;
          }
        }
        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 1px;
          background-color: $color-f5f5f5;
        }
      }
    }
    .others {
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      .line-list {
        list-style-type: none;
        white-space: nowrap;
        .line {
          display: inline-block;
          position: relative;
          width: calc(100% / 3);
          padding-bottom: calc(360 / 750 * 100%);
          background-color: $color-white;
          .inner {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            text-align: center;
            .link {
              position: relative;
              display: block;
              width: 100%;
              height: 100%;
              img {
                position: absolute;
                left: 50%;
                top: 7.5%;
                transform: translateX(-50%);
                width: 85%;
              }
              .cont {
                position: absolute;
                bottom: 7.5%;
                left: 50%;
                transform: translateX(-50%);
                display: block;
                width: 85%;
                .title {
                  display: block;
                  width: 100%;
                  font-size: $font-size-t13;
                  line-height: $font-size-t13;
                  text-align: left;
                }
                .info {
                  display: block;
                  width: 100%;
                  font-size: $font-size-t12;
                  line-height: $font-size-t12;
                  color: $color-666;
                  .left {
                    display: block;
                    width: 50%;
                    float: left;
                    text-align: left;
                  }
                  .right {
                    display: block;
                    width: 50%;
                    float: left;
                    text-align: right;
                  }
                }
              }
            }
          }
          &:before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            display: block;
            width: 1px;
            height: 100%;
            background-color: $color-f5f5f5;
          }
          &:last-child:before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            display: block;
            width: 0;
            height: 0;
            background-color: $color-f5f5f5;
          }
        }
      }
      .ul::-webkit-scrollbar {
        display: none;
      }
    }
  }
  .optimization {
    width: 100%;
    background-color: $color-f5f5f5;
    padding-bottom: calc(15 / 750 * 100%);
    .title {
      width: 100%;
      font-size: $font-size-t14;
      text-align: center;
      padding: 4% 0;
      background-color: $color-white;
      .link {
        display: inline-block;
        font-size: $font-size-t12;
        margin-left: 2%;
        .arr {
          display: inline-block;
          border: 4px solid $color-white;
          border-left-color: $color-905641;
          width: 0;
          height: 0;
        }
      }
    }
    .content {
      width: calc(714 / 750 * 100%);
      padding: 0 calc(18 / 750 * 100%);
      background-color: $color-white;
      .others {
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        .ul {
          list-style-type: none;
          white-space: nowrap;
          .pro-item {
            position: relative;
            display: inline-block;
            width: 270px;
            text-align: center;
            margin-right: 18px;
            &:last-child {
              margin-right: 0;
            }
            .link {
              position: relative;
              display: block;
              width: 100%;
              img {
                width: 100%;
              }
              .sta {
                position: absolute;
                bottom: 0;
                right: 0;
                width: 18%;
                height: 24px;
                line-height: 24px;
                background-color: rgba(255, 255, 255, 0.2);
                color: #fff;
                text-align: right;
                .item {
                  display: inline-block;
                  width: 96%;
                }
                .left {
                  text-align: left;
                  padding-left: 4%;
                }
                .gray {
                  color: $color-999;
                }
                .red {
                  color: $color-905641;
                }
                .right {
                  text-align: center;
                }
              }
            }
            .detail {
              text-align: left;
              .info {
                font-size: $font-size-t13;
                line-height: $font-size-t13;
                min-height: $font-size-t13;
                color: $color-666;
                margin: 3% 0 3% 0;
              }
              .time {
                font-size: $font-size-t12;
                line-height: $font-size-t12;
                min-height: $font-size-t12;
                color: $color-999;
                margin: 0 0 3% 0;
              }
            }
          }
        }
        .ul::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
  .auction {
    width: 100%;
    background-color: $color-f5f5f5;
    .title {
      width: 100%;
      font-size: $font-size-t14;
      text-align: center;
      padding: 4% 0;
      background-color: $color-white;
      .link {
        display: inline-block;
        font-size: $font-size-t12;
        margin-left: 2%;
        .arr {
          display: inline-block;
          border: 4px solid $color-white;
          border-left-color: $color-905641;
          width: 0;
          height: 0;
        }
      }
    }
    .content {
      width: calc(714 / 750 * 100%);
      padding: 0 calc(18 / 750 * 100%);
      background-color: $color-white;
      .fir {
        position: relative;
        width: 100%;
        margin-bottom: calc(18 / 750 * 100%);
        .link {
          display: block;
          width: 100%;
          img {
            width: 100%;
          }
        }
        .sta {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 30px;
          line-height: 30px;
          background-color: rgba(255, 255, 255, 0.2);
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .item {
            -moz-box-flex: 1; /* Firefox */
            -webkit-box-flex: 1; /* Safari 和 Chrome */
            box-flex: 1;
            width: 20%;
          }
          .left {
            text-align: left;
            padding-left: 2%;
          }
          .gray {
            color: $color-999;
          }
          .red {
            color: $color-dab566;
          }
          .right {
            text-align: right;
            padding-right: 2%;
          }
        }
      }
      .others {
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        .ul {
          list-style-type: none;
          white-space: nowrap;
          .pro-item {
            position: relative;
            display: inline-block;
            width: 160px;
            text-align: center;
            margin-right: 2.5%;
            &:last-child {
              margin-right: 0;
            }
            .link {
              position: relative;
              display: block;
              width: 100%;
              img {
                width: 100%;
              }
              .sta {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 24px;
                line-height: 24px;
                background-color: rgba(255, 255, 255, 0.2);
                color: #fff;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .item {
                  display: inline-block;
                  -moz-box-flex: 1; /* Firefox */
                  -webkit-box-flex: 1; /* Safari 和 Chrome */
                  box-flex: 1;
                  width: 40%;
                }
                .left {
                  text-align: left;
                  padding-left: 4%;
                }
                .gray {
                  color: $color-999;
                }
                .red {
                  color: $color-905641;
                }
                .right {
                  text-align: right;
                  padding-right: 4%;
                }
              }
            }
            .detail {
              text-align: left;
              .info {
                font-size: $font-size-t13;
                line-height: $font-size-t13;
                color: $color-666;
                margin: 10% 0 5% 0;
              }
              .time {
                font-size: $font-size-t12;
                line-height: $font-size-t12;
                color: $color-999;
                margin: 0 0 10% 0;
              }
            }
          }
        }
        .ul::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
  .artist {
    width: 100%;
    background-color: $color-f5f5f5;
    padding-bottom: calc(15 / 750 * 100%);
    .title {
      width: 100%;
      text-align: center;
      font-size: $font-size-t14;
      padding: calc(40 / 750 * 100%) 0;
      .arr-link {
        display: inline-block;
        font-size: $font-size-t12;
        .arr {
          display: inline-block;
          border: 4px solid $color-f5f5f5;
          border-left-color: $color-905641;
          width: 0;
          height: 0;
        }
      }
    }
    .art-list {
      width: 100%;
      background-color: $color-white;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      .line {
        position: relative;
        -moz-box-flex: 1; /* Firefox */
        -webkit-box-flex: 1; /* Safari 和 Chrome */
        box-flex: 1;
        width: calc(100% / 3);
        padding-bottom: calc(226 / 750 * 100%);
        .inner {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          text-align: center;
          .link {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            img {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              width: 85%;
            }
          }
        }
        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 1px;
          background-color: $color-f5f5f5;
        }
        &.des {
          width: calc(100% / 3 * 2);
          .inner > .comma {
            width: 100%;
            font-size: $font-size-t15;
            margin: 8% 0 4% 0;
            img {
              width: 9%;
              vertical-align: text-bottom;
            }
            .text {
              display: inline-block;
              margin: 0 3%;
            }
          }
          .txt {
            color: $color-666;
          }
          &:before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            display: block;
            width: 1px;
            height: 100%;
            background-color: $color-f5f5f5;
          }
          &:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 1px;
            background-color: $color-f5f5f5;
          }
        }
      }
    }
    .others {
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      .line-list {
        list-style-type: none;
        white-space: nowrap;
        .line {
          display: inline-block;
          position: relative;
          width: calc(100% / 3);
          padding-bottom: calc(226 / 750 * 100%);
          background-color: $color-white;
          .inner {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            text-align: center;
            .link {
              position: relative;
              display: block;
              width: 100%;
              height: 100%;
              img {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 85%;
              }
            }
          }
          &:before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            display: block;
            width: 1px;
            height: 100%;
            background-color: $color-f5f5f5;
          }
          &:last-child:before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            display: block;
            width: 0;
            height: 0;
            background-color: $color-f5f5f5;
          }
        }
      }
      .ul::-webkit-scrollbar {
        display: none;
      }
    }
  }
  .recommend {
    width: 100%;
    background-color: $color-f5f5f5;
    padding-bottom: calc(15 / 750 * 100%);
    .title {
      width: 100%;
      font-size: $font-size-t14;
      text-align: center;
      padding: 5% 0;
      background-color: $color-white;
    }
    .rec-list {
      width: 100%;
      background-color: $color-white;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      .line {
        position: relative;
        -moz-box-flex: 1; /* Firefox */
        -webkit-box-flex: 1; /* Safari 和 Chrome */
        box-flex: 1;
        width: 50%;
        padding-bottom: calc(540 / 750 * 100%);
        border-top: 1px solid $color-f5f5f5;
        .inner {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          text-align: center;
          .link {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            text-align: left;
            .img-container {
              position: relative;
              width: 100%;
              display: block;
              text-align: center;
              .pro-img {
                margin: 10% auto 0;
                width: 80%;
              }
              .pro-mark {
                position: absolute;
                bottom: 10px;
                right: 10px;
                display: inline-block;
                width: 100%;
                text-align: right;
                .marks {
                  display: inline-block;
                  padding: 1.5% 4%;
                  margin-left: 7%;
                }
                .mark-0 {
                  background-color: $color-dab566;
                  color: $color-white;
                }
                .mark-1 {
                  background-color: $color-993333;
                  color: $color-white;
                }
                .mark-2 {
                  background-color: $color-993333;
                  color: $color-white;
                }
              }
            }
            .pro-title {
              display: block;
              width: calc(295 / 375 * 100%);
              margin: 7% calc(40 / 375 * 100%) 0 calc(40 / 375 * 100%);
              line-height: $font-size-t16;
              font-size: $font-size-t13;
            }
            .pro-price {
              display: inline-block;
              width: calc(295 / 375 * 100%);
              margin: 0 calc(40 / 375 * 100%);
              color: $color-993333;
              font-size: $font-size-t14;
              line-height: $font-size-t14;
              .del {
                margin-left: 2%;
                font-size: $font-size-t12;
                color: $color-999;
              }
            }
            .pro-vtitle {
              width: calc(295 / 375 * 100%);
              margin: 3% calc(40 / 375 * 100%) 0 calc(40 / 375 * 100%);
              line-height: $font-size-t16;
              color: $color-999;
              height: $font-size-t32;
            }
            .pro-v {
              display: block;
              width: calc(295 / 375 * 100%);
              margin: 3% calc(40 / 375 * 100%) 0 calc(40 / 375 * 100%);
              line-height: $font-size-t12;
              .v {
                color: $color-999;
              }
            }
          }
        }
        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 1px;
          background-color: $color-f5f5f5;
        }
        &:nth-child(2n-1):after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          display: block;
          width: 1px;
          height: 100%;
          background-color: $color-f5f5f5;
        }
      }
    }
    .arr-link {
      display: block;
      width: 50%;
      font-size: $font-size-t12;
      margin: 4% auto;
      text-align: center;
      color: $color-666;
      .arr {
        display: inline-block;
        border: 4px solid $color-f5f5f5;
        border-left-color: $color-905641;
        width: 0;
        height: 0;
      }
    }
  }
  .footer {
    position: relative;
    width: 100%;
    height: 49px;
    .inner {
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 3;
      background-color: $color-white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      height: 49px;
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        display: block;
        padding-bottom: 49px;
        width: 100%;
      }
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        height: 1px;
        width: 100%;
        background-color: $color-e6e6e6;
      }
      .link {
        display: block;
        position: relative;
        -moz-box-flex: 1; /* Firefox */
        -webkit-box-flex: 1; /* Safari 和 Chrome */
        box-flex: 1;
        width: calc(140 / 750 * 100%);
        text-align: center;
        padding-top: 2%;
        color: $color-666;
        img {
          width: 28%;
          margin-bottom: 5%;
        }
        &.chosen {
          color: $color-black;
        }
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  .fade-choose-enter-active,
  .fade-choose-leave-active {
    transition: opacity 0.5s;
  }
  .fade-choose-leave,
  .fade-choose-leave-active {
    display: none;
  }
  .fade-choose-enter,
  .fade-choose-leave-active {
    opacity: 0;
  }
  .tel-icon {
    position: fixed;
    right: 0;
    bottom: 18%;
    z-index: 2;
    display: block;
    width: 15%;
    img {
      width: 100%;
    }
  }

  .gift-pop {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    .inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      .img-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
        a.close {
          position: absolute;
          bottom: 0;
          left: 50%;
          z-index: 102;
          transform: translateX(-50%);
          display: block;
          width: 20%;
          padding-bottom: 20%;
        }
        a.link {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 101;
          display: block;
          width: 100%;
          height: 100%;
        }
        img {
          width: 100%;
        }
      }
    }
  }
  .gift-icon {
    position: fixed;
    right: 0;
    bottom: 10%;
    z-index: 2;
    display: block;
    width: 15%;
    img {
      width: 100%;
    }
  }
  .top {
    position: fixed;
    right: 3%;
    bottom: 10%;
    width: 10.6%;
    img {
      width: 100%;
    }
  }
}
</style>
