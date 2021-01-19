// Action Creators

const setUser = (payload) => ({ type: "SET_USER", payload })

export const logUserOut = () => ({ type: "LOG_OUT" })

// Methods

export const fetchUser = (userInfo) => dispatch => {
    console.log(userInfo)
    return fetch(`http://199.43.206.194:6001/api/auth/login`, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
        .then(res => { return res.json() })
        .then(data => {
            console.log(data.data.user)
            localStorage.setItem("token", data.data.token)
            dispatch(setUser(data.data.user))
        })
        .catch(err => {
            console.log(err);
        })
}