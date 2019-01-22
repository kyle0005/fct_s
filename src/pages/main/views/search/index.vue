<template>
  <div class="isearch-container" id="isearch" v-cloak>
    <section class="search-container">
      <div class="inner">
        <a href="javascript:;">
          <img src="public/img/mobile/search_logo.png" class="logo">
        </a>
        <form @submit.prevent="subSearch" autocomplete="off" action="">
          <input type="search" class="search-input" placeholder="" v-model="search">
        </form>
        <a href="javascript:;" class="search-link" @click="subSearch">
          <i class="fa fa-search"></i>
        </a>
        <a href="javascript:;" v-if="search" class="fork-link" @click="clear">
          <i class="fa fa-times-circle"></i>
        </a>
      </div>
    </section>
    <section class="content">
      <ul class="list">
        <li class="item" v-for="(item, index) in isearch" :key="index" 
            :class="{'artist-n':item.fromType==='artist'&&!item.extras,'artist-t':item.fromType==='artist'&&item.extras,category:item.fromType==='category',product:item.fromType==='product'}">
          <a href="javascript:;" class="link">
            <img :src="item.defaultImage" class="img">
            <span class="con">
              <span class="name">{{ item.name }}<span v-if="item.fromType=='artist'&&item.extras">({{ item.extras.birthday }})</span></span>
              <span class="text overTextH3" v-if="!item.extras||item.fromType==='product'">{{ item.intro }}</span>
              <span class="text overTextH3" v-if="item.fromType=='artist'&&item.extras">职称：{{ item.extras.title }}</span>
              <span class="text overTextH3" v-if="item.fromType=='artist'&&item.extras">专业：{{ item.extras.major }}</span>
              <span class="text overTextH3" v-if="item.fromType=='artist'&&item.extras">评审日期：{{ item.extras.reviewDate }}</span>
              <span class="price" v-if="item.fromType=='product'">{{ item.extras.stockCount > 0 ? '有货' : '无货' }}</span>
              <!--<span class="price" v-if="item.fromType=='product'"><small>￥</small>{{ item.extras.salePrice }}</span>-->

            </span>
          </a>
          <div class="btn-container" v-if="item.fromType=='product'">
            <a href="javascript:;" class="btn">立即购买</a>
          </div>
        </li>


        <!--<li class="item artist-n">
          <a href="javascript:;" class="link">
            <img src="public/img/mobile/resource/pro01.png" class="img">
            <span class="con">
              <span class="name">顾景舟</span>
              <span class="text overTextH3">简介：简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</span>
            </span>
          </a>
        </li>
        <li class="item artist-t">
          <a href="javascript:;" class="link">
            <img src="public/img/mobile/resource/pro01.png" class="img">
            <span class="con">
              <span class="name">顾景舟(1915-～～)</span>
              <span class="text overTextH3">职称：中国工艺美术师</span>
              <span class="text overTextH3">专业：制壶</span>
              <span class="text overTextH3">评审日期：2015年09月09日</span>
            </span>
          </a>
        </li>
        <li class="item category">
          <a href="javascript:;" class="link">
            <img src="public/img/mobile/resource/pro01.png" class="img">
            <span class="con">
              <span class="name">半月</span>
              <span class="text overTextH3">简介：简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</span>
            </span>
          </a>
        </li>
        <li class="item product">
          <a href="javascript:;" class="link">
            <img src="public/img/mobile/resource/pro01.png" class="img">
            <span class="con">
              <span class="name">梅花信xx 顾景舟</span>
              <span class="text overTextH3">品质一流 xxxxxx</span>
              <span class="price"><small>￥</small>234.00</span>
            </span>
          </a>
          <div class="btn-container">
            <a href="javascript:;" class="btn">立即购买</a>
          </div>
        </li>-->
      </ul>
      <no-data v-if="nodata" :imgurl="'public/img/mobile/no_data.png'" :text="'当前没有相关数据哟~'"></no-data>
      <img src="public/img/mobile/img_loader_s.gif" class="list-loader" v-if="listloading">
    </section>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  mounted: function() {},
  data: function() {
    return {};
  },
  watch: {},
  methods: {},
  name: "search",
  components: {}
};
</script>
<style lang="scss">
@import "@/assets/styles/common.scss";
.isearch-container {
  @extend %page;
  background-color: $color-f5f5f5;
  .search-container {
    position: relative;
    width: 100%;
    padding: 0 0 calc(90 / 750 * 100%) 0;
    margin-bottom: calc(18 / 750 * 100%);
    background-color: $color-white;
    .inner {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: calc(710 / 750 * 100%);
      height: 100%;
      .logo {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: calc(150 / 710 * 100%);
      }
      .search-input {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: calc(510 / 710 * 100%);
        padding: 0 calc(21 / 710 * 100%) 0 calc(71 / 710 * 100%);
        border: none;
        background-color: $color-f0f0f0;
        border-radius: 4px;
        height: 2.6rem;
        line-height: 2.6rem;
      }
      .search-link {
        position: absolute;
        top: 50%;
        left: 29%;
        transform: translateY(-50%);
        display: block;
        color: $color-999;
        width: $font-size-t26;
        height: $font-size-t26;
        line-height: $font-size-t26;
        text-align: center;
      }
      a.fork-link {
        position: absolute;
        top: 50%;
        right: 3%;
        transform: translateY(-50%);
        color: $color-d8d8d8;
      }
    }
  }
  .content {
    width: 100%;
    .list {
      width: 100%;
      background-color: $color-f5f5f5;
      .item {
        position: relative;
        width: 100%;
        background-color: $color-white;
        margin-bottom: calc(2 / 750 * 100%);
        &.artist-n {
          padding-bottom: calc(230 / 750 * 100%);
          .img {
            position: absolute;
            left: calc(44 / 750 * 100%);
            top: 50%;
            transform: translateY(-50%);
            width: calc(150 / 750 * 100%);
            border-radius: 50%;
          }
          .con {
            display: block;
            width: calc(512 / 750 * 100%);
            margin-left: calc(238 / 750 * 100%);
            .name {
              display: block;
              padding-top: 6%;
              font-size: $font-size-t13;
            }
            .text {
              width: 95%;
              padding-top: 2%;
              color: $color-999;
            }
          }
        }
        &.artist-t {
          padding-bottom: calc(230 / 750 * 100%);
          .img {
            position: absolute;
            left: calc(44 / 750 * 100%);
            top: 50%;
            transform: translateY(-50%);
            width: calc(150 / 750 * 100%);
            border-radius: 50%;
          }
          .con {
            display: block;
            width: calc(512 / 750 * 100%);
            margin-left: calc(238 / 750 * 100%);
            .name {
              display: block;
              padding-top: 6%;
              font-size: $font-size-t13;
            }
            .text {
              padding-top: 1%;
              color: $color-999;
            }
          }
        }
        &.category {
          padding-bottom: calc(220 / 750 * 100%);
          .img {
            position: absolute;
            left: calc(44 / 750 * 100%);
            top: 50%;
            transform: translateY(-50%);
            width: calc(150 / 750 * 100%);
          }
          .con {
            display: block;
            width: calc(512 / 750 * 100%);
            margin-left: calc(238 / 750 * 100%);
            .name {
              display: block;
              padding-top: 6%;
              font-size: $font-size-t13;
            }
            .text {
              width: 95%;
              padding-top: 2%;
              color: $color-999;
            }
          }
        }
        &.product {
          padding-bottom: calc(240 / 750 * 100%);
          .img {
            position: absolute;
            left: calc(38 / 750 * 100%);
            top: 50%;
            transform: translateY(-50%);
            width: calc(160 / 750 * 100%);
          }
          .con {
            position: relative;
            display: block;
            width: calc(500 / 750 * 100%);
            height: 100%;
            margin-left: calc(250 / 750 * 100%);
            .name {
              display: block;
              padding-top: 7%;
              font-size: $font-size-t13;
            }
            .text {
              padding-top: 1%;
              color: $color-999;
            }
            .price {
              position: absolute;
              left: 0;
              bottom: calc(80 / 500 * 100%);
              display: block;
              color: $color-993333;
              font-size: $font-size-t13;
            }
          }
          .btn-container {
            display: block;
            position: absolute;
            right: calc(30 / 750 * 100%);
            bottom: calc(280 / 750 * 100%);
            width: calc(140 / 750 * 100%);
            a.btn {
              position: absolute;
              @include wei-bg-btn(
                $color-white,
                $color-333,
                $color-333,
                28px,
                28px,
                $font-size-t12
              );
              @include fillet(false);
            }
          }
        }
        .link {
          position: absolute;
          left: 0;
          top: 0;
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
