<template>
    <List :data="gridData" :columns="gridColumns"></List>
</template>

<script>
    import List from './List';


    export default {
        name: 'Trajets',
            data() {
            return {
                gridData: [
                    { key: '1', name: 'American alligator', location: 'Southeast United States' },
                    { key: '2', name: 'Chinese alligator', location: 'Eastern China' },
                    { key: '3', name: 'Spectacled caiman', location: 'Central & South America' },
                    { key: '4', name: 'Broad-snouted caiman', location: 'South America' },
                    { key: '5', name: 'Jacaré caiman', location: 'South America' },
                    { key: '6', name: 'Black caiman', location: 'South America' },
                ],
                gridColumns: ['name', 'location'],
            }
        },
        components: {
            List
        }
    }
</script>