<template>
    <div>
        <a-upload name="file" :multiple="true" action="//jsonplaceholder.typicode.com/posts/" :headers="headers" @change="handleChange">
            <a-button>
            <a-icon type="upload" /> Click to Upload
            </a-button>
        </a-upload>
    </div>
</template>

<script>
export default {
    data () {
        return {
        headers: {
            authorization: 'authorization-text',
        }
    }
  },
  methods: {
    handleChange(info) {
        console.log(info,3333);
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            this.$message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            this.$message.error(`${info.file.name} file upload failed.`);
        }
    },
  },
}
</script>

<style>

</style>
