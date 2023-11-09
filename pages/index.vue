<script setup>
    const src=ref("https://imgs.search.brave.com/0QZS3THguCX-WvFnR3sg8pAsOfBup_jh2hfEU1TzSPI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg0/OTIwNTY1L2ZyL3Bo/b3RvL2NoaWVuLWV0/LWNoYXQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPURnTmV1/ZDBxM3JwekNNelQ2/RUJGVVV0UUJnWF9t/VWJJMTBFbERJMmdz/dXc9");
</script>

<template>
    <p>My page 1</p>

    <AppInfo>
        <p>This is my info layout</p>
    </AppInfo>

    <div class="image">
        <img v-bind:src="src" alt="chat"/>
    </div>
</template>