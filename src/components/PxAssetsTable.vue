<template>
    <table class="table-auto border-collapse border-2 border-gray-500">
        <thead>
        <tr class="bg-gray-100 border-b-2 border-gray-400">
            <th></th>
            <th class="border border-gray-400 px-4 py-2 text-gray-800">
                <span>Ranking</span>
            </th>
            <th class="border border-gray-400 px-4 py-2 text-gray-800">Name</th>
            <th class="border border-gray-400 px-4 py-2 text-gray-800">Price</th>
            <th class="border border-gray-400 px-4 py-2 text-gray-800">Market Capital</th>
            <th class="border border-gray-400 px-4 py-2 text-gray-800">Percent change in last 24hs</th>
            <th class="hidden sm:block"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="a in assets" :key="a.id"
            class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100">
            <td>
                <img :alt="a.name" class="w-8"
                     :src="`https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`"/>
            </td>
            <td>
                <b># {{ a.rank }}</b>
            </td>
            <td>
                <router-link :to="{name:'coin-detail', params:{id:a.id}}" class="hover:underline text-green-600">
                    {{ a.name }}
                </router-link>
                <small class="ml-1 text-gray-500">{{ a.symbol }}</small>
            </td>
            <td>{{ a.priceUsd | dollar }}</td>
            <td>{{ a.marketCapUsd | dollar}}</td>
            <td :class="a.changePercent24Hr.startsWith('-')?'text-red-600':'text-green-600'">
                {{ a.changePercent24Hr | percent }}
            </td>
            <td class="hidden sm:block">
                <px-button @custom-click="detailButtonClickHandler(a.id)">
                    <span>Detail</span>
                </px-button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import pxButton from '@/components/PxButton'
    export default {
        name: 'PxAssetsTable',
        props: {
            assets: {
                type: Array,
                default: () => []
            }
        },
        components: {pxButton},
        methods:{
            detailButtonClickHandler(coinId){
                this.$router.push({name:'coin-detail', params:{id:coinId}})
            }
        }
    }
</script>

<style scoped>
    .up::before {
        content: '👆';
    }

    .down::before {
        content: '👇';
    }

    td {
        padding: 20px 0px;
        font-size: 0.6rem;
        text-align: center;
    }

    th {
        padding: 5px;
        font-size: 0.6rem;
    }

    @media (min-width: 640px) {
        td,
        th {
            padding: 20px;
            font-size: 1rem;
        }

        th {
            padding: 12px;
        }
    }
</style>
