<template>
    <div class="container mt-4 mb-4">
        <ol class="list-group offset-md-1 col-md-10" id="listSec">
            <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action" @click="listClicked(0)">
                <div class="ms-2 me-auto mt-2 mb-2">
                    <label class="list-group-item-action">
                        <input class="form-check-input me-1" type="radio" name="standard" id="standard1" ref="standard1" checked/>
                        신용 카드
                    </label>
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action" @click="listClicked(1)">
                <div class="ms-2 me-auto mt-2 mb-2">
                    <label class="list-group-item-action">
                        <input class="form-check-input me-1" type="radio" name="standard" id="standard2" ref="standard2"/>
                        휴대전화
                    </label>
                </div>

            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action" @click="listClicked(2)">
                <div class="ms-2 me-auto mt-2 mb-2">
                    <label class="list-group-item-action">
                        <input class="form-check-input me-1" type="radio" name="standard" id="standard3" ref="standard3"/>
                        무통장 입금
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
                    this.$refs.standard1.checked = true
                    break;
                case 1:
                    this.$refs.standard2.checked = true
                    break;
                case 2:
                    this.$refs.standard3.checked = true
                    break;
            }
        }
    }
}
</script>

<style scoped>

</style>