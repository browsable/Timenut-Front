<template>
    <p>{{greeting}} world!</p>
</template>

<script>
module.export = {
    data: function () {
        return {
            greeting: 'Hello'
        }
    }
}
</script>
<style scoped>
    p{
        font-size: 2em;
        text-align: center;
    }
</style>