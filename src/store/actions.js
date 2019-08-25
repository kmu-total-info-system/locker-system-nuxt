export default {
    LockerGet: function (store) {
        this.$axios.$get('/locker/')
            .then(res => {
                console.log(res.data);
                store.commit('Locker', res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }
}
