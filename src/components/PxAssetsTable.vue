<template>
    <table class="table-auto border-collapse border-2 border-gray-500">
        <thead>
        <tr class="bg-gray-100 border-b-2 border-gray-400">
            <th></th>
            <th :class="{ up: this.sortOrder === 1, down: this.sortOrder === -1 }">
                <span class="underline cursor-pointer" @click="changeSortOrderHandler">Ranking</span>
            </th>
            <th class="border border-gray-400 px-4 py-2 text-gray-800">Name</th>
            <th class="border border-gray-400 px-4 py-2 text-gray-800">Price</th>
            <th class="border border-gray-400 px-4 py-2 text-gray-800">Market Capital</th>
            <th class="border border-gray-400 px-4 py-2 text-gray-800">Percent change in last 24hs</th>
            <th class="hidden sm:block">
                <input class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal"
                        id="filter" placeholder="Filter..."
                        type="text" v-model="filter"
                />
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="a in filteredAssets" :key="a.id"
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
        data(){
            return {
                filter: '',
                sortOrder: 1
            }
        },

        computed: {
            filteredAssets() {
                return this.assets.filter((asset) =>
                    asset.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
                    asset.name.toLowerCase().includes(this.filter.toLowerCase())
                ).sort((a, b) => {
                    /*if (parseInt(a.rank) > parseInt(b.rank)) {
                        return this.sortOrder;  // a,b => a-b < 0;    b,a => a-b> 0
                    }
                    return this.sortOrder * -1;*/
                    return (parseInt(a.rank) - parseInt(b.rank))*(this.sortOrder===1?1:-1)
                });
            }
        },
        methods:{
            detailButtonClickHandler(coinId){
                this.$router.push({name:'coin-detail', params:{id:coinId}})
            },
            changeSortOrderHandler(){
                return this.sortOrder *= (-1);
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
