<template>
<v-col cols="12" xl="6">
    <v-hover>
        <v-card class="mx">
        <v-list-item three-line>
        <v-list-item-content>
            <div class="text-overline mb-4">
            07 Jan 2022
            </div>
        </v-list-item-content>

        <v-list-item-avatar
            tile
            size="80"
            color="grey"
        ></v-list-item-avatar>
        </v-list-item>

        </v-card>
    </v-hover>
</v-col>
</template>

<script>
export default {
    name: 'event',
    props: ['event']
};
</script>