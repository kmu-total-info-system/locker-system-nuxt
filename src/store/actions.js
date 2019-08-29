export default {
    LockerGet: function (store) {
        this.$axios.$get('/locker/')
            .then(res => {
                store.commit('LockerId', res);
            })
            .catch(err => {
                // console.log(err)
            })
    },
}
