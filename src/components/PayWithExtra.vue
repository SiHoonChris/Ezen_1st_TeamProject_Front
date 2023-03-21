<template>
    <div class="container mt-4 mb-4">
        <ol class="list-group offset-md-1 col-md-10" id="listSec">
            <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action" @click="listClicked(0)">
                <div class="ms-2 me-auto mt-2 mb-2">
                    <label class="list-group-item-action">
                        <input class="form-check-input me-1" type="radio" name="extra" id="extra1" ref="extra1" checked/>
                        네이버페이
                    </label>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action" @click="listClicked(1)">
                <div class="ms-2 me-auto mt-2 mb-2">
                    <label class="list-group-item-action">
                        <input class="form-check-input me-1" type="radio" name="extra" id="extra2" ref="extra2"/>
                        카카오페이
                    </label>
                </div>

            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action" @click="listClicked(2)">
                <div class="ms-2 me-auto mt-2 mb-2">
                    <label class="list-group-item-action">
                        <input class="form-check-input me-1" type="radio" name="extra" id="extra3" ref="extra3"/>
                        토스페이
                    </label>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action" @click="listClicked(3)">
                <div class="ms-2 me-auto mt-2 mb-2">
                    <label class="list-group-item-action">
                        <input class="form-check-input me-1" type="radio" name="extra" id="extra4" ref="extra4"/>
                        문화상품권
                    </label>
                </div>
            </li>
        </ol>
    </div>

</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        listClicked(idx) {
            switch(idx) {
                case 0:
                    this.$refs.extra1.checked = true
                    break;
                case 1:
                    this.$refs.extra2.checked = true
                    break;
                case 2:
                    this.$refs.extra3.checked = true
                    break;
                case 3:
                    this.$refs.extra4.checked = true
                    break;
            }
        }
    }
}
</script>

<style scoped>

</style>