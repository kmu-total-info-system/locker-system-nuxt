<template>
    <v-select label="사물함 선택하기"
              filled
              :items="items"
              item-text="num"
              item-value="num"
              persistent-hint
              autocomplete>
        <template slot="selection" slot-scope="data">
            {{data.item.group}} - {{ data.item.num }}
        </template>
        <template slot="item" slot-scope="data">
            <template>
                <v-list-tile-content>
                    <v-list-tile-title>{{data.item.group}} - {{ data.item.num }}
                    </v-list-tile-title>
                </v-list-tile-content>
            </template>
        </template>
    </v-select>
</template>

<script>
    export default {
        name: "Select",
        props: [
            'items',
        ],
        data() {
            return {
                e11: {group: ''},
                people: [
                    {header: 'Group 1'},
                    {name: 'Sandra Adams', group: 'Group 1'},
                    {name: 'Ali Connors', group: 'Group 1'},
                    {name: 'Trevor Hansen', group: 'Group 1'},
                    {name: 'Tucker Smith', group: 'Group 1'},
                    {divider: true},
                    {header: 'Group 2'},
                    {name: 'Britta Holt', group: 'Group 2'},
                    {name: 'Jane Smith ', group: 'Group 2'},
                    {name: 'John Smith', group: 'Group 2'},
                    {name: 'Sandra Williams', group: 'Group 2'}
                ]
            }
        },
        watch: {
            e11: function (newValue, oldValue) {
                console.log(newValue, oldValue)
            }
        }
    }
</script>

<style scoped>

</style>
