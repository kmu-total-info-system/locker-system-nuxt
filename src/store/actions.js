export default {
    LockerGet: function (store) {
        this.$axios.$get('/locker/')
            .then(res => {
                console.log(res)
                store.commit('LockerId', res);
            })
            .catch(err => {
                console.log(err)
            })
    },
}
