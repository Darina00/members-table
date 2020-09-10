<template>
    <div class="v-table">
        <div class="v-table__header">
            <p @click="sortByID">№ <i class="material-icons">unfold_more</i></p>
            <p @click="sortByName">Name <i class="material-icons">unfold_more</i></p>
            <p @click="sortByPosition">Position <i class="material-icons">unfold_more</i></p>
        </div>
        <div class="v-table__body">
            <v-table-row 
                v-for="row in paginatedMembers"
                :key="row.id"
                :row_data="row"
            />
        </div>
        <div class="v-table__pagination">
            <div class="page"
                v-for="page in pages"
                :key="page"
                @click="pageClick(page)"
                :class="{'page__selected' : page === pageNumber}"
            >
                {{ page }}
            </div>
        </div>
    </div>
</template>

<script>
import vTableRow from './v-table-row';
export default {
    name: "v-table",
    components: {
        vTableRow,
    },
    props: {
        members_data: {
            type: Array,
            default: () => {
                return [];
            }
        },
    },
    mounted() {
        this.pageNumber = Number(this.$route.query.page);
    },
    data() {
        return {
            membersPerPage: 5,
            pageNumber: this.$route.query.page,
        }
    },
    computed: {
        pages() {
            return Math.ceil(this.members_data.length / this.membersPerPage);
        },
        paginatedMembers() {
            let from = (this.pageNumber -1) * this.membersPerPage;
            let to= from + this.membersPerPage;
            return this.members_data.slice(from, to);
        }
    },
    methods: {
        pageClick(page) {
            this.pageNumber = page;
            this.$router.push( { name:'home', query: { page: page } } )
        },
        sortByID() {
            this.members_data.sort( (a,b) => b.id - a.id )
        },
        sortByName() {
            this.members_data.sort( (a,b) => a.name.localeCompare(b.name) )
        },
        sortByPosition() {
            this.members_data.sort( (a,b) => a.position.localeCompare(b.position) )
        },
    }
}
</script>

<style scoped>
.v-table {
    max-width: 900px;
    margin: 0 auto;
}

.v-table__header {
    display: flex;
    justify-content: space-around;
    border-bottom: solid 1px #e7e7e7;
}

.v-table__header p {
    display: flex;
    align-items: center;
    flex-basis: 25%;
    text-align: left;
    cursor: pointer;
}

.v-table__pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
}

.page {
    padding: 8px;
    border: solid 1px #e7e7e7;
    margin-right: 10px;
}

.page:hover {
    background: #aeaeae;
    cursor: pointer;
    color: #ffffff;
}

.page__selected {
    background: #aeaeae;
    cursor: pointer;
    color: #ffffff;
}
</style>