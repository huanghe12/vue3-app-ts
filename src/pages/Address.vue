<template>
  <div>
    <NavBar title="地址管理" />
    <van-address-list
      v-if="state.from !== 'mine'"
      :list="state.list"
      default-tag-text="默认"
    />
    <van-address-list
      v-else
      :list="state.list"
      default-tag-text="默认"
      @add="onAdd"
    />
  </div>
</template>

<script setup lang="ts">
import { Address } from '@/api/address'
import NavBar from '@/components/NavBar.vue'
import { AddressListAddress } from 'vant'

const route = useRoute()
const router = useRouter()

const state = reactive({
  from: route.query.from,
  list: [] as AddressListAddress[]
})

const address = new Address()

// 获取地址列表
const getAddressListData = async () => {
  const { data } = await address.getAddressList()
  if (!data.length) return (state.list = [])
  state.list = data.map(el => {
    return {
      id: el.addressId,
      tel: el.userPhone,
      name: el.userName,
      address: `${el.provinceName} ${el.cityName} ${el.regionName} ${el.detailAddress}`,
      isDefault: !!el.defaultFlag
    } as AddressListAddress
  })
}

const onAdd = () => {
  router.push({
    path: '/address-edit',
    query: {
      type: 'add',
      from: state.from
    }
  })
}
onMounted(() => {
  getAddressListData()
})
</script>

<style scoped lang="scss">
.van-address-list {
  :deep(.van-radio__icon) {
    display: none;
  }
  :deep(.van-address-list__bottom) {
    .van-button {
      background-color: $primary;
      border-color: $primary;
    }
  }
}
</style>
