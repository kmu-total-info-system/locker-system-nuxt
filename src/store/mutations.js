export default {
    CurrentChange: function (state, data) {
        state.current = data.link
    },
    User: function (state, data) {
        state.user = data;
    },
    Logout: function (state) {
        state.user = {};
    },
    Locker: function (state, data) {
        state.locker = data;
    }
}
